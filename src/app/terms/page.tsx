import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Правила использования | Таро',
	description: 'Правила использования сервиса Таро',
};

export default function TermsPage() {
	return (
		<div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
			<h1 className='text-3xl font-bold tracking-tight text-white mb-8'>
				Правила использования
			</h1>

			<div className='prose prose-invert max-w-none'>
				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-white mb-4'>
						1. Общие положения
					</h2>
					<p className='text-gray-300 mb-4'>
						Настоящие Правила использования (далее — «Правила») регулируют
						отношения между пользователями (далее — «Пользователи») и сервисом
						Таро (далее — «Сервис»).
					</p>
					<p className='text-gray-300'>
						Используя Сервис, Пользователь соглашается с настоящими Правилами и
						обязуется их соблюдать.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-white mb-4'>
						2. Условия использования
					</h2>
					<ul className='list-disc pl-6 text-gray-300 space-y-2'>
						<li>Сервис предоставляется исключительно в информационных целях</li>
						<li>Все материалы на сайте защищены авторским правом</li>
						<li>
							Запрещается копирование и распространение материалов без
							разрешения
						</li>
						<li>
							Пользователь несет ответственность за свои действия на сайте
						</li>
					</ul>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-white mb-4'>
						3. Ограничения ответственности
					</h2>
					<p className='text-gray-300 mb-4'>
						Сервис не несет ответственности за:
					</p>
					<ul className='list-disc pl-6 text-gray-300 space-y-2'>
						<li>
							Любые прямые или косвенные убытки, возникшие в результате
							использования Сервиса
						</li>
						<li>Невозможность использования Сервиса по техническим причинам</li>
						<li>Действия третьих лиц, влияющие на работу Сервиса</li>
					</ul>
				</section>

				<section className='mb-8'>
					<h2 className='text-xl font-semibold text-white mb-4'>
						4. Изменения в Правилах
					</h2>
					<p className='text-gray-300'>
						Сервис оставляет за собой право вносить изменения в настоящие
						Правила. Продолжение использования Сервиса после внесения изменений
						означает согласие с новыми условиями.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold text-white mb-4'>5. Контакты</h2>
					<p className='text-gray-300'>
						По всем вопросам, связанным с настоящими Правилами, обращайтесь по
						адресу: support@tarot.ru
					</p>
				</section>
			</div>
		</div>
	);
}
