'use client';

import { useState } from 'react';
import { TarotCard } from '@/types/tarot';
import Image from 'next/image';

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

	return (
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
					<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
						{card.name}
					</h1>
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
				</div>
			</div>
		</div>
	);
}
