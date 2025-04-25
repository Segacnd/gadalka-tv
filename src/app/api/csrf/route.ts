import { NextResponse } from 'next/server';
import { generateCSRFToken } from '@/utils/security';

export async function GET() {
	const token = generateCSRFToken();

	const response = NextResponse.json({ token });

	// Устанавливаем CSRF токен в cookie
	response.cookies.set('csrf-token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		path: '/',
	});

	return response;
}
