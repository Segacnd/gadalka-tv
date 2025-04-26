import { Metadata } from 'next';
import CardSearch from '@/components/CardSearch';
import Breadcrumbs from '@/components/Breadcrumbs';
import Script from 'next/script';
import { getTarotCards } from '@/data/tarot-cards';

// Улучшенные метаданные для страницы всех карт
export const metadata: Metadata = {
	title: 'Карты Таро - Полный список и значения | Гадание и толкование',
	description:
		'Исследуйте полный список из 78 карт Таро с подробными значениями и толкованиями. Узнайте значение каждой карты в прямом и перевернутом положении для гадания.',
	keywords:
		'карты таро, список карт таро, значения карт таро, толкование таро, старшие арканы, младшие арканы, гадание на таро',
	openGraph: {
		type: 'website',
		title: 'Карты Таро - Полный список и толкования',
		description: 'Исследуйте все 78 карт Таро с их значениями и символизмом',
		url: 'https://gadalka-tv.vercel.app/cards',
		images: [
			{
				url: 'https://gadalka-tv.vercel.app/images/og-cards.jpg',
				width: 1200,
				height: 630,
				alt: 'Карты Таро - Полный список',
			},
		],
	},
	alternates: {
		canonical: 'https://gadalka-tv.vercel.app/cards',
	},
};

const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Карты Таро', href: '/cards' },
];

// Структурированные данные для списка карт
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

// Схема хлебных крошек
const breadcrumbsSchema = {
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: breadcrumbs.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.label,
		item: `https://gadalka-tv.vercel.app${item.href}`,
	})),
};

// Настройка кэширования страницы (ISR)
export const revalidate = 3600; // Обновлять каждый час

export default function CardsPage({
	searchParams,
}: {
	searchParams: { q?: string; tab?: string };
}) {
	const cards = getTarotCards();

	return (
		<>
			<Script
				id='cards-structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Script
				id='breadcrumbs-structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
			/>
			<Breadcrumbs items={breadcrumbs} />
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<h1 className='text-3xl font-bold text-white mb-8'>Карты Таро</h1>
				<div className='mb-3'>
					<p className='text-gray-400'>
						Исследуйте полный список карт Таро с подробными значениями и
						толкованиями. Узнайте значение каждой карты в прямом и перевернутом
						положении.
					</p>
				</div>
				<section aria-labelledby='card-search-heading'>
					<h2 id='card-search-heading' className='sr-only'>
						Поиск карт Таро
					</h2>
					<CardSearch cards={cards} searchParams={searchParams} />
				</section>
			</div>
		</>
	);
}
