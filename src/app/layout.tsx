import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
	title: 'Таро - Ваш гид по картам Таро',
	description: 'Исследуйте значения и толкования карт Таро',
	keywords:
		'таро, карты таро, гадание, толкование карт, духовное руководство, значение карт, гадание на таро',
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		url: 'https://tarot.ru',
		siteName: 'Таро',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Таро - Ваш гид по картам Таро',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Таро - Ваш гид по картам Таро',
		description: 'Исследуйте мир карт Таро, гаданий и духовного руководства',
		images: ['/twitter-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'oamKpJzHebg8MyUpVwgk3k5YnLGcZA5MlKMe8kcr0QA',
		yandex: 'your-yandex-verification-code',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ru' className={inter.className}>
			<head>
				<meta
					httpEquiv='Cache-Control'
					content='max-age=3600, must-revalidate'
				/>
			</head>
			<body>
				<div className='min-h-screen relative bg-black text-white isolate'>
					<div className='fixed inset-0 -z-10'>
						<div className='relative h-full w-full'>
							<Image
								src='/images/tarot-bg-optimized.webp'
								alt='Мистический фон с картами Таро'
								fill
								priority
								quality={80}
								sizes='100vw'
								placeholder='blur'
								blurDataURL='data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvBUAFEH8GEP7/mREir/4PwP1PWwA='
								className='object-cover object-center'
							/>
							<div className='absolute inset-0 bg-black/60' />
						</div>
					</div>
					<header className='border-b border-gray-800'>
						<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
							<div className='flex h-16 justify-between items-center'>
								<div className='flex'>
									<Link
										href='/'
										className='text-xl font-bold text-white hover:text-gray-300'
										aria-label='На главную страницу'
									>
										Таро
									</Link>
								</div>
								<div className='flex space-x-8'>
									<Link
										href='/cards'
										className='text-gray-200 hover:text-white'
									>
										Карты
									</Link>
									<Link
										href='/readings'
										className='text-gray-200 hover:text-white'
									>
										Гадания
									</Link>
									<Link href='/faq' className='text-gray-200 hover:text-white'>
										FAQ
									</Link>
									<Link
										href='/contacts'
										className='text-gray-200 hover:text-white'
									>
										Контакты
									</Link>
								</div>
							</div>
						</nav>
					</header>
					<main>{children}</main>
					<footer className='border-t border-gray-800'>
						<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
							<div className='flex justify-between items-center'>
								<p className='text-gray-300'>
									© 2024 Таро. Все права защищены.
								</p>
								<div className='flex space-x-6'>
									<Link
										href='/privacy'
										className='text-gray-200 hover:text-white'
									>
										Политика конфиденциальности
									</Link>
									<Link
										href='/terms'
										className='text-gray-200 hover:text-white'
									>
										Условия использования
									</Link>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
