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
		<div className="mx-auto w-full max-w-xl">
			<div>
				<svg className="-mb-px fill-gray-700" viewBox="0 0 100 5">
					<polygon points={points} />
				</svg>

				<SpacingWrapper className="bg-gray-700 py-4">
					{link && (
						<Link
							aria-describedby="hero-teaser hero-episode-number"
							className="inline-block text-secondary-400"
							href={link}
						>
							<HeadingText>{headingText}</HeadingText>
						</Link>
					)}

					{!link && (
						<HeadingText className="text-white">{headingText}</HeadingText>
					)}
				</SpacingWrapper>

				{eyebrowText && (
					<SpacingWrapper className="relative bg-gray-700">
						<EyebrowText id="hero-episode-number">{eyebrowText}</EyebrowText>

						<div className="absolute bottom-0 left-0 z-0 h-1/2 w-full bg-white" />
					</SpacingWrapper>
				)}
			</div>

			<div className="c-rich-text flex grow flex-col gap-y-4 bg-white pb-16 pt-8">
				<SpacingWrapper
					className="flex flex-col gap-y-4 font-sans text-xl"
					dangerouslySetInnerHTML={{
						__html: content,
					}}
					id="hero-teaser"
				/>

				{link && (
					<SpacingWrapper>
						<p className="underline">read more</p>
					</SpacingWrapper>
				)}
			</div>
		</div>
	);
}
