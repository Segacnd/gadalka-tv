export default function ContactsPage() {
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8'>
					<div>
						<h2 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
							Свяжитесь с нами
						</h2>
						<div className='mt-3'>
							<p className='text-lg text-gray-500'>
								Есть вопросы по Таро или хотите записаться на консультацию? Мы
								всегда готовы помочь!
							</p>
						</div>
						<div className='mt-9'>
							<div className='mt-6 flex'>
								<div className='flex-shrink-0'>
									<svg
										className='h-6 w-6 text-gray-400'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
										/>
									</svg>
								</div>
								<div className='ml-3 text-base text-gray-500'>
									<p>+7 (XXX) XXX-XX-XX</p>
									<p className='mt-1'>Пн-Пт с 9:00 до 18:00</p>
								</div>
							</div>
							<div className='mt-6 flex'>
								<div className='flex-shrink-0'>
									<svg
										className='h-6 w-6 text-gray-400'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
										/>
									</svg>
								</div>
								<div className='ml-3 text-base text-gray-500'>
									<p>info@tarot.ru</p>
								</div>
							</div>
						</div>
					</div>
					<div className='mt-12 sm:mt-16 md:mt-0'>
						<form action='#' method='POST' className='grid grid-cols-1 gap-y-6'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700'
								>
									Имя
								</label>
								<div className='mt-1'>
									<input
										type='text'
										name='name'
										id='name'
										autoComplete='name'
										className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700'
								>
									Email
								</label>
								<div className='mt-1'>
									<input
										type='email'
										name='email'
										id='email'
										autoComplete='email'
										className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700'
								>
									Сообщение
								</label>
								<div className='mt-1'>
									<textarea
										id='message'
										name='message'
										rows={4}
										className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									/>
								</div>
							</div>
							<div>
								<button
									type='submit'
									className='inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
								>
									Отправить сообщение
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
