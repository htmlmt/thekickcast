import clsx from 'clsx';

export function PageWrapper({ as: Component = 'div', className, ...props }) {
	return (
		<Component
			className={clsx(className, 'max-w-page mx-auto w-full')}
			{...props}
		/>
	);
}
