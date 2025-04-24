import { Metadata } from 'next';
import CardSearch from '@/components/CardSearch';
import Breadcrumbs from '@/components/Breadcrumbs';
import Script from 'next/script';
import { getTarotCards } from '@/data/tarot-cards';

export const metadata: Metadata = {
	title: 'Карты Таро - Полный список и значения',
	description:
		'Исследуйте полный список карт Таро с подробными значениями и толкованиями. Узнайте значение каждой карты в прямом и перевернутом положении.',
	keywords:
		'карты таро, список карт таро, значения карт таро, толкование таро, старшие арканы, младшие арканы',
};

const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Карты Таро', href: '/cards' },
];

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'CollectionPage',
	name: 'Карты Таро - Полный список',
	description:
		'Исследуйте полный список карт Таро с подробными значениями и толкованиями',
	mainEntity: {
		'@type': 'ItemList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				item: {
					'@type': 'Thing',
					name: 'Старшие Арканы',
					description: '22 карты Старших Арканов Таро',
				},
			},
			{
				'@type': 'ListItem',
				position: 2,
				item: {
					'@type': 'Thing',
					name: 'Младшие Арканы',
					description: '56 карт Младших Арканов Таро',
				},
			},
		],
	},
};

export default function CardsPage() {
	const cards = getTarotCards();

	return (
		<>
			<Script
				id='structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Breadcrumbs items={breadcrumbs} />
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<h1 className='text-3xl font-bold text-white mb-8'>Карты Таро</h1>
				<p className='text-gray-400 mb-8'>
					Исследуйте полный список карт Таро с подробными значениями и
					толкованиями. Узнайте значение каждой карты в прямом и перевернутом
					положении.
				</p>
				<CardSearch cards={cards} />
			</div>
		</>
	);
}
