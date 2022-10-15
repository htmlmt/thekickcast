import { useMemo } from 'react';

import Head from 'next/head';

import { getEpisodes, getMovies, getPageById } from '@/lib/api.js';

import { ContentCard } from '@/components/cards/ContentCard';

import { EpisodesCollection } from '@/components/collections/EpisodesCollection';
import { MoviesCollection } from '@/components/collections/MoviesCollection';

import { HomeHeader } from '@/components/headers/HomeHeader';

import { useAudioPlayer } from '@/components/providers/AudioProvider';

import { BadgeText } from '@/components/text/BadgeText';
import { HeadingText } from '@/components/text/HeadingText';

import { PageWrapper } from '@/components/wrappers/PageWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export default function Home({ aboutPage, episodes, movies }) {
	movies = movies.edges.map(({ node }) => node);

	const heroPost = episodes[0];
	episodes = episodes.slice(1, 11);

	let audioPlayerData = useMemo(
		() => ({
			title: heroPost?.title,
			audio: {
				src: heroPost?.audio.audioLink,
			},
		}),
		[heroPost]
	);
	let player = useAudioPlayer(audioPlayerData);

	return (
		<>
			<Head>
				<title>Be Reel Podcast - Movie Reviews and Reappraisals</title>

				<meta
					name="description"
					content="Chance Solem-Pfeifer and Noah Ballard hop from genre to genre squabbling or bonding over what movies are high quality, highly watchable, both or neither."
				/>
			</Head>

			{heroPost && <HomeHeader heroPost={heroPost} player={player} />}

			<div className="flex flex-col gap-y-16 bg-gray-50">
				{episodes.length > 0 && <EpisodesCollection episodes={episodes} />}

				{movies.length > 0 && (
					<PageWrapper className="bg-white py-8">
						<SpacingWrapper className="flex flex-col gap-y-8">
							<HeadingText>We've Reviewed {movies.length} Movies</HeadingText>

							<div className="flex flex-wrap gap-2">
								<BadgeText variant="good_good">Must See</BadgeText>

								<BadgeText variant="good_bad">Brainy But Boring</BadgeText>

								<BadgeText variant="bad_good">Fun But Silly</BadgeText>

								<BadgeText variant="mixed">Mixed Reviews</BadgeText>

								<BadgeText variant="bad_bad">Stay Away</BadgeText>
							</div>

							<MoviesCollection movies={movies} />
						</SpacingWrapper>
					</PageWrapper>
				)}

				{aboutPage && (
					<PageWrapper>
						<ContentCard
							content={aboutPage.content}
							eyebrowText={aboutPage.tagline.tagline}
							headingText={aboutPage.title}
							polygon="reversed"
						/>
					</PageWrapper>
				)}
			</div>
		</>
	);
}

export async function getStaticProps() {
	const aboutPage = await getPageById(4062);
	let episodes = await getEpisodes();
	let movies = await getMovies();

	return {
		props: {
			aboutPage,
			episodes,
			movies,
		},
	};
}
