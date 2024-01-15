import clsx from 'clsx';

export function SiteWrapper({ as: Component = 'div', className, ...props }) {
	return (
		<Component className={clsx(className, ' min-h-full w-full')} {...props} />
	);
}
