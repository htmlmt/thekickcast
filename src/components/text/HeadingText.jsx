import clsx from 'clsx';

export function HeadingText({
	as: Component = 'h2',
	className,
	sizeClass = 'text-3xl',
	...props
}) {
	return (
		<Component
			className={clsx(
				className,
				`${sizeClass} font-sans font-bold tracking-tighter`
			)}
			{...props}
		/>
	);
}
