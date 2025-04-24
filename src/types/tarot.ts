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
	relatedCards: {
		id: string;
		name: string;
		image: string;
		arcan: string;
	}[];
}
