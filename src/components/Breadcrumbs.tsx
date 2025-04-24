import Link from 'next/link';

interface BreadcrumbItem {
	label: string;
	href: string;
}

interface BreadcrumbsProps {
	items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
	return (
		<nav
			className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
			aria-label='Breadcrumb'
		>
			<ol className='flex items-center space-x-4 py-4'>
				{items.map((item, index) => (
					<li key={item.href}>
						<div className='flex items-center'>
							{index > 0 && (
								<svg
									className='h-5 w-5 flex-shrink-0 text-gray-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									aria-hidden='true'
								>
									<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
								</svg>
							)}
							<Link
								href={item.href}
								className={`ml-4 text-sm font-medium ${
									index === items.length - 1
										? 'text-white'
										: 'text-gray-400 hover:text-gray-300'
								}`}
							>
								{item.label}
							</Link>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
}
