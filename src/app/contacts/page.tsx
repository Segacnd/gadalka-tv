import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'Контакты - Свяжитесь с нами',
	description:
		'Свяжитесь с нами для получения дополнительной информации о картах Таро, гаданиях и толкованиях.',
	keywords: 'контакты таро, связь с тарологом, вопросы по таро, обратная связь',
};

const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Контакты', href: '/contacts' },
];

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	name: 'Контакты',
	description: 'Свяжитесь с нами для получения дополнительной информации',
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'customer service',
		email: 'info@tarot.ru',
		telephone: '+7 (XXX) XXX-XX-XX',
	},
};

export default function ContactsPage() {
	return (
		<>
			<Script
				id='structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Breadcrumbs items={breadcrumbs} />
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<h1 className='text-3xl font-bold text-white mb-8'>Контакты</h1>
				<p className='text-gray-400 mb-8'>
					Свяжитесь с нами для получения дополнительной информации о картах
					Таро, гаданиях и толкованиях.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='bg-gray-900 p-6 rounded-lg border border-gray-800'>
						<h2 className='text-xl font-semibold text-white mb-4'>
							Контактная информация
						</h2>
						<div className='space-y-4'>
							<div>
								<h3 className='text-gray-400'>Email</h3>
								<p className='text-white'>info@tarot.ru</p>
							</div>
							<div>
								<h3 className='text-gray-400'>Телефон</h3>
								<p className='text-white'>+7 (XXX) XXX-XX-XX</p>
							</div>
							<div>
								<h3 className='text-gray-400'>Адрес</h3>
								<p className='text-white'>г. Москва, ул. Примерная, д. 123</p>
							</div>
						</div>
					</div>
					<div className='bg-gray-900 p-6 rounded-lg border border-gray-800'>
						<h2 className='text-xl font-semibold text-white mb-4'>
							Напишите нам
						</h2>
						<form className='space-y-4'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-400'
								>
									Имя
								</label>
								<input
									type='text'
									id='name'
									name='name'
									className='mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-white focus:ring-white'
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-400'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									className='mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-white focus:ring-white'
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-400'
								>
									Сообщение
								</label>
								<textarea
									id='message'
									name='message'
									rows={4}
									className='mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-white focus:ring-white'
								></textarea>
							</div>
							<button
								type='submit'
								className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200'
							>
								Отправить
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
