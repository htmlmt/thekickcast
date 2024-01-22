import Link from 'next/link';
import clsx from 'clsx';

export function PodButton({ className, href, ...props }) {
	className = clsx(
		'flex grid w-20 items-center justify-center grow-0 shrink-0 bg-white',
		className
	);

	return href ? (
		<a
			href={href}
			rel="noopener noreferrer"
			target="_blank"
			className={className}
			{...props}
		/>
	) : (
		<div className={className} {...props} />
	);
}
