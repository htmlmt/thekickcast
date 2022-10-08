import Link from 'next/link';

import { EyebrowText } from '@/components/text/EyebrowText';
import { HeadingText } from '@/components/text/HeadingText';

import { ContentWrapper } from '@/components/wrappers/ContentWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

const polygons = {
	default: '0,0 0,5 100,5',
	reversed: '0,5 100,0 100,5',
};

export function ContentCard({
	content,
	eyebrowText,
	headingText,
	link,
	polygon = 'default',
}) {
	const points = polygons[polygon];

	return (
		<ContentWrapper className="relative flex flex-col">
			<div>
				<svg className="fill-yellow-400" viewBox="0 0 100 5">
					<polygon points={points} />
				</svg>

				<SpacingWrapper className="bg-yellow-400 py-2">
					{link && (
						<Link
							aria-describedby="hero-teaser hero-episode-number"
							className="inline-block"
							href={link}
						>
							<HeadingText>{headingText}</HeadingText>
						</Link>
					)}

					{!link && <HeadingText>{headingText}</HeadingText>}
				</SpacingWrapper>

				<SpacingWrapper className="relative bg-yellow-400">
					<EyebrowText id="hero-episode-number">
						{eyebrowText}
					</EyebrowText>

					<div className="absolute bottom-0 left-0 z-0 h-1/2 w-full bg-white" />
				</SpacingWrapper>
			</div>

			<div className="flex grow flex-col gap-y-4 bg-white py-8 c-rich-text">
				<SpacingWrapper
					className="flex flex-col gap-y-4"
					dangerouslySetInnerHTML={{
						__html: content,
					}}
					id="hero-teaser"
				/>

				{link && (
					<SpacingWrapper>
						<p class="underline">read more</p>
					</SpacingWrapper>
				)}
			</div>
		</ContentWrapper>
	);
}
