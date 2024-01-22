import Image from 'next/image';

import { PlayButton } from '@/components/buttons/PlayButton';

import { ContentCard } from '@/components/cards/ContentCard';

import { PageWrapper } from '@/components/wrappers/PageWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export function HomeHeader({ heroPost, player }) {
	return (
		<header className="pb-16 pt-12">
			<div className="relative">
				<PageWrapper>
					<SpacingWrapper className="c-hero relative grid grid-cols-1 px-0 md:grid-cols-2">
						<ContentCard
							content={heroPost?.episodeTeaser.teaser}
							eyebrowText={`Episode ${heroPost?.episodeNumber.episodeNumber}`}
							headingText={heroPost?.title}
							link={`/episodes/${heroPost?.slug}`}
						/>

						<div className="relative">
							<img
								style={{
									objectFit: 'cover',
									position: 'absolute',
									height: '100%',
									width: '100%',
									left: '0',
									top: '0',
									right: '0',
									bottom: '0',
								}}
								alt=""
								src={heroPost.featuredImage?.node.sourceUrl}
							/>
						</div>
					</SpacingWrapper>

					<PlayButton className="z-30" player={player} />
				</PageWrapper>
			</div>
		</header>
	);
}
