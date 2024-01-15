import '@/styles/main.css';
import 'focus-visible';

import { SiteHeader } from '@/components/headers/SiteHeader';

import { AudioPlayer } from '@/components/players/AudioPlayer';

import { AudioProvider } from '@/components/providers/AudioProvider';

import { SiteWrapper } from '@/components/wrappers/SiteWrapper';

export default function App({ Component, pageProps }) {
	return (
		<>
			<AudioProvider>
				<SiteWrapper>
					<SiteHeader />

					<main>
						<Component {...pageProps} />
					</main>
				</SiteWrapper>

				<AudioPlayer />
			</AudioProvider>
		</>
	);
}
