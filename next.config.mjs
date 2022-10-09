/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		newNextLinkBehavior: true,
		scrollRestoration: true,
	},
	images: {
		domains: ['bereelpodcast.com'],
	},
};

export default nextConfig;
