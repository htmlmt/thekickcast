import clsx from 'clsx';

export function PageWrapper({ as: Component = 'div', className, ...props }) {
	return (
		<Component
			className={clsx(className, 'mx-auto w-full max-w-page')}
			{...props}
		/>
	);
}
