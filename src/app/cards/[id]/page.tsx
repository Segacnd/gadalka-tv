import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTarotCardById } from '@/data/tarot-cards';
import CardDetails from '@/components/CardDetails';

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	const card = getTarotCardById(params.id);

	if (!card) {
		return {
			title: 'Карта не найдена',
		};
	}

	return {
		title: `${card.name} - Значение карты Таро`,
		description: `Узнайте значение карты Таро ${card.name} (${
			card.original_name
		}). ${card.meanings[0]?.description?.slice(0, 160)}...`,
		openGraph: {
			title: `${card.name} - Значение карты Таро`,
			description: `Узнайте значение карты Таро ${card.name} (${card.original_name})`,
			images: [
				{
					url: card.imageUrl,
					width: 300,
					height: 400,
					alt: card.name,
				},
			],
		},
	};
}

export async function generateStaticParams() {
	const cards = getTarotCards();
	return cards.map((card) => ({
		id: card.id,
	}));
}

export default async function CardPage({ params }: { params: { id: string } }) {
	const card = getTarotCardById(params.id);

	if (!card) {
		notFound();
	}

	return <CardDetails card={card} />;
}
