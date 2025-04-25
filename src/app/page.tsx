import Link from 'next/link';
import CardOfTheDay from '@/components/CardOfTheDay';
import { Metadata } from 'next';

// Улучшаем метаданные главной страницы
export const metadata: Metadata = {
	title:
		'Таро - Погрузитесь в мир древней мудрости карт | Гадания и толкования',
	description:
		'Исследуйте значения карт Таро, получите ежедневное предсказание с картой дня и раскройте тайны будущего через различные расклады.',
	keywords:
		'таро, карты таро, гадание на таро, карта дня, толкование карт, предсказания, оракул, арканы, гадание онлайн',
	openGraph: {
		type: 'website',
		title: 'Таро - Мир древней мудрости',
		description:
			'Исследуйте значения карт Таро и получите ежедневное предсказание',
		url: 'https://gadalka-tv.vercel.app',
		siteName: 'Таро',
		images: [
			{
				url: 'https://gadalka-tv.vercel.app/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Таро - Мир древней мудрости',
			},
		],
	},
};

// Настройка кэширования страницы (ISR)
export const revalidate = 86400; // Обновлять каждые 24 часа

export default function Home() {
	return (
		<main className='relative min-h-screen'>
			<div className='relative min-h-screen mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-center justify-center'>
				<div className='mx-auto max-w-2xl text-center -translate-y-[10%]'>
					<h1 className='bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl'>
						Раскройте тайны Таро
					</h1>
					<p className='mt-6 text-lg leading-8 text-gray-200'>
						Погрузитесь в мир древней мудрости и символов. Каждая карта - это
						ключ к пониманию вашего прошлого, настоящего и будущего. Откройте
						для себя скрытые знания и найдите ответы на свои вопросы.
					</p>
					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<Link
							href='/cards'
							className='rounded-md bg-gradient-to-r from-gray-800 to-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 hover:from-gray-700 hover:to-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
						>
							Начать путешествие
						</Link>
					</div>
				</div>
			</div>

			{/* Card of the Day */}
			<div className='mx-auto max-w-7xl px-6 mb-16'>
				<CardOfTheDay />
			</div>

			{/* Features grid */}
			<div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8'>
				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
					<Link
						href='/cards'
						className='group relative overflow-hidden rounded-lg bg-black/50 p-6 backdrop-blur-sm transition-all hover:bg-black/70'
					>
						<h2 className='text-xl font-semibold text-white'>Карты Таро</h2>
						<p className='mt-2 text-sm text-gray-300'>
							Исследуйте значения и толкования карт Таро
						</p>
						<div className='absolute -right-1 -top-1 h-24 w-24 rounded-bl-full bg-white/10 transition-all group-hover:bg-white/20' />
					</Link>

					<Link
						href='/readings'
						className='group relative overflow-hidden rounded-lg bg-black/50 p-6 backdrop-blur-sm transition-all hover:bg-black/70'
					>
						<h2 className='text-xl font-semibold text-white'>Гадания</h2>
						<p className='mt-2 text-sm text-gray-300'>
							Различные расклады и методы гадания
						</p>
						<div className='absolute -right-1 -top-1 h-24 w-24 rounded-bl-full bg-white/10 transition-all group-hover:bg-white/20' />
					</Link>

					<Link
						href='/faq'
						className='group relative overflow-hidden rounded-lg bg-black/50 p-6 backdrop-blur-sm transition-all hover:bg-black/70'
					>
						<h2 className='text-xl font-semibold text-white'>FAQ</h2>
						<p className='mt-2 text-sm text-gray-300'>
							Ответы на часто задаваемые вопросы
						</p>
						<div className='absolute -right-1 -top-1 h-24 w-24 rounded-bl-full bg-white/10 transition-all group-hover:bg-white/20' />
					</Link>

					<Link
						href='/contacts'
						className='group relative overflow-hidden rounded-lg bg-black/50 p-6 backdrop-blur-sm transition-all hover:bg-black/70'
					>
						<h2 className='text-xl font-semibold text-white'>Контакты</h2>
						<p className='mt-2 text-sm text-gray-300'>
							Свяжитесь с нами для консультации
						</p>
						<div className='absolute -right-1 -top-1 h-24 w-24 rounded-bl-full bg-white/10 transition-all group-hover:bg-white/20' />
					</Link>
				</div>
			</div>
		</main>
	);
}
