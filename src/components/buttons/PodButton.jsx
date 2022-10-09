import Link from 'next/link';
import clsx from 'clsx';

export function PodButton({ className, href, ...props }) {
	className = clsx(
		'flex grid w-30 items-center justify-center',
		className
	);

	return href ? (
		<Link href={href} className={className} {...props} />
	) : (
		<div className={className} {...props} />
	);
}
