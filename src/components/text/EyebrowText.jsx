import clsx from 'clsx';

export function EyebrowText({ as: Component = 'p', className, ...props }) {
	return (
		<Component
			className={clsx(
				className,
				'relative z-10 inline-block border-2 bg-white py-1 px-4 font-sans text-lg uppercase tracking-wider text-gray-700'
			)}
			{...props}
		/>
	);
}
