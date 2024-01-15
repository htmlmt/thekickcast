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
					className={clsx(className, 'rounded-full bg-secondary-400')}
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
						viewBox="0 0 180 70"
					>
						<g>
							<rect
								className="fill-gray-700"
								x="10"
								y="10"
								width="170"
								height="60"
							/>
							<g id="play-foreground">
								<rect className="fill-primary-400" width="170" height="60" />
								<text
									className="isolate fill-white font-display text-5xl uppercase tracking-wider"
									textAnchor="middle"
									transform="translate(85 47.5)"
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
