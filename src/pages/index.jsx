import { useMemo } from 'react';

import Head from 'next/head';

import { getAboutPage, getEpisodes } from '@/lib/api.js';

import { ContentCard } from '@/components/cards/ContentCard';

import { EpisodesCollection } from '@/components/collections/EpisodesCollection';

import { HomeHeader } from '@/components/headers/HomeHeader';

import { useAudioPlayer } from '@/components/providers/AudioProvider';

import { ContentWrapper } from '@/components/wrappers/ContentWrapper';

export default function Home({ aboutPage, episodes = [] }) {
	episodes = episodes.edges?.map((edge) => edge.node) || [];
	const heroPost = episodes[0] || null;

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
				<title>The Kick Podcast</title>

				<meta name="description" content="" />
			</Head>

			{heroPost && <HomeHeader heroPost={heroPost} player={player} />}

			<div className="flex flex-col gap-y-16 bg-header-pattern">
				{episodes.length > 0 && <EpisodesCollection episodes={episodes} />}

				{aboutPage && (
					<ContentWrapper>
						<ContentCard
							content={aboutPage?.content}
							eyebrowText={aboutPage?.tagline?.tagline}
							headingText={aboutPage?.title}
							polygon="reversed"
						/>
					</ContentWrapper>
				)}
			</div>
		</>
	);
}

export async function getStaticProps() {
	const aboutPage = await getAboutPage();
	let episodes = await getEpisodes();

	return {
		props: {
			aboutPage,
			episodes,
		},
	};
}
