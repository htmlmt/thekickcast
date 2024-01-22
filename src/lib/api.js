import { readFileSync, existsSync } from 'fs';

export async function getEpisodes() {
	if (existsSync('src/data/episodes.json')) {
		const episodesFile = readFileSync('src/data/episodes.json');
		const episodesData = JSON.parse(episodesFile);

		return episodesData;
	} else {
		return [];
	}
}

export async function getAboutPage() {
	if (existsSync('src/data/about-page.json')) {
		const aboutPageFile = readFileSync('src/data/about-page.json');
		const aboutPageData = JSON.parse(aboutPageFile);

		return aboutPageData;
	} else {
		return {};
	}
}

export async function getPostBySlug(slug) {
	if (existsSync('src/data/episodes.json')) {
		const episodesFile = readFileSync('src/data/episodes.json');
		const episodesData = JSON.parse(episodesFile);
		const episode = episodesData.find((episode) => episode.slug === slug);

		return episode;
	} else {
		return {};
	}
}
