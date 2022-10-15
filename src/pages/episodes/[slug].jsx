import { useMemo } from 'react';

import Head from 'next/head';

import {
	getPostBySlug,
	getAllPostsWithSlug,
	getEpisodes,
	getMovies,
	getPageById,
} from '@/lib/api.js';

import { PlayButton } from '@/components/buttons/PlayButton';

import { ContentCard } from '@/components/cards/ContentCard';

import { EpisodesCollection } from '@/components/collections/EpisodesCollection';
import { MoviesCollection } from '@/components/collections/MoviesCollection';

import { PostHeader } from '@/components/headers/PostHeader';

import { useAudioPlayer } from '@/components/providers/AudioProvider';

import { BadgeText } from '@/components/text/BadgeText';
import { HeadingText } from '@/components/text/HeadingText';

import { ContentWrapper } from '@/components/wrappers/ContentWrapper';
import { PageWrapper } from '@/components/wrappers/PageWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export default function Post({ aboutPage, allMovies, episodes, post }) {
	allMovies = allMovies.edges.map(({ node }) => node);
	episodes = episodes.filter((episode) => episode.slug !== post.slug);
	episodes = episodes.slice(0, 10);

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

	let movies = [];

	post?.reviews?.movies?.forEach((movie) => {
		if (movie.movie?.title) {
			movies.push({
				movies: {
					review: movie.movie?.movies?.review,
				},
				title: movie.movie?.title,
			});
		}
	});

	const formatter = new Intl.ListFormat('en', {
		style: 'long',
		type: 'conjunction',
	});

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

			<PageWrapper>
				<SpacingWrapper>
					{movies.length > 0 && (
						<MoviesCollection homePage={false} movies={movies} />
					)}
				</SpacingWrapper>
			</PageWrapper>

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
		</>
	);
}

export async function getStaticProps({ params }) {
	const aboutPage = await getPageById(4062);
	const post = await getPostBySlug(params?.slug);
	let allMovies = await getMovies();
	let episodes = await getEpisodes();

	return {
		props: {
			aboutPage: aboutPage,
			post: post,
			episodes: episodes,
			allMovies: allMovies,
		},
	};
}

export const getStaticPaths = async () => {
	const allPosts = await getAllPostsWithSlug();

	return {
		paths: allPosts.edges.map(({ node }) => `/episodes/${node.slug}`) || [],
		fallback: true,
	};
};
