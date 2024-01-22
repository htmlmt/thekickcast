import clsx from 'clsx';

export function ContentWrapper({ as: Component = 'div', className, ...props }) {
	return <Component className="mx-auto w-full max-w-xl pb-12" {...props} />;
}
