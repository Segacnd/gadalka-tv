import { Metadata } from 'next';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
	title: 'Часто задаваемые вопросы о Таро',
	description:
		'Ответы на популярные вопросы о картах Таро, гаданиях и толкованиях.',
};

const faqItems = [
	{
		question: 'Что такое карты Таро?',
		answer:
			'Карты Таро - это система символов и образов, используемая для гадания, медитации и духовного развития. Колода состоит из 78 карт, разделенных на Старшие и Младшие Арканы.',
	},
	{
		question: 'Как правильно гадать на картах Таро?',
		answer:
			'Для гадания на картах Таро важно создать спокойную атмосферу, сформулировать четкий вопрос и сосредоточиться на нем. Карты выкладываются в определенном порядке (раскладе), а затем интерпретируются в контексте заданного вопроса.',
	},
	{
		question: 'Что означают перевернутые карты?',
		answer:
			'Перевернутые карты обычно указывают на противоположное значение карты или на препятствия в реализации ее энергии. Однако, некоторые практики предпочитают не использовать перевернутые карты и интерпретировать все карты только в прямом положении.',
	},
	{
		question: 'Как часто можно гадать на картах Таро?',
		answer:
			'Рекомендуется не гадать слишком часто на один и тот же вопрос, так как это может привести к путанице. Оптимальный интервал между гаданиями на одну тему - 1-2 недели.',
	},
	{
		question: 'Можно ли гадать на картах Таро для других людей?',
		answer:
			'Да, можно гадать для других людей, но важно получить их разрешение и уважать их личные границы. Также важно помнить, что карты Таро - это инструмент для размышления, а не абсолютная истина.',
	},
];

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: faqItems.map((item) => ({
		'@type': 'Question',
		name: item.question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: item.answer,
		},
	})),
};

export default function FAQPage() {
	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{ label: 'FAQ', href: '/faq' },
	];

	return (
		<>
			<Script
				id='faq-structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Breadcrumbs items={breadcrumbs} />
			<div className='max-w-3xl mx-auto px-4 py-8'>
				<h1 className='text-3xl font-bold mb-8'>Часто задаваемые вопросы</h1>
				<div className='space-y-6'>
					{faqItems.map((item, index) => (
						<div key={index} className='bg-white p-6 rounded-lg shadow-sm'>
							<h2 className='text-xl font-semibold mb-4'>{item.question}</h2>
							<p className='text-gray-600'>{item.answer}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
