import { TarotCard } from '@/types/tarot';
import Image from 'next/image';
import Link from 'next/link';

// const CATEGORIES = {
// 	general: 'Общее значение',
// 	health: 'Здоровье',
// 	work: 'Работа',
// 	love: 'Любовь',
// 	finance: 'Финансы',
// 	day: 'Карта дня',
// 	advice: 'Совет'
// } as const;
//
// export type Category = keyof typeof CATEGORIES;

interface CardDetailsProps {
	card: TarotCard;
	activeTab: string;
}


const getTopicCategories = (card: TarotCard) => {
	return card.meanings.map(item => item.topic);
}

const getMeaningByCategory = (category: string, card: TarotCard) => {
	return card.meanings.find((meaning) => {
		return meaning.topic === category;
	});
};

export default function CardDetails({ card, activeTab }: CardDetailsProps) {
	const categories = getTopicCategories(card)
	return (
		<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
			<div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
				<div className='flex justify-center'>
					<Image
						src='/senkai-yami-4.jpg'
						alt={`Изображение карты Таро ${card.primary_name}`}
						width={300}
						height={400}
						className='h-[600px] w-auto object-cover object-center rounded-lg shadow-lg'
						priority
						quality={85}
						placeholder='blur'
						blurDataURL='data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvBUAFEH8GEP7/mREir/4PwP1PWwA='
						sizes='(max-width: 768px) 100vw, 300px'
					/>
				</div>

				<div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
					<h1 className='text-3xl font-bold tracking-tight text-white'>
						{card.primary_name}
					</h1>
					<p className='mt-3 text-lg text-gray-200'>{card.original_name}</p>
					{card.primary_name && card.primary_name !== card.primary_name && (
						<p className='mt-1 text-lg text-gray-300'>{card.primary_name}</p>
					)}
					<p className='mt-1 text-sm text-gray-300'>{card.arcana}</p>

					<div className='mt-10'>
						<div className='border-b border-gray-800'>
							<nav
								className='-mb-px flex space-x-8'
								aria-label='Категории значений карты'
							>
								{Object.entries(categories).map(([key, label]) => (
									<Link
										key={key}
										href={`?tab=${label}`}
										scroll={false}
										aria-current={activeTab === key ? 'page' : undefined}
										className={`
                      whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                      ${
												activeTab === label
													? 'border-white text-white'
													: 'border-transparent text-gray-200 hover:border-gray-600 hover:text-white'
											}
                    `}
									>
										{label}
									</Link>
								))}
							</nav>
						</div>

						<div className='mt-6'>
							{(() => {
								const meaning = getMeaningByCategory(activeTab, card);
								if (!meaning) {
									return (
										<p className='text-sm text-gray-300'>
											Информация по данной категории отсутствует
										</p>
									);
								}
								return (
									<div>
										<p className='text-sm text-gray-200 leading-relaxed'>
											{meaning.general}
										</p>

										<div className='mt-4'>
											<h2 className='text-sm font-medium text-white'>
												Прямое положение:
											</h2>
											<p className='mt-1 text-sm text-gray-200 leading-relaxed'>
												{meaning.direct_description}
											</p>
										</div>
										{meaning.reversed_description && (
											<div className='mt-4'>
												<h2 className='text-sm font-medium text-white'>
													Перевернутое положение:
												</h2>
												<p className='mt-1 text-sm text-gray-200 leading-relaxed'>
													{meaning.reversed_description}
												</p>
											</div>
										)}
									</div>
								);
							})()}
						</div>
					</div>

					{card.relatedCards && card.relatedCards.length > 0 && (
						<section aria-labelledby='related-cards-heading' className='mt-12'>
							<h2
								id='related-cards-heading'
								className='text-lg font-medium text-white'
							>
							Похожие карты
							</h2>
							<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
								{card.relatedCards.map((relatedCard) => (
									<Link
										key={relatedCard.id}
										href={`/cards/${relatedCard.id}`}
										className='group block'
										prefetch={false}
										aria-label={`Подробнее о карте ${relatedCard.name}`}
									>
										<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-900'>
											<Image
												src={relatedCard.image || `/senkai-yami-4.jpg`}
												alt={`Изображение карты ${relatedCard.name}`}
												width={100}
												height={150}
												className='h-full w-full object-cover object-center group-hover:opacity-75'
												quality={75}
												loading='lazy'
												sizes='(max-width: 640px) 33vw, 100px'
											/>
										</div>
										<h3 className='mt-2 text-sm font-medium text-white'>
											{relatedCard.name}
										</h3>
										<p className='mt-1 text-sm text-gray-300'>
											{relatedCard.arcana}
										</p>
									</Link>
								))}
							</div>
						</section>
					)}
				</div>
			</div>
		</div>
	);
}
