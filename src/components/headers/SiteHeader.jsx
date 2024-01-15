import Link from 'next/link';

import { LogoImage } from '@/components/images/LogoImage';

import { PageWrapper } from '@/components/wrappers/PageWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export function SiteHeader() {
	return (
		<header className="bg-white py-6">
			<PageWrapper>
				<SpacingWrapper className="flex flex-wrap items-end justify-center gap-x-8 gap-y-6 md:justify-between">
					<Link href="/">
						<LogoImage />
					</Link>
				</SpacingWrapper>
			</PageWrapper>
		</header>
	);
}
