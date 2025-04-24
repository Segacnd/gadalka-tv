import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | Таро - Ваш гид по картам Таро',
		default: 'Таро - Ваш гид по картам Таро',
	},
	description:
		'Исследуйте мир карт Таро, гаданий и духовного руководства. Узнайте значения всех карт Таро, их толкования и советы по гаданию.',
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
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<header className='bg-white shadow-sm'>
					<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex justify-between h-16'>
							<div className='flex'>
								<div className='flex-shrink-0 flex items-center'>
									<Link href='/' className='text-xl font-bold text-gray-900'>
										Таро
									</Link>
								</div>
								<div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
									<Link
										href='/'
										className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
									>
										Главная
									</Link>
									<Link
										href='/cards'
										className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
									>
										Карты
									</Link>
									<Link
										href='/blog'
										className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
									>
										Блог
									</Link>
									<Link
										href='/readings'
										className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
									>
										Гадания
									</Link>
									<Link
										href='/contacts'
										className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
									>
										Контакты
									</Link>
								</div>
							</div>
						</div>
					</nav>
				</header>
				<main className='min-h-screen bg-gray-50'>{children}</main>
				<footer className='bg-white'>
					<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div>
								<h3 className='text-sm font-semibold text-gray-900'>О нас</h3>
								<p className='mt-4 text-sm text-gray-500'>
									Ваш надежный гид в мире Таро. Мы помогаем людям понять
									значение карт и найти ответы на важные вопросы.
								</p>
							</div>
							<div>
								<h3 className='text-sm font-semibold text-gray-900'>
									Навигация
								</h3>
								<ul className='mt-4 space-y-4'>
									<li>
										<Link
											href='/cards'
											className='text-sm text-gray-500 hover:text-gray-900'
										>
											Карты Таро
										</Link>
									</li>
									<li>
										<Link
											href='/readings'
											className='text-sm text-gray-500 hover:text-gray-900'
										>
											Гадания
										</Link>
									</li>
									<li>
										<Link
											href='/blog'
											className='text-sm text-gray-500 hover:text-gray-900'
										>
											Блог
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-sm font-semibold text-gray-900'>
									Контакты
								</h3>
								<ul className='mt-4 space-y-4'>
									<li className='text-sm text-gray-500'>
										Email: info@tarot.ru
									</li>
									<li className='text-sm text-gray-500'>
										Телефон: +7 (XXX) XXX-XX-XX
									</li>
								</ul>
							</div>
						</div>
						<div className='mt-8 border-t border-gray-200 pt-8'>
							<p className='text-center text-gray-500 text-sm'>
								© {new Date().getFullYear()} Таро. Все права защищены.
							</p>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
