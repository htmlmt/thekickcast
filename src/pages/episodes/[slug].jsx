import Head from 'next/head';

import { getPostBySlug } from '@/lib/api.js';
import { getAllPostsWithSlug } from '@/lib/api.js';

import { PostHeader } from '@/components/headers/PostHeader';

import { ContentWrapper } from '@/components/wrappers/ContentWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export default function Post({ post }) {
	return (
		<>
			<Head>
				<title>{post?.title}</title>
			</Head>

			<PostHeader post={post} />

			<ContentWrapper>
				<SpacingWrapper>
					<div
						className="c-content c-rich-text"
						dangerouslySetInnerHTML={{
							__html: post?.content,
						}}
					/>
				</SpacingWrapper>
			</ContentWrapper>
		</>
	);
}

export async function getStaticProps({ params }) {
	let data = await getPostBySlug(params?.slug);

	return {
		props: {
			post: data,
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
