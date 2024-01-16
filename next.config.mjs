/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		newNextLinkBehavior: true,
		scrollRestoration: true,
	},
	images: {
		domains: ['bereelpodcast.com', 'beamish-sunshine-b948e5.netlify.app/'],
	},
};

export default nextConfig;
