import Head from 'next/head';

import { getEpisodes } from '@/lib/api';
import { getMovies } from '@/lib/api';
import { getPageById } from '@/lib/api';

import { ContentCard } from '@/components/cards/ContentCard';

import { EpisodesCollection } from '@/components/collections/EpisodesCollection';
import { MoviesCollection } from '@/components/collections/MoviesCollection';

import { HomeHeader } from '@/components/headers/HomeHeader';

import { PageWrapper } from '@/components/wrappers/PageWrapper';

export default function Home({ aboutPage, episodes, movies }) {
	episodes = episodes.edges.map(({ node }) => node);
	movies = movies.edges.map(({ node }) => node);

	const heroPost = episodes[0];
	episodes = episodes.slice(1);

	return (
		<>
			<Head>
				<title>Be Reel Podcast - Movie Reviews and Reappraisals</title>

				<meta name="description" content="" />
			</Head>

			{heroPost && (
				<HomeHeader heroPost={heroPost} />
			)}

			{episodes.length > 0 && (
				<EpisodesCollection episodes={episodes} />
			)}

			{movies.length > 0 && (
				<MoviesCollection movies={movies} />
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
