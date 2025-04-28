import Image from 'next/image';
import Link from 'next/link';
import { getCardOfTheDay } from '@/data/tarot-cards';

export default function CardOfTheDay() {
	// Это server component, поэтому мы можем получить данные прямо здесь
	const card = getCardOfTheDay();

	// Берем первое значение из массива meanings, если оно есть
	const meaning = card.meanings[0];
	const description = meaning?.direct_description || '';

	// Ограничиваем длину описания
	const shortDescription =
		description.length > 150
			? `${description.substring(0, 150)}...`
			: description;

	return (
		<section className='py-12  backdrop-blur-[4px] rounded-lg'>
			<div className='container mx-auto px-4'>
				<h2 className='text-2xl font-bold text-white text-center mb-8'>
					Карта дня
				</h2>

				<div className='flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-8'>
					<div className='w-full md:w-1/3 flex justify-center'>
						<div className='relative group'>
							<div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200'></div>
							<div className='relative'>
								<Image
									src='/senkai-yami-4.jpg'
									alt={`Карта Таро ${card.primary_name}`}
									width={200}
									height={320}
									className='rounded-lg object-cover'
									priority
								/>
							</div>
						</div>
					</div>

					<div className='w-full md:w-2/3'>
						<h3 className='text-xl font-semibold text-white mb-2'>
							{card.primary_name}
						</h3>
						<p className='text-gray-300 text-sm mb-4'>
							{card.original_name} • {card.arcana}
						</p>

						<p className='text-gray-200 mb-6'>{shortDescription}</p>

						<Link
							href={`/cards/${card.id}`}
							className='inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20'
						>
							Узнать больше
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-4 h-4 ml-2'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
