import clsx from 'clsx';

export function SiteWrapper({ as: Component = 'div', className, ...props }) {
	return (
		<Component
			className={clsx(className, 'mx-auto min-h-full w-full max-w-site')}
			{...props}
		/>
	);
}
