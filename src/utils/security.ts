import { randomBytes } from 'crypto';

export function generateCSRFToken(): string {
	return randomBytes(32).toString('hex');
}

export function validateCSRFToken(token: string, cookieToken: string): boolean {
	return token === cookieToken;
}

export function sanitizeInput(input: string): string {
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#x27;')
		.replace(/\//g, '&#x2F;');
}

export function isSafeUrl(url: string): boolean {
	try {
		const parsedUrl = new URL(url);
		return parsedUrl.origin === process.env.NEXT_PUBLIC_APP_URL;
	} catch {
		return false;
	}
}
