const API_URL = process.env.WORDPRESS_API_URL;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

async function fetchAPI(query = '', { variables } = {}) {
	const headers = {
		'Content-Type': 'application/json',
		'Cache-Control': 'maxage=120',
	};

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

export async function getEpisodes() {
	let data;

	try {
		const response = await fetch('/data/episodes.json');
		if (!response.ok) {
			// if HTTP-status is 404, 500 or such
			throw new Error("Can't fetch the local file");
		}
		data = await response.json();
	} catch {
		data = await fetchAPI(
			`
			query Episodes {
				posts(first: 5, where: {orderby: {field: DATE, order: DESC}}) {
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
				}
			}
		`
		);
	}

	return data?.posts;
}

export async function getAboutPage() {
	let data;

	try {
		const response = await fetch('/data/about-page.json');
		if (!response.ok) {
			// if HTTP-status is 404, 500 or such
			throw new Error("Can't fetch the local file");
		}
		data = await response.json();
	} catch {
		data = await fetchAPI(
			`
			query PageById {
				page(id: "5656", idType: DATABASE_ID) {
					content
					tagline {
						tagline
					}
					title
				}
			}
		`
		);
	}

	return data?.page;
}

export async function getPostBySlug(slug) {
	let data;

	try {
		const response = await fetch('/data/episodes.json');
		if (!response.ok) {
			// if HTTP-status is 404, 500 or such
			throw new Error("Can't fetch the local file");
		}
		data = await response.json();
		data = data.find((episode) => episode.slug === slug);
	} catch {
		data = await fetchAPI(
			`
			query PostBySlug($id: ID = "") {
				post(id: $id, idType: SLUG) {
					content
					episodeNumber {
						episodeNumber
					}
					audio {
						audioLink
					}
					title
				}
			}
		`,
			{
				variables: { id: slug, idType: 'SLUG' },
			}
		);
	}

	return data?.post;
}
