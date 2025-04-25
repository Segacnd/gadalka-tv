import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	// Проверка CSRF токена для POST запросов
	if (request.method === 'POST') {
		const csrfToken = request.headers.get('X-CSRF-Token');
		const cookieToken = request.cookies.get('csrf-token')?.value;

		if (!csrfToken || !cookieToken || csrfToken !== cookieToken) {
			return new NextResponse('CSRF token validation failed', { status: 403 });
		}
	}

	// Блокировка небезопасных методов
	if (['PUT', 'DELETE', 'PATCH'].includes(request.method)) {
		return new NextResponse('Method not allowed', { status: 405 });
	}

	// Защита от Clickjacking
	const response = NextResponse.next();
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('Content-Security-Policy', "frame-ancestors 'none'");

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
