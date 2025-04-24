import Link from 'next/link';

export default function Home() {
	return (
		<div className='relative isolate overflow-hidden'>
			<div className='mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40'>
				<div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8'>
					<h1 className='mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
						Discover the Wisdom of Tarot
					</h1>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						Explore the ancient art of tarot reading and discover the hidden
						meanings behind each card. Our comprehensive guide will help you
						understand the symbolism and interpretations of tarot cards.
					</p>
					<div className='mt-10 flex items-center gap-x-6'>
						<Link
							href='/cards'
							className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Explore Cards
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
