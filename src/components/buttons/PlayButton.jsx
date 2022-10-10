import clsx from 'clsx';

import { IconImage } from '@/components/images/IconImage';

export function PlayButton({ className, size = 'lg' }) {
	return <>{playButtons(className, size)}</>;
}

function playButtons(className, size) {
	switch (size) {
		case 'sm':
			return (
				<button className={clsx(className, 'rounded-full bg-blue-700')}>
					<IconImage icon="play" />
				</button>
			);
		case 'lg':
			return (
				<button
					className={clsx(
						className,
						'absolute bottom-0 left-1/2 w-40 -translate-x-1/2 translate-y-1/2'
					)}
				>
					<svg
						title="play"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 185 60"
					>
						<g>
							<rect
								className="fill-blue-800"
								x="10"
								y="10"
								width="175"
								height="50"
							/>
							<rect className="fill-blue-700" width="175" height="50" />
							<text
								className="isolate fill-gray-900 font-serif text-4xl"
								textAnchor="middle"
								transform="translate(87.5 35.75)"
							>
								PLAY
							</text>
						</g>
					</svg>
				</button>
			);
		default:
			return false;
	}
}
