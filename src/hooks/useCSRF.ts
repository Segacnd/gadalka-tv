import { useState, useEffect } from 'react';

export function useCSRF() {
	const [csrfToken, setCsrfToken] = useState<string>('');

	useEffect(() => {
		const fetchCSRFToken = async () => {
			try {
				const response = await fetch('/api/csrf');
				const data = await response.json();
				setCsrfToken(data.token);
			} catch (error) {
				console.error('Failed to fetch CSRF token:', error);
			}
		};

		fetchCSRFToken();
	}, []);

	const getCSRFHeaders = () => {
		return {
			'X-CSRF-Token': csrfToken,
		};
	};

	return {
		csrfToken,
		getCSRFHeaders,
	};
}
