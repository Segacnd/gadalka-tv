import { TarotCard } from '@/types/tarot';
import cardsData from './cards.json';

let cachedCards: TarotCard[] | null = null;

export function getTarotCards(): TarotCard[] {
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
		imageUrl: `/cards/${(item.card?.original_name || '')
			.toLowerCase()
			.replace(/\s+/g, '-')}.jpg`,
		relatedCards: [],
	}));

	return cachedCards;
}

export function getTarotCardById(id: string): TarotCard | undefined {
	return getTarotCards().find((card) => card.id === id);
}
