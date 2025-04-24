import { tarotCards } from '@/data/tarot-cards';
import CardSearch from '@/components/CardSearch';

export default function CardsPage() {
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<CardSearch cards={tarotCards} />
			</div>
		</div>
	);
}
