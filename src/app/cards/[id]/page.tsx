import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTarotCardById, getTarotCards } from '@/data/tarot-cards';
import CardDetails from '@/components/CardDetails';
import Breadcrumbs from '@/components/Breadcrumbs';
import Script from 'next/script';
import { Category } from '@/components/CardDetails';

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	const card = getTarotCardById(params.id);

	if (!card) {
		return {
			title: 'Карта не найдена',
			robots: {
				index: false,
				follow: true,
			},
		};
	}

	const firstMeaning = card.meanings[0] || {};
	const description = firstMeaning.direct_description
		? `${firstMeaning.direct_description.slice(0, 160)}...`
		: `Узнайте значение карты Таро ${card.primary_name} (${card.original_name}).`;

	return {
		title: `${card.primary_name} (${card.original_name}) - Значение карты Таро | ${card.arcana}`,
		description,
		keywords: `${card.primary_name}, ${card.original_name}, ${card.arcana}, значение карты таро, толкование, гадание, символизм карты`,
		openGraph: {
			type: 'article',
			title: `${card.primary_name} - Значение карты Таро`,
			description,
			url: `https://gadalka-tv.vercel.app/cards/${card.id}`,
			images: [
				{
					url: card.imageUrl,
					width: 300,
					height: 400,
					alt: `Карта Таро ${card.primary_name}`,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: `${card.primary_name} - Значение карты Таро`,
			description,
			images: [card.imageUrl],
		},
		alternates: {
			canonical: `https://gadalka-tv.vercel.app/cards/${card.id}`,
		},
	};
}

export async function generateStaticParams() {
	const cards = getTarotCards();
	return cards.map((card) => ({
		id: card.id,
	}));
}

type Params = { id: string };
type SearchParams = { tab?: Category };

// Настройка кэширования страницы (ISR)
export const revalidate = 3600; // Обновлять каждый час

export default async function Page({
	params,
	searchParams,
}: {
	params: Params;
	searchParams: SearchParams;
}) {
	const { id } = params;
	const { tab = 'general' } = searchParams;
	const card = getTarotCardById(id);

	if (!card) {
		notFound();
	}

	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{ label: 'Карты Таро', href: '/cards' },
		{ label: card.primary_name, href: `/cards/${card.id}` },
	];

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: `${card.primary_name} - Значение карты Таро`,
		description: card.meanings[0]?.direct_description || '',
		image: card.imageUrl,
		author: {
			'@type': 'Organization',
			name: 'Таро',
			url: 'https://gadalka-tv.vercel.app',
		},
		publisher: {
			'@type': 'Organization',
			name: 'Таро',
			logo: {
				'@type': 'ImageObject',
				url: 'https://gadalka-tv.vercel.app/logo.png',
			},
		},
		datePublished: new Date().toISOString().split('T')[0],
		dateModified: new Date().toISOString().split('T')[0],
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://gadalka-tv.vercel.app/cards/${card.id}`,
		},
		about: {
			'@type': 'Thing',
			name: card.primary_name,
			description: card.meanings[0]?.direct_description || '',
			sameAs: `https://en.wikipedia.org/wiki/${card.original_name.replace(
				/\s+/g,
				'_'
			)}_tarot_card`,
		},
	};

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

	return (
		<>
			<Script
				id='card-structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Script
				id='breadcrumbs-structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
			/>
			<Breadcrumbs items={breadcrumbs} />
			<CardDetails card={card} activeTab={tab} />
		</>
	);
}
