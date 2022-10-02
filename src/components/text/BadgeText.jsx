import Link from 'next/link';
import clsx from 'clsx';

const variantStyles = {
	goodGood: 'bg-yellow-400',
	goodBad: 'bg-blue-200',
	badGood: 'bg-blue-100',
	badBad: 'bg-white border-2 border-gray-50',
	mixed: 'bg-gray-50',
};

export function BadgeText({ variant = 'goodGood', className, href, ...props }) {
	className = clsx(
		'inline-block p-2 text-base font-semibold tracking-wider',
		variantStyles[variant],
		className
	);

	return href ? (
		<Link href={href} className={className} {...props} />
	) : (
		<span className={className} {...props} />
	);
}
