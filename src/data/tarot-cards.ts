import { TarotCard } from '@/types/tarot';
import cardsData from './cards-complete.json';
import { cache } from 'react';

let cachedCards: TarotCard[] | null = null;

export const getTarotCards = cache((): TarotCard[] => {
	if (cachedCards) {
		return cachedCards;
	}

	cachedCards = cardsData.map((item, index) => {
		// Определяем группу карт для связывания
		let cardGroup = '';

		// Группируем карты по их типу и характеристикам
		if (item.card?.arcan === 'Старший Аркан') {
			cardGroup = 'major';
		} else if (item.card?.arcan === 'Младший Аркан') {
			// Группировка по мастям для младших арканов
			const originalName = item.card?.original_name || '';
			if (originalName.includes('Cups') || originalName.includes('Кубков')) {
				cardGroup = 'cups';
			} else if (
				originalName.includes('Wands') ||
				originalName.includes('Жезлов')
			) {
				cardGroup = 'wands';
			} else if (
				originalName.includes('Swords') ||
				originalName.includes('Мечей')
			) {
				cardGroup = 'swords';
			} else if (
				originalName.includes('Pentacles') ||
				originalName.includes('Пентаклей')
			) {
				cardGroup = 'pentacles';
			}
		}

		return {
			id: (index + 1).toString(),
			number: item.card?.number || '',
			name: item.card?.name || '',
			original_name: item.card?.original_name || '',
			arcan: item.card?.arcan || '',
			meanings: item.meanings || [],
			imageUrl: `/images/cards/${(item.card?.original_name || '')
				.toLowerCase()
				.replace(/\s+/g, '-')}.webp`,
			photo: item.card?.photo || '',
			relatedCards: [], // Будет заполнено позднее
			symbolism: item.card?.symbolism,
			correspondences: item.card?.correspondences,
			cardGroup, // Добавляем группу для последующего связывания
			standardName: item.card?.standard_name || '',
		};
	});

	// Теперь заполняем relatedCards для каждой карты
	cachedCards = cachedCards.map((card) => {
		// Находим похожие карты (карты из той же группы)
		const related = cachedCards!
			.filter(
				(relatedCard) =>
					// Исключаем саму карту и выбираем только карты из той же группы
					relatedCard.id !== card.id && relatedCard.cardGroup === card.cardGroup
			)
			// Перемешиваем карты, чтобы получить разнообразие
			.sort(() => 0.5 - Math.random())
			// Берем только первые 3 карты
			.slice(0, 3)
			// Преобразуем в нужный формат
			.map((relatedCard) => ({
				id: relatedCard.id,
				name: relatedCard.name,
				image: relatedCard.imageUrl,
				arcan: relatedCard.arcan,
			}));

		return {
			...card,
			relatedCards: related,
		};
	});

	return cachedCards;
});

export const getTarotCardById = cache((id: string): TarotCard | undefined => {
	return getTarotCards().find((card) => card.id === id);
});

// Функция для получения карты дня
export const getCardOfTheDay = cache((): TarotCard => {
	const cards = getTarotCards();

	// Используем текущую дату как seed для генерации псевдослучайного числа
	// Это гарантирует, что в течение одного дня будет возвращаться одна и та же карта
	const today = new Date();
	const dateString = `${today.getFullYear()}-${
		today.getMonth() + 1
	}-${today.getDate()}`;

	let hash = 0;
	for (let i = 0; i < dateString.length; i++) {
		hash = (hash << 5) - hash + dateString.charCodeAt(i);
		hash |= 0;
	}

	const index = Math.abs(hash) % cards.length;

	return cards[index];
});
