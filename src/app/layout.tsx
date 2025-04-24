import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Таро - Ваш гид по картам Таро',
	description: 'Исследуйте мир карт Таро, гаданий и духовного руководства',
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
						<p className='text-center text-gray-500 text-sm'>
							© {new Date().getFullYear()} Таро. Все права защищены.
						</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
