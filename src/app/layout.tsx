import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Tarot Cards - Your Guide to Tarot',
	description:
		'Explore the world of Tarot cards, readings, and spiritual guidance',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<header className='bg-white shadow-sm'>
					<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex justify-between h-16'>
							<div className='flex'>
								<div className='flex-shrink-0 flex items-center'>
									<a href='/' className='text-xl font-bold text-gray-900'>
										Tarot Cards
									</a>
								</div>
								<div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
									<a
										href='/'
										className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
									>
										Home
									</a>
									<a
										href='/cards'
										className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
									>
										Cards
									</a>
									<a
										href='/blog'
										className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
									>
										Blog
									</a>
									<a
										href='/readings'
										className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
									>
										Readings
									</a>
									<a
										href='/contacts'
										className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
									>
										Contacts
									</a>
								</div>
							</div>
						</div>
					</nav>
				</header>
				<main className='min-h-screen bg-gray-50'>{children}</main>
				<footer className='bg-white'>
					<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
						<p className='text-center text-gray-500 text-sm'>
							© {new Date().getFullYear()} Tarot Cards. All rights reserved.
						</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
