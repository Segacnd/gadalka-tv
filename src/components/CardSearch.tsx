import { TarotCard } from '@/types/tarot';
import Link from 'next/link';
import Image from 'next/image';
import SearchInput from './SearchInput';

interface CardSearchProps {
	cards: TarotCard[];
	searchParams: { q?: string };
}

export default function CardSearch({ cards, searchParams }: CardSearchProps) {
	const searchTerm = searchParams.q || '';

	const filteredCards = cards.filter((card) =>
		card.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-2xl py-16 sm:py-8 lg:max-w-none lg:py-10'>
				<div className='mb-6'>
					<SearchInput defaultValue={searchTerm} />
				</div>

				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{filteredCards.map((card) => (
						<Link
							key={card.id}
							href={`/cards/${card.id}`}
							className='group block'
							prefetch={false}
						>
							<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-900'>
								<Image
									src='/senkai-yami-4.jpg'
									alt={card.name}
									width={300}
									height={400}
									className='h-full w-full object-cover object-center group-hover:opacity-75'
									quality={75}
									loading='lazy'
								/>
							</div>
							<h3 className='mt-2 text-sm text-white'>{card.name}</h3>
							<p className='mt-1 text-sm text-gray-400'>{card.arcan}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
