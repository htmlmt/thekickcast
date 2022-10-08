import clsx from 'clsx';

export function EyebrowText({ as: Component = 'p', className, ...props }) {
	return (
		<Component
			className={clsx(
				className,
				'relative z-10 inline-block bg-gray-900 py-1 px-4 font-display text-lg uppercase tracking-wider text-white'
			)}
			{...props}
		/>
	);
}
