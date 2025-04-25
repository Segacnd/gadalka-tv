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

	const description = `Узнайте значение карты Таро ${card.name} (${
		card.original_name
	}). ${card.meanings[0]?.description?.slice(0, 160)}...`;

	return {
		title: `${card.name} - Значение карты Таро | ${card.arcan}`,
		description,
		keywords: `${card.name}, ${card.original_name}, ${card.arcan}, значение карты таро, толкование, гадание`,
		openGraph: {
			title: `${card.name} - Значение карты Таро`,
			description,
			images: [
				{
					url: card.imageUrl,
					width: 300,
					height: 400,
					alt: card.name,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: `${card.name} - Значение карты Таро`,
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
		{ label: card.name, href: `/cards/${card.id}` },
	];

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: `${card.name} - Значение карты Таро`,
		description: card.meanings[0]?.description,
		image: card.imageUrl,
		author: {
			'@type': 'Organization',
			name: 'Таро',
		},
		publisher: {
			'@type': 'Organization',
			name: 'Таро',
			logo: {
				'@type': 'ImageObject',
				url: 'https://tarot.ru/logo.png',
			},
		},
		datePublished: new Date().toISOString(),
		dateModified: new Date().toISOString(),
	};

	return (
		<>
			<Script
				id='structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Breadcrumbs items={breadcrumbs} />
			<CardDetails card={card} activeTab={tab} />
		</>
	);
}
