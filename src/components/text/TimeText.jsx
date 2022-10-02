import clsx from 'clsx';

export function TimeText({ as: Component = 'span', className, ...props }) {
	return (
		<Component
			className={clsx(
				className,
				`font-mono text-base uppercase tracking-wider`
			)}
			{...props}
		/>
	);
}
