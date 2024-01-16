import { useMemo } from 'react';

import Head from 'next/head';

import { getAboutPage, getPostBySlug, getEpisodes } from '@/lib/api.js';

import { PlayButton } from '@/components/buttons/PlayButton';

import { ContentCard } from '@/components/cards/ContentCard';

import { EpisodesCollection } from '@/components/collections/EpisodesCollection';

import { PostHeader } from '@/components/headers/PostHeader';

import { useAudioPlayer } from '@/components/providers/AudioProvider';

import { ContentWrapper } from '@/components/wrappers/ContentWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export default function Post({ aboutPage, episodes = [], post }) {
	episodes = episodes.edges?.map((edge) => edge.node) || [];

	let audioPlayerData = useMemo(
		() => ({
			title: post?.title,
			audio: {
				src: post?.audio.audioLink,
			},
		}),
		[post]
	);
	let player = useAudioPlayer(audioPlayerData);

	return (
		<>
			<Head>
				<title>{post?.title}</title>

				<meta
					name="description"
					content={post?.episodeTeaser?.teaser?.replace(/(<([^>]+)>)/gi, '')}
				/>
			</Head>

			<PostHeader post={post} />

			<ContentWrapper>
				<SpacingWrapper className="relative">
					<div
						className="c-content c-rich-text"
						dangerouslySetInnerHTML={{
							__html: post?.content,
						}}
					/>

					<PlayButton className="relative mb-8 rotate-1" player={player} />
				</SpacingWrapper>
			</ContentWrapper>

			<div className="flex flex-col gap-y-16 bg-header-pattern pb-28">
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

export async function getStaticProps({ params }) {
	const aboutPage = await getAboutPage();
	const post = await getPostBySlug(params?.slug);
	let episodes = await getEpisodes();

	return {
		props: {
			aboutPage,
			post: post,
			episodes: episodes,
		},
	};
}

export const getStaticPaths = async () => {
	const allPosts = await getEpisodes();
	const paths =
		allPosts.edges?.map((edge) => `/episodes/${edge.node.slug}`) || [];

	return {
		paths: paths,
		fallback: true,
	};
};
