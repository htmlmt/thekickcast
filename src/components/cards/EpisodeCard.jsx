import Link from 'next/link';

import { HeadingText } from '@/components/text/HeadingText';

import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export function EpisodeCard({
	episodeNumber,
	kickName,
	headingText,
	imageUrl,
	link,
}) {
	return (
		<div className="c-episode relative flex w-full max-w-episode shrink-0 grow flex-col overflow-visible">
			<div className="absolute top-0 z-10 h-2 w-full -translate-y-1/2 bg-accent-400" />

			<div className="relative z-10 h-48 w-full overflow-visible bg-gray-700">
				<img
					style={{
						objectFit: 'cover',
						position: 'absolute',
						height: '100%',
						width: '100%',
						left: '0',
						top: '0',
						right: '0',
						bottom: '0',
					}}
					alt=""
					loading="lazy"
					src={imageUrl}
				/>

				{kickName && (
					<div className="absolute bottom-0 left-0 w-full translate-y-1/2 p-4 text-left">
						<p className="z-10 inline-block border-2 bg-white py-1 px-4 font-sans text-lg uppercase tracking-wider text-gray-700">
							{kickName}
						</p>
					</div>
				)}
			</div>

			<SpacingWrapper className="z-0 grow bg-gray-700 py-12">
				<Link
					aria-describedby={`episode-${episodeNumber}-number`}
					className="c-episode-link inline-block"
					href={link}
				>
					<HeadingText className="text-white">{headingText}</HeadingText>
				</Link>
			</SpacingWrapper>

			<SpacingWrapper className="bg-white py-2">
				{episodeNumber && (
					<p className="underline" id={`episode-${episodeNumber}-number`}>
						episode {episodeNumber}
					</p>
				)}

				{!episodeNumber && <p className="underline">read more</p>}
			</SpacingWrapper>
		</div>
	);
}
