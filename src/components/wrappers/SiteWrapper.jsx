import clsx from 'clsx';

export function SiteWrapper({ as: Component = 'div', className, ...props }) {
	return (
		<Component
			className={clsx(className, 'w-full bg-header-pattern bg-cover bg-fixed')}
			{...props}
		/>
	);
}
