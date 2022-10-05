import clsx from 'clsx';

export function IconImage({ icon, className }) {
	className = clsx('w-12', className);

	return (
		<svg
			className={className}
			title={`${icon} icon`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
		>
			{iconVectors(icon)}
		</svg>
	);
}

function iconVectors(icon) {
	switch (icon) {
		case 'play':
			return (
				<polygon
					className="fill-gray-900"
					points="15.69 13.15 15.69 36.85 36.56 25 15.69 13.15"
				/>
			);
		case 'pause':
			return (
				<g>
					<rect
						className="fill-gray-900"
						x="17.4"
						y="13.15"
						width="5.14"
						height="23.7"
					/>
					<rect
						className="fill-gray-900"
						x="27.46"
						y="13.15"
						width="5.14"
						height="23.7"
					/>
				</g>
			);
		case 'share':
			return (
				<g>
					<rect
						className="fill-gray-900"
						x="22.28"
						y="6.55"
						width="5.14"
						height="23.7"
					/>
					<rect
						className="fill-gray-900"
						x="22.43"
						y="22.26"
						width="5.14"
						height="33.44"
						transform="translate(63.98 13.98) rotate(90)"
					/>
					<rect
						className="fill-gray-900"
						x="36.58"
						y="21"
						width="5.14"
						height="20.55"
					/>
					<rect
						className="fill-gray-900"
						x="8.28"
						y="21"
						width="5.14"
						height="20.55"
					/>
					<rect
						className="fill-gray-900"
						x="18.94"
						y="3.07"
						width="5.14"
						height="15"
						transform="translate(13.77 -12.12) rotate(45)"
					/>
					<rect
						className="fill-gray-900"
						x="25.91"
						y="3.07"
						width="5.14"
						height="15"
						transform="translate(0.87 23.24) rotate(-45)"
					/>
				</g>
			);
		default:
			return false;
	}
}
