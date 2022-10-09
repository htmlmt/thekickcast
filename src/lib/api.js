const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = '', { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' };

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
	return json.data;
}

export async function getHeroPost() {
	const data = await fetchAPI(
		`
			query HeroPost {
				posts(first: 1, where: {orderby: {field: DATE, order: DESC}}) {
					edges {
						node {
							title
							excerpt
							slug
							date
							featuredImage {
								node {
									srcSet
									sourceUrl(size: MEDIUM_LARGE)
								}
							}
							episodeTeaser {
								teaser
							}
							episodeNumber {
								episodeNumber
							}
							reviews {
								movies {
									chanceReview
									movieTitle
									noahReview
								}
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
		`
	);

	return data?.posts.edges[0]?.node;
}

export async function getMovies() {
	const data = await fetchAPI(
		`
			query Movies {
				movies(first: 1000, where: {orderby: {field: TITLE, order: ASC}}) {
					edges {
						node {
							title
							movies {
								post {
									... on Post {
										slug
									}
								}
								review
							}
						}
					}
				}
			}
		`
	);

	return data?.movies;
}

export async function getEpisodes(after, before, first, last) {
	const data = await fetchAPI(
		`
			query Episodes($after: String = null, $before: String = null, $first: Int = 6, $last: Int = null) {
				posts(after: $after, before: $before, first: $first, last: $last, where: {orderby: {field: DATE, order: DESC}}) {
					edges {
						node {
							title
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
		`
	);

	return data?.posts;
}

export async function getPageById(id, idType = 'DATABASE_ID') {
	const data = await fetchAPI(
		`
			query PageById($id: ID!, $idType: PageIdType!) {
				page(id: $id, idType: $idType) {
					content
					tagline {
						tagline
					}
					title
				}
			}
		`,
		{
			variables: { id, idType },
		}
	);

	return data?.page;
}

export async function getPostBySlug(slug) {
	const data = await fetchAPI(
		`
			query PostBySlug($id: ID!, $idType: PostIdType!) {
				post(id: $id, idType: $idType) {
        			content
					episodeNumber {
						episodeNumber
					}
					reviews {
						movies {
							chanceReview
							movieTitle
							noahReview
						}
					}
					title
				}
			}
		`,
		{
			variables: { id: slug, idType: 'SLUG' },
		}
	);

	return data;
}

export async function getAllPostsWithSlug() {
	const data = await fetchAPI(
		`
			{
				posts(first: 6) {
					edges {
						node {
							slug
						}
					}
				}
			}
		`
	);

	return data?.posts;
}
