import clsx from 'clsx';

export function HeadingText({ as: Component = 'h2', className, ...props }) {
	return (
		<Component className={clsx(className, 'text-xl font-display')} {...props} />
	);
}
