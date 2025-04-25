import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Политика конфиденциальности | Таро',
	description: 'Политика конфиденциальности сервиса Таро',
};

export default function PrivacyPage() {
	return (
		<div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
			<h1 className='text-3xl font-bold tracking-tight text-white mb-8'>
				Политика конфиденциальности
			</h1>

			<div className='prose prose-invert max-w-none'>
				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-white mb-4'>
						1. Общие положения
					</h2>
					<p className='text-gray-300 mb-4'>
						Настоящая Политика конфиденциальности (далее — «Политика»)
						определяет порядок обработки и защиты персональных данных
						пользователей (далее — «Пользователи») сервисом Таро (далее —
						«Сервис»).
					</p>
					<p className='text-gray-300'>
						Используя Сервис, Пользователь соглашается с условиями настоящей
						Политики.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-white mb-4'>
						2. Собираемая информация
					</h2>
					<p className='text-gray-300 mb-4'>
						Сервис может собирать следующую информацию:
					</p>
					<ul className='list-disc pl-6 text-gray-300 space-y-2'>
						<li>
							Технические данные (IP-адрес, тип браузера, операционная система)
						</li>
						<li>Информация о посещении сайта (время, страницы)</li>
						<li>Данные, предоставляемые Пользователем при обратной связи</li>
					</ul>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-white mb-4'>
						3. Использование информации
					</h2>
					<p className='text-gray-300 mb-4'>
						Собранная информация используется для:
					</p>
					<ul className='list-disc pl-6 text-gray-300 space-y-2'>
						<li>Улучшения работы Сервиса</li>
						<li>Анализа использования Сервиса</li>
						<li>Обработки запросов и обращений Пользователей</li>
						<li>Предотвращения мошенничества и злоупотреблений</li>
					</ul>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-white mb-4'>
						4. Защита информации
					</h2>
					<p className='text-gray-300 mb-4'>
						Сервис принимает необходимые меры для защиты персональных данных
						Пользователей, включая:
					</p>
					<ul className='list-disc pl-6 text-gray-300 space-y-2'>
						<li>Использование современных технологий шифрования</li>
						<li>Регулярное обновление систем безопасности</li>
						<li>Ограничение доступа к персональным данным</li>
					</ul>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-white mb-4'>
						5. Передача данных третьим лицам
					</h2>
					<p className='text-gray-300'>
						Сервис не передает персональные данные Пользователей третьим лицам,
						за исключением случаев, предусмотренных законодательством.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-white mb-4'>
						6. Изменения в Политике
					</h2>
					<p className='text-gray-300'>
						Сервис оставляет за собой право вносить изменения в настоящую
						Политику. Продолжение использования Сервиса после внесения изменений
						означает согласие с новой Политикой.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold text-white mb-4'>7. Контакты</h2>
					<p className='text-gray-300'>
						По всем вопросам, связанным с настоящей Политикой, обращайтесь по
						адресу: privacy@tarot.ru
					</p>
				</section>
			</div>
		</div>
	);
}
