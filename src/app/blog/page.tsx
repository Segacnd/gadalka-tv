import Link from 'next/link';

interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	date: string;
	slug: string;
}

// Mock data - in a real app, this would come from an API or database
const blogPosts: BlogPost[] = [
	{
		id: '1',
		title: 'Understanding Tarot Card Spreads',
		excerpt:
			'Learn about different tarot card spreads and how to use them effectively in your readings.',
		date: '2024-03-15',
		slug: 'understanding-tarot-card-spreads',
	},
	{
		id: '2',
		title: 'The History of Tarot',
		excerpt:
			'Explore the fascinating history of tarot cards and how they evolved into the modern practice we know today.',
		date: '2024-03-10',
		slug: 'history-of-tarot',
	},
	// Add more blog posts here
];

export default function BlogPage() {
	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Tarot Blog
					</h2>
					<p className='mt-2 text-lg leading-8 text-gray-600'>
						Learn about tarot, spirituality, and personal growth through our
						articles.
					</p>
				</div>
				<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className='flex flex-col items-start justify-between'
						>
							<div className='flex w-full flex-col gap-y-4'>
								<div className='flex items-center gap-x-4 text-xs'>
									<time dateTime={post.date} className='text-gray-500'>
										{new Date(post.date).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
									</time>
								</div>
								<div className='group relative'>
									<h3 className='text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
										<Link href={`/blog/${post.slug}`}>
											<span className='absolute inset-0' />
											{post.title}
										</Link>
									</h3>
									<p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
										{post.excerpt}
									</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
