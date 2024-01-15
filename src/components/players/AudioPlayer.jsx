import { useEffect, useRef, useState } from 'react';
import { useSliderState } from 'react-stately';
import { useRouter } from 'next/router';

import { useAudioPlayer } from '@/components/providers/AudioProvider';

import { PlayButton } from '@/components/buttons/PlayButton';
import { PodButton } from '@/components/buttons/PodButton';

import { IconImage } from '@/components/images/IconImage';

import { HeadingText } from '@/components/text/HeadingText';
import { TimeText } from '@/components/text/TimeText';

import { SiteWrapper } from '@/components/wrappers/SiteWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

function parseTime(seconds) {
	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor((seconds - hours * 3600) / 60);
	seconds = seconds - hours * 3600 - minutes * 60;
	return [hours, minutes, seconds];
}

function formatTime(seconds, totalSeconds = seconds) {
	let totalWithoutLeadingZeroes = totalSeconds.slice(
		totalSeconds.findIndex((x) => x !== 0)
	);
	const formattedTime = seconds
		.slice(seconds.length - totalWithoutLeadingZeroes.length)
		.map((x) => x.toString().padStart(2, '0'))
		.join(':');

	if (formattedTime == '00') {
		return '00:00:00';
	} else {
		return formattedTime;
	}
}

function formatHumanTime(seconds) {
	let [h, m, s] = parseTime(seconds);
	return `${h} hour${h === 1 ? '' : 's'}, ${m} minute${
		m === 1 ? '' : 's'
	}, ${s} second${s === 1 ? '' : 's'}`;
}

export function AudioPlayer() {
	let player = useAudioPlayer();

	let wasPlayingRef = useRef(false);

	let [currentTime, setCurrentTime] = useState(player.currentTime);

	useEffect(() => {
		setCurrentTime(null);
	}, [player.currentTime]);

	const props = {
		label: 'Current time',
		maxValue: player.duration,
		step: 1,
		value: [currentTime ?? player.currentTime],
		onChange: ([v]) => setCurrentTime(v),
		onChangeEnd: (value) => {
			player.seek(value);
			if (wasPlayingRef.current) {
				player.play();
			}
		},
		numberFormatter: { format: formatHumanTime },
		onChangeStart: () => {
			wasPlayingRef.current = player.playing;
			player.pause();
		},
	};

	let state = useSliderState(props);

	let displayedCurrentTime = parseTime(state.getThumbValue(0));
	let displayedTotalTime = parseTime(state.getThumbMaxValue(0));

	if (!player.meta) {
		return null;
	}

	const router = useRouter();

	return (
		<div className="fixed bottom-0 z-30 w-full">
			<SiteWrapper className="flex bg-white shadow-2xl shadow-gray-900">
				<PodButton>
					<PlayButton player={player} size="sm" />
				</PodButton>

				<div className="flex h-20 w-full grow flex-col overflow-hidden bg-gray-700">
					<SpacingWrapper className="flex grow flex-col justify-center">
						<div className="flex justify-between gap-x-4">
							<TimeText className="text-accent-400">
								{formatTime(displayedCurrentTime, displayedTotalTime)}
							</TimeText>

							<TimeText className="text-gray-700">
								{formatTime(displayedTotalTime)}
							</TimeText>
						</div>

						<div>
							<HeadingText className="whitespace-nowrap text-white">
								{player.meta.title}
							</HeadingText>
						</div>
					</SpacingWrapper>

					<div className="relative h-1 w-full bg-gray-700">
						<div
							className="absolute left-0 top-0 h-full w-0 bg-accent-400"
							style={{
								width: `${state.getThumbPercent(0) * 100}%`,
							}}
						></div>
					</div>
				</div>

				<PodButton
					href={`https://facebook.com/sharer.php?u=https://thekickcast.com${router.asPath}`}
				>
					<IconImage icon="share" />
				</PodButton>
			</SiteWrapper>
		</div>
	);
}
