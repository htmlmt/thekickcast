import { EpisodeCard } from '@/components/cards/EpisodeCard';

import { EyebrowText } from '@/components/text/EyebrowText';

import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export function EpisodesCollection({episodes}) {
	return (
		<div className="overflow-auto c-episodes-collection">
			<SpacingWrapper className="relative z-20 translate-y-1/2">
				<EyebrowText>Latest Episodes</EyebrowText>
			</SpacingWrapper>

			<div className="flex overflow-visible items-stretch gap-x-2">
				{episodes.map((episode) => (
					<EpisodeCard
						episodeNumber={episode.episodeNumber.episodeNumber}
						headingText={episode.title}
						imageUrl={episode.featuredImage?.node.sourceUrl}
						key={episode.slug}
						link={`/episodes/${episode.slug}`}
					/>
				))}
			</div>
		</div>
	);
}
