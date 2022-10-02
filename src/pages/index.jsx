import Head from 'next/head';

import { getAllPostsForHome } from '../lib/api';

import { BadgeText } from '@/components/text/BadgeText';
import { EyebrowText } from '@/components/text/EyebrowText';
import { HeadingText } from '@/components/text/HeadingText';
import { TimeText } from '@/components/text/TimeText';

export default function Home({ allPosts: { edges } }) {
	const heroPost = edges[0]?.node;

	return (
		<>
			<Head>
				<title>Be Reel Podcast - Movie Reviews and Reappraisals</title>

				<meta name="description" content="" />
			</Head>

			<div className="grid gap-8 p-10">
				<div className="flex gap-2">
					<BadgeText>Must See</BadgeText>

					<BadgeText variant="goodBad">Brainy But Boring</BadgeText>

					<BadgeText variant="badGood">Fun But Silly</BadgeText>

					<BadgeText variant="mixed">Mixed Reviews</BadgeText>

					<BadgeText variant="badBad">Stay Away</BadgeText>

					<BadgeText href="/">The Edge</BadgeText>
				</div>

				<div>
					<EyebrowText>All Episodes</EyebrowText>
				</div>

				<div>
					<HeadingText>{heroPost.title}</HeadingText>
				</div>

				<div className="flex justify-between gap-x-4 bg-gray-900 px-4 py-2">
					<TimeText className="text-yellow-400">00:00:00</TimeText>
					<TimeText className="text-gray-400">00:00:00</TimeText>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const allPosts = await getAllPostsForHome();

	return {
		props: { allPosts },
	};
}
