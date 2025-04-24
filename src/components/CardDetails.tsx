'use client';

import { useState } from 'react';
import { TarotCard } from '@/types/tarot';
import Image from 'next/image';
import Link from 'next/link';

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
						quality={85}
						placeholder='blur'
						blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcYa91W4L1oPE6zDcaMkS1Ukr8ecWwyZHuBgwHOM92HRWsHgg6S9ctdN2wkmNqLqXVrPwK9o1RPjDrhWtGpMW5B0yjF/9k='
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

					<div className='mt-12'>
						<h2 className='text-lg font-medium text-gray-900'>Похожие карты</h2>
						<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
							{relatedCards.map((relatedCard) => (
								<Link
									key={relatedCard.id}
									href={`/cards/${relatedCard.id}`}
									className='group block'
									prefetch={false}
								>
									<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200'>
										<Image
											src={`/images/cards/${relatedCard.id}.jpg`}
											alt={relatedCard.name}
											width={200}
											height={300}
											className='h-full w-full object-cover object-center group-hover:opacity-75'
											quality={75}
											loading='lazy'
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
	);
}
