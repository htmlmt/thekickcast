import clsx from 'clsx';

export function SpacingWrapper({ as: Component = 'div', className, ...props }) {
	return <Component className={clsx(className, 'px-6')} {...props} />;
}
