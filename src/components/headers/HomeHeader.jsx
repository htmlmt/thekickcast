import Image from 'next/image';

import { PlayButton } from '@/components/buttons/PlayButton';

import { ContentCard } from '@/components/cards/ContentCard';

import { PageWrapper } from '@/components/wrappers/PageWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export function HomeHeader({ heroPost }) {
	return (
		<header className="relative pt-12">
			<PageWrapper>
				<SpacingWrapper className="c-hero grid grid-cols-1 md:grid-cols-2">
					<ContentCard
						content={heroPost.episodeTeaser.teaser}
						eyebrowText={`Episode ${heroPost.episodeNumber.episodeNumber}`}
						headingText={heroPost.title}
						link={`/episodes/${heroPost.slug}`}
					/>

					<div className="relative">
						<Image
							layout="fill"
							objectFit="cover"
							priority
							quality={100}
							src={heroPost.featuredImage?.node.sourceUrl}
						/>
					</div>
				</SpacingWrapper>
			</PageWrapper>

			<PlayButton className="z-30 rotate-1" />
		</header>
	);
}
