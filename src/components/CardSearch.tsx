import {Arcana, TarotCard} from '@/types/tarot';
import Link from 'next/link';
import Image from 'next/image';
import SearchInput from './SearchInput';

interface CardSearchProps {
	cards: TarotCard[];
	searchParams: { q?: string; tab?: string };
}

type TabType = 'all' | 'major' | 'minor' | 'court';

export default function CardSearch({ cards, searchParams }: CardSearchProps) {
	const searchTerm = searchParams.q || '';
	const activeTab = (searchParams.tab as TabType) || 'all';

	// Функция для фильтрации карт по типу аркана
	const filterCardsByType = (
		cards: TarotCard[],
		type: TabType
	): TarotCard[] => {
		if (type === 'all') return cards;
		if (type === 'major')
			return cards.filter((card) => card.arcana === Arcana.major);
		if (type === 'minor')
			return cards.filter((card) => card.arcana === Arcana.minor);
		if (type === 'court') {
			// Придворные карты имеют особое значение поля arcana: "Придворный Аркан"
			return cards.filter((card) => !!card.court);
		}
		return cards;
	};

	// Сначала фильтруем по поисковому запросу
	const searchFiltered = cards.filter((card) =>
		card.primary_name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Затем фильтруем по типу аркана
	const filteredCards = filterCardsByType(searchFiltered, activeTab);

	// Определяем количество карт для отображения на каждой вкладке
	const totalCards = searchFiltered.length;
	const majorCards = filterCardsByType(searchFiltered, 'major').length;
	const minorCards = filterCardsByType(searchFiltered, 'minor').length;
	const courtCards = filterCardsByType(searchFiltered, 'court').length;

	return (
		<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-2xl py-16 sm:py-8 lg:max-w-none lg:py-10'>
				<div className='mb-6'>
					<SearchInput defaultValue={searchTerm} />
				</div>

				{/* Табы для фильтрации карт */}
				<div className='border-b border-gray-700 mb-6'>
					<nav className='-mb-px flex space-x-6 overflow-x-auto'>
						<Link
							href={`/cards?q=${searchTerm}&tab=all`}
							className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
								activeTab === 'all'
									? 'border-white text-white'
									: 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
							}`}
						>
							Все карты ({totalCards})
						</Link>
						<Link
							href={`/cards?q=${searchTerm}&tab=major`}
							className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
								activeTab === 'major'
									? 'border-white text-white'
									: 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
							}`}
						>
							Старшие арканы ({majorCards})
						</Link>
						<Link
							href={`/cards?q=${searchTerm}&tab=minor`}
							className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
								activeTab === 'minor'
									? 'border-white text-white'
									: 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
							}`}
						>
							Младшие арканы ({minorCards})
						</Link>
						<Link
							href={`/cards?q=${searchTerm}&tab=court`}
							className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
								activeTab === 'court'
									? 'border-white text-white'
									: 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
							}`}
						>
							Придворные карты ({courtCards})
						</Link>
					</nav>
				</div>

				{filteredCards.length === 0 ? (
					<div className='text-center py-12'>
						<div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-6'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-8 h-8 text-gray-400'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
								/>
							</svg>
						</div>
						<h2 className='text-xl font-medium text-white mb-2'>
							Карты не найдены
						</h2>
						<p className='text-gray-300 mb-6 max-w-md mx-auto'>
							{searchTerm ? (
								<>
									По запросу &quot;<span className='italic'>{searchTerm}</span>
									&quot; ничего не найдено.
								</>
							) : (
								<>В этой категории нет карт.</>
							)}{' '}
							Попробуйте другой поисковый запрос или выберите другой тип
							арканов.
						</p>
						<Link
							href='/cards'
							className='inline-flex items-center justify-center rounded-md bg-gradient-to-r from-gray-800 to-black px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 hover:from-gray-700 hover:to-gray-900'
						>
							Показать все карты
						</Link>
					</div>
				) : (
					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						{filteredCards.map((card) => (
							<Link
								key={card.id}
								href={`/cards/${card.id}`}
								className='group block'
								prefetch={false}
								aria-label={`Подробнее о карте ${card.primary_name}`}
							>
								<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-900'>
									<Image
										src='/senkai-yami-4.jpg'
										alt='Изображение карты таро'
										width={300}
										height={400}
										className='h-full w-full object-cover object-center group-hover:opacity-75'
										quality={75}
										loading='lazy'
									/>
								</div>
								<h2 className='mt-2 text-sm text-white'>
									{card.primary_name}
									{card.primary_name && card.primary_name !== card.primary_name && (
										<span className='block text-xs text-gray-400 mt-1'>
											{card.primary_name}
										</span>
									)}
								</h2>
								<p className='mt-1 text-sm text-gray-400'>{card.arcana}</p>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
