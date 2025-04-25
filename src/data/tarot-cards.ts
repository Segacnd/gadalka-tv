import { TarotCard } from '@/types/tarot';
import cardsData from './cards.json';
import { cache } from 'react';

let cachedCards: TarotCard[] | null = null;

export const getTarotCards = cache((): TarotCard[] => {
	if (cachedCards) {
		return cachedCards;
	}

	cachedCards = cardsData.map((item, index) => ({
		id: (index + 1).toString(),
		number: item.card?.number || '',
		name: item.card?.name || '',
		original_name: item.card?.original_name || '',
		arcan: item.card?.arcan || '',
		meanings: item.meanings || [],
		imageUrl: `/images/cards/${(item.card?.original_name || '')
			.toLowerCase()
			.replace(/\s+/g, '-')}.webp`,
		relatedCards: [],
	}));

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

	// Simple hash function for the date string
	let hash = 0;
	for (let i = 0; i < dateString.length; i++) {
		hash = (hash << 5) - hash + dateString.charCodeAt(i);
		hash |= 0; // Convert to 32bit integer
	}

	// Get a positive number and take modulo by the length of cards array
	const index = Math.abs(hash) % cards.length;

	return cards[index];
});
