import '@/styles/main.css';
import 'focus-visible';

import clsx from 'clsx';

import { useRouter } from 'next/router';

import { SiteHeader } from '@/components/headers/SiteHeader';

import { AudioPlayer } from '@/components/players/AudioPlayer';

import { AudioProvider } from '@/components/providers/AudioProvider';

import { SiteWrapper } from '@/components/wrappers/SiteWrapper';

export default function App({ Component, pageProps }) {
	let bgClass = 'bg-white';
	const router = useRouter();
	const isHomePage = router.pathname === '/';
	if (isHomePage) {
		bgClass = 'bg-gray-50';
	}

	return (
		<>
			<AudioProvider>
				<SiteWrapper>
					<SiteHeader />

					<main className={clsx(bgClass, 'flex flex-col gap-y-8 pb-28')}>
						<Component {...pageProps} />
					</main>
				</SiteWrapper>

				<AudioPlayer />
			</AudioProvider>
		</>
	);
}
