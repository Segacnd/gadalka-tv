export interface TarotCard {
	id: string;
	number: string;
	primary_name: string;
	original_name: string;
	arcana: Arcana;
	suit: Suit | null;
	court: Court | null;
	meanings: {
		topic: string;
		general: string;
		direct_description: string;
		reversed_description: string;
	}[];
	imageUrl: string;
	photo?: string;
	relatedCards: {
		id: string;
		name: string;
		image: string;
		arcana: string;
	}[];
	symbolism?: {
		key_symbols: string[];
		explanation: string;
	};
	correspondences?: {
		element: string;
		planet: string;
		astrological_sign: string;
		hebrew_letter: string;
		numerology: string;
		colors: string[];
		crystals: string[];
		herbs: string[];
	};
	cardGroup?: string;
}


export enum Arcana {
	major = 'major',
	minor = 'minor',
}

export enum Suit {
	wand = 'wand',
	sward = 'sward',
	pentacle = 'pentacle',
	cup = 'cup'
}

export enum Court {
	page = 'page',
	knight = 'knight',
	queen = 'queen',
	king = 'king',
}
