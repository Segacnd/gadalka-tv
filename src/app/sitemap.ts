import { MetadataRoute } from 'next';
import { getTarotCards } from '@/data/tarot-cards';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = 'https://tarot.ru';
	const cards = getTarotCards();

	const routes = ['', '/cards', '/readings', '/blog', '/contacts'].map(
		(route) => ({
			url: `${baseUrl}${route}`,
			lastModified: new Date(),
			changeFrequency: 'daily' as const,
			priority: route === '' ? 1 : 0.8,
		})
	);

	const cardRoutes = cards.map((card) => ({
		url: `${baseUrl}/cards/${card.id}`,
		lastModified: new Date(),
		changeFrequency: 'weekly' as const,
		priority: 0.9,
	}));

	return [...routes, ...cardRoutes];
}
