import clsx from 'clsx';

export function HeadingText({
	as: Component = 'h2',
	className,
	sizeClass = 'text-4xl',
	...props
}) {
	return (
		<Component
			className={clsx(className, `${sizeClass} font-condensed font-bold`)}
			{...props}
		/>
	);
}
