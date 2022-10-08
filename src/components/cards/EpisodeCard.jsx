import Image from 'next/image';
import Link from 'next/link';

import { HeadingText } from '@/components/text/HeadingText';

import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export function EpisodeCard({
	episodeNumber,
	headingText,
	imageUrl,
	link,
}) {
	return (
		<div className="overflow-visible flex flex-col w-64 grow shrink-0 relative c-episode">
			<div className="h-2 w-full bg-yellow-400 absolute top-0 -translate-y-1/2 z-10" />

			<div class="h-48 relative w-full bg-gray-900">
				<Image
					layout="fill"
					objectFit="cover"
					quality={100}
					src={imageUrl}
				/>
			</div>

			<SpacingWrapper className="bg-blue-800 py-12 grow z-0">
				<Link
					aria-describedby={`episode-${episodeNumber}-number`}
					className="inline-block"
					href={link}
				>
					<HeadingText className="text-white">{headingText}</HeadingText>
				</Link>
			</SpacingWrapper>

			<SpacingWrapper className="bg-white py-2">
				<p class="underline" id={`episode-${episodeNumber}-number`}>episode {episodeNumber}</p>
			</SpacingWrapper>
		</div>
	);
}
