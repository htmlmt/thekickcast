import Image from 'next/image';
import Link from 'next/link';

import { HeadingText } from '@/components/text/HeadingText';

import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs>
		<linearGradient id="g">
			<stop stop-color="#333" offset="20%" />
			<stop stop-color="#222" offset="50%" />
			<stop stop-color="#333" offset="70%" />
		</linearGradient>
	</defs>
	<rect width="${w}" height="${h}" fill="#333" />
	<rect id="r" width="${w}" height="${h}" fill="url(#g)" />
	<animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str);

export function EpisodeCard({ episodeNumber, headingText, imageUrl, link }) {
	return (
		<div className="c-episode relative flex w-full max-w-episode shrink-0 grow flex-col overflow-visible">
			<div className="absolute top-0 z-10 h-2 w-full -translate-y-1/2 bg-accent-400" />

			<div className="relative h-48 w-full">
				<Image
					blurDataURL={`data:image/svg+xml;base64,${toBase64(
						shimmer(700, 475)
					)}`}
					placeholder="blur"
					fill
					style={{
						objectFit: 'cover',
					}}
					sizes="500px"
					alt=""
					quality={50}
					src={imageUrl}
				/>
			</div>

			<SpacingWrapper className="z-0 grow bg-gray-700 py-12">
				<Link
					aria-describedby={`episode-${episodeNumber}-number`}
					className="inline-block"
					href={link}
				>
					<HeadingText className="text-white">{headingText}</HeadingText>
				</Link>
			</SpacingWrapper>

			<SpacingWrapper className="bg-white py-2">
				<p className="underline" id={`episode-${episodeNumber}-number`}>
					episode {episodeNumber}
				</p>
			</SpacingWrapper>
		</div>
	);
}
