import mkdirp from 'mkdirp';
import { writeFileSync } from 'fs';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

let episodes = [];

async function buildCacheFiles(after, before, first, last) {
	const API_URL = process.env.WORDPRESS_API_URL;

	const headers = {
		'Content-Type': 'application/json',
	};

	const query = `
		query AllEpisodes($after: String = null, $before: String = null, $first: Int = 50, $last: Int = null) {
			posts(after: $after, before: $before, first: $first, last: $last, where: {orderby: {field: DATE, order: DESC}}) {
				edges {
					node {
						title
						content
						slug
						featuredImage {
							node {
								sourceUrl(size: MEDIUM_LARGE)
							}
						}
						episodeTeaser {
							teaser
						}
						episodeNumber {
							episodeNumber
						}
						audio {
							audioLink
						}
						featuredGuests {
							guests {
								name
							}
						}
					}
					cursor
				}
				pageInfo {
					startCursor
					hasPreviousPage
					hasNextPage
					endCursor
				}
			}
		}
	`;

	const variables = { after, before, first, last };

	const res = await fetch(API_URL, {
		headers,
		method: 'POST',
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}

	const nodes = json.data.posts.edges.map((edge) => edge.node);

	episodes.push(...nodes);

	if (json.data.posts.pageInfo.hasNextPage) {
		buildCacheFiles(json.data.posts.pageInfo.endCursor);
	} else {
		await mkdirp('public');
		writeFileSync('public/episodes.json', JSON.stringify(episodes));
	}
}

buildCacheFiles();
