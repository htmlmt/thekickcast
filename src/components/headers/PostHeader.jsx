import { HeadingText } from '@/components/text/HeadingText';
import { EyebrowText } from '@/components/text/EyebrowText';

import { PageWrapper } from '@/components/wrappers/PageWrapper';

export function PostHeader({ post }) {
	return (
		<header className="relative flex flex-col gap-y-2 bg-yellow-400 pt-6">
			<PageWrapper className="px-6">
				<HeadingText>{post?.title}</HeadingText>
			</PageWrapper>

			<div className="relative">
				<PageWrapper className="px-6">
					<EyebrowText className="relative z-10" id="hero-episode-number">
						Episode {post?.episodeNumber.episodeNumber}
					</EyebrowText>
				</PageWrapper>

				<div className="absolute bottom-0 left-0 z-0 h-1/2 w-full bg-white" />
			</div>
		</header>
	);
}
