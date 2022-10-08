import { BadgeText } from '@/components/text/BadgeText';
import { HeadingText } from '@/components/text/HeadingText';

import { PageWrapper } from '@/components/wrappers/PageWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export function MoviesCollection({movies}) {
	return (
		<PageWrapper className="bg-white py-8">
			<SpacingWrapper className="flex flex-col gap-y-8">
				<HeadingText>We've Reviewed {movies.length} Movies</HeadingText>

				<div className="flex flex-wrap gap-2">
					<BadgeText variant="good_good">Must See</BadgeText>

					<BadgeText variant="good_bad">Brainy But Boring</BadgeText>

					<BadgeText variant="bad_good">Fun But Silly</BadgeText>

					<BadgeText variant="mixed">Mixed Reviews</BadgeText>

					<BadgeText variant="bad_bad">Stay Away</BadgeText>
				</div>

				<div className="flex flex-wrap gap-2">
					{movies.map((movie) => (
						<BadgeText
							href={`/episodes/${movie.movies.post?.slug}`}
							key={movie.title}
							variant={movie.movies.review}
						>
							{movie.title}
						</BadgeText>
					))}
				</div>
			</SpacingWrapper>
		</PageWrapper>
	);
}
