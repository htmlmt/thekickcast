import Image from 'next/image';

import { PlayButton } from '@/components/buttons/PlayButton';

import { ContentCard } from '@/components/cards/ContentCard';

import { PageWrapper } from '@/components/wrappers/PageWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export function HomeHeader({ heroPost, player }) {
	return (
		<header className="bg-header-pattern pb-24 pt-12">
			<div className="relative">
				<PageWrapper>
					<SpacingWrapper className="c-hero grid grid-cols-1 md:grid-cols-2">
						<ContentCard
							content={heroPost?.episodeTeaser.teaser}
							eyebrowText={`Episode ${heroPost?.episodeNumber.episodeNumber}`}
							headingText={heroPost?.title}
							link={`/episodes/${heroPost?.slug}`}
						/>

						<div className="relative">
							<Image
								fill
								style={{
									objectFit: 'cover',
								}}
								sizes="500px"
								alt=""
								priority
								quality={100}
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
