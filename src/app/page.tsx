import Link from 'next/link';

export default function Home() {
	return (
		<main className='relative min-h-screen bg-black'>
			{/* Animated background */}
			<div className='absolute inset-0 -z-10 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black' />
				<div className='absolute inset-0 bg-[url("/images/stars.png")] opacity-10' />
				<div className='absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 via-transparent to-white/5' />
			</div>

			{/* Content */}
			<div className='relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<h1 className='bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl'>
						Раскройте тайны Таро
					</h1>
					<p className='mt-6 text-lg leading-8 text-gray-400'>
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

			{/* Features grid */}
			<div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8'>
				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
					<Link
						href='/cards'
						className='group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10'
					>
						<h2 className='text-xl font-semibold text-white'>Карты Таро</h2>
						<p className='mt-2 text-sm text-gray-400'>
							Исследуйте значения и толкования карт Таро
						</p>
						<div className='absolute -right-1 -top-1 h-24 w-24 rounded-bl-full bg-white/10 transition-all group-hover:bg-white/20' />
					</Link>

					<Link
						href='/readings'
						className='group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10'
					>
						<h2 className='text-xl font-semibold text-white'>Гадания</h2>
						<p className='mt-2 text-sm text-gray-400'>
							Различные расклады и методы гадания
						</p>
						<div className='absolute -right-1 -top-1 h-24 w-24 rounded-bl-full bg-white/10 transition-all group-hover:bg-white/20' />
					</Link>

					<Link
						href='/faq'
						className='group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10'
					>
						<h2 className='text-xl font-semibold text-white'>FAQ</h2>
						<p className='mt-2 text-sm text-gray-400'>
							Ответы на часто задаваемые вопросы
						</p>
						<div className='absolute -right-1 -top-1 h-24 w-24 rounded-bl-full bg-white/10 transition-all group-hover:bg-white/20' />
					</Link>

					<Link
						href='/contacts'
						className='group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10'
					>
						<h2 className='text-xl font-semibold text-white'>Контакты</h2>
						<p className='mt-2 text-sm text-gray-400'>
							Свяжитесь с нами для консультации
						</p>
						<div className='absolute -right-1 -top-1 h-24 w-24 rounded-bl-full bg-white/10 transition-all group-hover:bg-white/20' />
					</Link>
				</div>
			</div>
		</main>
	);
}
