'use client';

import { useState } from 'react';
import { TarotCard } from '@/types/tarot';
import Image from 'next/image';
import Link from 'next/link';

interface CardSearchProps {
	cards: TarotCard[];
}

export default function CardSearch({ cards }: CardSearchProps) {
	const [searchQuery, setSearchQuery] = useState('');

	const filteredCards = cards.filter(
		(card) =>
			card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			card.original_name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<>
			<div className='mb-8'>
				<input
					type='text'
					placeholder='Поиск карт...'
					className='w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>

			<div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
				{filteredCards.map((card) => (
					<Link key={card.id} href={`/cards/${card.id}`} className='group'>
						<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
							<Image
								src={card.imageUrl}
								alt={card.name}
								width={300}
								height={400}
								className='h-full w-full object-cover object-center group-hover:opacity-75'
							/>
						</div>
						<h3 className='mt-4 text-sm text-gray-700'>{card.name}</h3>
						<p className='mt-1 text-sm text-gray-500'>{card.arcan}</p>
					</Link>
				))}
			</div>
		</>
	);
}
