import clsx from 'clsx';

export function TimeText({ as: Component = 'p', className, ...props }) {
	return (
		<Component
			className={clsx(
				className,
				'font-mono text-base uppercase tracking-wider'
			)}
			{...props}
		/>
	);
}
