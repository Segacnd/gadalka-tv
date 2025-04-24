import { TarotCard } from '@/types/tarot';
import cardsData from './cards.json';

export const tarotCards: TarotCard[] = cardsData.map((item, index) => ({
	id: (index + 1).toString(),
	number: item.card?.number || '',
	name: item.card?.name || '',
	original_name: item.card?.original_name || '',
	arcan: item.card?.arcan || '',
	meanings: item.meanings || [],
	imageUrl: `/cards/${(item.card?.original_name || '')
		.toLowerCase()
		.replace(/\s+/g, '-')}.jpg`,
}));
