'use client';

import { useState } from 'react';
import { TarotCard } from '@/types/tarot';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const CATEGORIES = {
	general: 'Общее значение',
	health: 'Здоровье',
	work: 'Работа',
	love: 'Любовь',
	finance: 'Финансы',
	day: 'Карта дня',
};

interface CardDetailsProps {
	card: TarotCard;
}

export default function CardDetails({ card }: CardDetailsProps) {
	const [activeTab, setActiveTab] = useState('general');

	const getMeaningByCategory = (category: string) => {
		return card.meanings.find((meaning) => {
			const topic = meaning.topic.toLowerCase();
			if (category === 'general') {
				return topic.includes('положение') || topic.includes('значение');
			}
			if (category === 'health') {
				return topic.includes('здоров');
			}
			if (category === 'work') {
				return topic.includes('работ') || topic.includes('карьер');
			}
			if (category === 'love') {
				return topic.includes('любов') || topic.includes('отношен');
			}
			if (category === 'finance') {
				return topic.includes('финанс') || topic.includes('деньг');
			}
			if (category === 'day') {
				return topic.includes('день');
			}
			return false;
		});
	};

	const relatedCards = [
		{ id: '1', name: 'Маг', arcan: 'Старший Аркан' },
		{ id: '2', name: 'Верховная Жрица', arcan: 'Старший Аркан' },
		{ id: '3', name: 'Императрица', arcan: 'Старший Аркан' },
	];

	const ratingData = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: card.name,
		description: card.meanings[0]?.description,
		image: card.imageUrl,
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '4.8',
			reviewCount: '156',
			bestRating: '5',
			worstRating: '1',
		},
	};

	return (
		<>
			<Script
				id='rating-structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingData) }}
			/>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
					<div className='flex justify-center'>
						<Image
							src={card.imageUrl}
							alt={card.name}
							width={300}
							height={400}
							className='h-[600px] w-auto object-cover object-center'
							priority
						/>
					</div>

					<div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
						<div className='flex items-center justify-between'>
							<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
								{card.name}
							</h1>
							<div className='flex items-center'>
								<div className='flex items-center'>
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className={`h-5 w-5 ${
												i < 4 ? 'text-yellow-400' : 'text-gray-300'
											}`}
											fill='currentColor'
											viewBox='0 0 20 20'
										>
											<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
										</svg>
									))}
								</div>
								<span className='ml-2 text-sm text-gray-500'>
									(156 отзывов)
								</span>
							</div>
						</div>
						<p className='mt-3 text-lg text-gray-600'>{card.original_name}</p>
						<p className='mt-1 text-sm text-gray-500'>{card.arcan}</p>

						<div className='mt-10'>
							<div className='border-b border-gray-200'>
								<nav className='-mb-px flex space-x-8' aria-label='Tabs'>
									{Object.entries(CATEGORIES).map(([key, label]) => (
										<button
											key={key}
											onClick={() => setActiveTab(key)}
											className={`
                      whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                      ${
												activeTab === key
													? 'border-indigo-500 text-indigo-600'
													: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
											}
                    `}
										>
											{label}
										</button>
									))}
								</nav>
							</div>

							<div className='mt-6'>
								{(() => {
									const meaning = getMeaningByCategory(activeTab);
									if (!meaning) {
										return (
											<p className='text-sm text-gray-500'>
												Информация по данной категории отсутствует
											</p>
										);
									}
									return (
										<div>
											<p className='text-sm text-gray-600'>
												{meaning.description}
											</p>
											{meaning.reverse_description && (
												<div className='mt-4'>
													<h4 className='text-sm font-medium text-gray-900'>
														Перевернутое положение:
													</h4>
													<p className='mt-1 text-sm text-gray-600'>
														{meaning.reverse_description}
													</p>
												</div>
											)}
										</div>
									);
								})()}
							</div>
						</div>

						<div className='mt-12'>
							<h2 className='text-lg font-medium text-gray-900'>
								Похожие карты
							</h2>
							<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
								{relatedCards.map((relatedCard) => (
									<Link
										key={relatedCard.id}
										href={`/cards/${relatedCard.id}`}
										className='group block'
									>
										<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200'>
											<Image
												src={`/images/cards/${relatedCard.id}.jpg`}
												alt={relatedCard.name}
												width={200}
												height={300}
												className='h-full w-full object-cover object-center group-hover:opacity-75'
											/>
										</div>
										<h3 className='mt-2 text-sm text-gray-700'>
											{relatedCard.name}
										</h3>
										<p className='mt-1 text-sm text-gray-500'>
											{relatedCard.arcan}
										</p>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
