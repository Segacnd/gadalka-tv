'use client';

import { useRef, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchInputProps {
	defaultValue: string;
}

export default function SearchInput({ defaultValue }: SearchInputProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [value, setValue] = useState(defaultValue);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		// Set focus on input when component mounts
		inputRef.current?.focus();
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setValue(newValue);

		// Update URL without full page refresh
		const params = new URLSearchParams(searchParams.toString());

		// Сохраняем текущую вкладку если она есть
		const currentTab = searchParams.get('tab');

		if (newValue) {
			params.set('q', newValue);
		} else {
			params.delete('q');
		}

		// Добавляем tab обратно, чтобы сохранить текущую вкладку при поиске
		if (currentTab) {
			params.set('tab', currentTab);
		}

		// Use setTimeout to prevent excessive updates
		const timeoutId = setTimeout(() => {
			router.push(`?${params.toString()}`, { scroll: false });
		}, 300);

		return () => clearTimeout(timeoutId);
	};

	return (
		<div className='w-full'>
			<input
				ref={inputRef}
				type='text'
				name='q'
				placeholder='Поиск карт...'
				value={value}
				onChange={handleChange}
				className='w-full rounded-md border border-gray-800 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 focus:border-white focus:outline-none focus:ring-1 focus:ring-white'
			/>
		</div>
	);
}
