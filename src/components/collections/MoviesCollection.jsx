import { BadgeText } from '@/components/text/BadgeText';

export function MoviesCollection({ movies, homePage = true }) {
	return (
		<div className="flex flex-wrap gap-2">
			{movies.map((movie) => (
				<BadgeText
					href={homePage ? `/episodes/${movie.movies.post?.slug}` : null}
					key={movie.title}
					variant={movie.movies.review}
				>
					{movie.title}
				</BadgeText>
			))}
		</div>
	);
}
