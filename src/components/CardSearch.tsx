'use client';

import { useState } from 'react';
import { TarotCard } from '@/types/tarot';
import Link from 'next/link';
import Image from 'next/image';

interface CardSearchProps {
	cards: TarotCard[];
}

export default function CardSearch({ cards }: CardSearchProps) {
	const [searchTerm, setSearchTerm] = useState('');

	const filteredCards = cards.filter((card) =>
		card.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
				<div className='mb-8'>
					<input
						type='text'
						placeholder='Поиск карт...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-full rounded-md border border-gray-800 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 focus:border-white focus:outline-none focus:ring-1 focus:ring-white'
					/>
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
									src={card.imageUrl}
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
