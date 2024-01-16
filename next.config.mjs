/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		newNextLinkBehavior: true,
		scrollRestoration: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bereelpodcast.com',
				port: '',
			},
		],
	},
};

export default nextConfig;
