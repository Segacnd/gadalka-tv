export interface TarotCard {
	id: string;
	number: string;
	name: string;
	original_name: string;
	arcan: string;
	meanings: {
		topic: string;
		general: string;
		description: string;
		reverse_description: string;
	}[];
	imageUrl: string;
	photo?: string;
	relatedCards: {
		id: string;
		name: string;
		image: string;
		arcan: string;
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
	standardName?: string;
}
