import Link from 'next/link';

import { SearchForm } from '@/components/forms/SearchForm';

import { LogoImage } from '@/components/images/LogoImage';

import { PageWrapper } from '@/components/wrappers/PageWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

export function SiteHeader() {
	return (
		<header className="bg-white bg-header-pattern bg-24 py-6">
			<PageWrapper>
				<SpacingWrapper className="flex flex-wrap gap-x-8 justify-center md:justify-between items-end gap-y-6">
					<Link className="-rotate-1" href="/">
						<LogoImage />
					</Link>

					<SearchForm />
				</SpacingWrapper>
			</PageWrapper>
		</header>
	)
}
