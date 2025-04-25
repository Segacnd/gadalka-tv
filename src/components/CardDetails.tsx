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
} as const;

export type Category = keyof typeof CATEGORIES;

interface CardDetailsProps {
	card: TarotCard;
	activeTab: Category;
}

const getMeaningByCategory = (category: Category, card: TarotCard) => {
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

export default function CardDetails({ card, activeTab }: CardDetailsProps) {
	return (
		<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
			<div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
				<div className='flex justify-center'>
					<Image
						src='/senkai-yami-4.jpg'
						alt={`Изображение карты Таро ${card.name}`}
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
						{card.name}
					</h1>
					<p className='mt-3 text-lg text-gray-200'>{card.original_name}</p>
					<p className='mt-1 text-sm text-gray-300'>{card.arcan}</p>

					<div className='mt-10'>
						<div className='border-b border-gray-800'>
							<nav
								className='-mb-px flex space-x-8'
								aria-label='Категории значений карты'
							>
								{Object.entries(CATEGORIES).map(([key, label]) => (
									<Link
										key={key}
										href={`?tab=${key}`}
										scroll={false}
										aria-current={activeTab === key ? 'page' : undefined}
										className={`
                      whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                      ${
												activeTab === key
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
											{meaning.description}
										</p>
										{meaning.reverse_description && (
											<div className='mt-4'>
												<h2 className='text-sm font-medium text-white'>
													Перевернутое положение:
												</h2>
												<p className='mt-1 text-sm text-gray-200 leading-relaxed'>
													{meaning.reverse_description}
												</p>
											</div>
										)}
									</div>
								);
							})()}
						</div>
					</div>

					<section aria-labelledby='related-cards-heading' className='mt-12'>
						<h2
							id='related-cards-heading'
							className='text-lg font-medium text-white'
						>
							Похожие карты
						</h2>
						<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
							{relatedCards.map((relatedCard) => (
								<Link
									key={relatedCard.id}
									href={`/cards/${relatedCard.id}`}
									className='group block'
									prefetch={false}
									aria-label={`Подробнее о карте ${relatedCard.name}`}
								>
									<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-900'>
										<Image
											src={`/senkai-yami-4.jpg`}
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
										{relatedCard.arcan}
									</p>
								</Link>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
