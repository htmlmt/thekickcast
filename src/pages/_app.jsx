import '@/styles/main.css';
import 'focus-visible';

import { PodButton } from '@/components/buttons/PodButton';
import { PlayButton } from '@/components/buttons/PlayButton';

import { SiteHeader } from '@/components/headers/SiteHeader';

import { IconImage } from '@/components/images/IconImage';

import { HeadingText } from '@/components/text/HeadingText';
import { TimeText } from '@/components/text/TimeText';

import { SiteWrapper } from '@/components/wrappers/SiteWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export default function App({ Component, pageProps }) {
	return (
		<>
			<SiteWrapper className="bg-gray-50">
				<SiteHeader />

				<main className="flex flex-col gap-y-8 bg-gray-50 pb-28">
					<Component {...pageProps} />
				</main>
			</SiteWrapper>

			<div className="fixed bottom-0 z-30 w-full">
				<SiteWrapper className="flex bg-white shadow-2xl shadow-gray-900">
					<PodButton href="/">
						<IconImage icon="share" />
					</PodButton>
					<div className="flex h-20 w-full grow flex-col bg-gray-900">
						<SpacingWrapper className="flex grow flex-col justify-center">
							<div className="flex justify-between gap-x-4">
								<TimeText className="text-yellow-400">00:00:00</TimeText>
								<TimeText className="text-gray-400">00:00:00</TimeText>
							</div>
							<div>
								<HeadingText className="text-white">Man Vs. Alaska</HeadingText>
							</div>
						</SpacingWrapper>
						<div className="relative h-1 w-full bg-gray-400">
							<div className="absolute left-0 top-0 h-full w-0 bg-yellow-400"></div>
						</div>
					</div>
					<PodButton>
						<PlayButton size="sm" />
					</PodButton>
				</SiteWrapper>
			</div>
		</>
	);
}
