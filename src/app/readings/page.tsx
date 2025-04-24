import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'Гадания на Таро - Расклады и толкования',
	description:
		'Исследуйте различные расклады Таро для гадания. Узнайте, как правильно интерпретировать карты и получать ответы на свои вопросы.',
	keywords:
		'гадание на таро, расклады таро, толкование таро, гадание онлайн, карты таро',
};

const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Гадания', href: '/readings' },
];

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'CollectionPage',
	name: 'Гадания на Таро',
	description: 'Различные расклады Таро для гадания и толкования',
	mainEntity: {
		'@type': 'ItemList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				item: {
					'@type': 'Thing',
					name: 'Расклад на день',
					description: 'Простой расклад на один день',
				},
			},
			{
				'@type': 'ListItem',
				position: 2,
				item: {
					'@type': 'Thing',
					name: 'Расклад на отношения',
					description: 'Расклад для анализа отношений',
				},
			},
			{
				'@type': 'ListItem',
				position: 3,
				item: {
					'@type': 'Thing',
					name: 'Расклад на ситуацию',
					description: 'Подробный анализ текущей ситуации',
				},
			},
		],
	},
};

export default function ReadingsPage() {
	return (
		<>
			<Script
				id='structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Breadcrumbs items={breadcrumbs} />
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<h1 className='text-3xl font-bold text-white mb-8'>Гадания на Таро</h1>
				<p className='text-gray-400 mb-8'>
					Исследуйте различные расклады Таро для гадания. Узнайте, как правильно
					интерпретировать карты и получать ответы на свои вопросы.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					<div className='bg-gray-900 p-6 rounded-lg border border-gray-800'>
						<h2 className='text-xl font-semibold text-white mb-4'>
							Расклад на день
						</h2>
						<p className='text-gray-400 mb-4'>
							Простой расклад, который поможет вам понять, что ждет вас сегодня.
						</p>
						<button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200'>
							Начать гадание
						</button>
					</div>
					<div className='bg-gray-900 p-6 rounded-lg border border-gray-800'>
						<h2 className='text-xl font-semibold text-white mb-4'>
							Расклад на отношения
						</h2>
						<p className='text-gray-400 mb-4'>
							Анализ ваших отношений с партнером, друзьями или коллегами.
						</p>
						<button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200'>
							Начать гадание
						</button>
					</div>
					<div className='bg-gray-900 p-6 rounded-lg border border-gray-800'>
						<h2 className='text-xl font-semibold text-white mb-4'>
							Расклад на ситуацию
						</h2>
						<p className='text-gray-400 mb-4'>
							Подробный анализ текущей ситуации и возможных путей развития.
						</p>
						<button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200'>
							Начать гадание
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
