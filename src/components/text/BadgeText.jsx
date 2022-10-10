import Link from 'next/link';
import clsx from 'clsx';

const variantStyles = {
	good_good: 'bg-yellow-400',
	good_bad: 'bg-blue-200',
	bad_good: 'bg-blue-100',
	bad_bad: 'bg-white border-2 border-gray-50',
	mixed: 'bg-gray-50',
};

export function BadgeText({
	variant = 'good_good',
	className,
	href,
	...props
}) {
	className = clsx(
		'inline-block p-2 text-base font-semibold tracking-wider whitespace-nowrap text-ellipsis overflow-hidden',
		variantStyles[variant],
		className
	);

	return href ? (
		<Link href={href} className={className} {...props} />
	) : (
		<p className={className} {...props} />
	);
}
