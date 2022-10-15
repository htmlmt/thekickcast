import clsx from 'clsx';

import { IconImage } from '@/components/images/IconImage';

export function PlayButton({ className, player, size = 'lg' }) {
	return <>{playButtons(className, player, size)}</>;
}

function playButtonOnMouseDown() {
	const playForeground = document.querySelector('#play-foreground');
	playForeground.setAttribute('transform', 'translate(10 10)');
}

function playButtonOnMouseUp() {
	const playForeground = document.querySelector('#play-foreground');
	playForeground.setAttribute('transform', 'translate(0 0)');
}

function playButtons(className, player, size) {
	switch (size) {
		case 'sm':
			return (
				<button
					aria-label={player.playing ? 'Pause' : 'Play'}
					className={clsx(className, 'rounded-full bg-blue-700')}
					onClick={player.toggle}
				>
					<IconImage icon={player.playing ? 'pause' : 'play'} />
				</button>
			);
		case 'lg':
			return (
				<button
					aria-label={player.playing ? 'Pause' : 'Play'}
					className={clsx(
						className,
						'absolute bottom-0 left-1/2 w-40 -translate-x-1/2 translate-y-1/2'
					)}
					onClick={player.toggle}
					onMouseDown={playButtonOnMouseDown}
					onMouseUp={playButtonOnMouseUp}
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
							<g id="play-foreground">
								<rect className="fill-blue-700" width="175" height="50" />
								<text
									className="isolate fill-gray-900 font-serif text-4xl uppercase italic"
									textAnchor="middle"
									transform="translate(87.5 35.75)"
								>
									{player.playing ? 'Pause' : 'Play'}
								</text>
							</g>
						</g>
					</svg>
				</button>
			);
		default:
			return false;
	}
}
