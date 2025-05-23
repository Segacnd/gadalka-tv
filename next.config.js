/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: `
							default-src 'self';
							script-src 'self' 'unsafe-inline' 'unsafe-eval';
							style-src 'self' 'unsafe-inline';
							img-src 'self' data: https:;
							font-src 'self';
							connect-src 'self';
							frame-ancestors 'none';
							form-action 'self';
							base-uri 'self';
						`
							.replace(/\s+/g, ' ')
							.trim(),
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
				],
			},
		];
	},
	images: {
		domains: ['images.unsplash.com', 'plus.unsplash.com'],
		formats: ['image/avif', 'image/webp'],
	},
};

export default nextConfig;
