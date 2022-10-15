import Link from 'next/link';

import { SearchForm } from '@/components/forms/SearchForm';

import { LogoImage } from '@/components/images/LogoImage';

import { PageWrapper } from '@/components/wrappers/PageWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

function logoLinkOnMouseDown() {
	const logoForeground = document.querySelector('#logo-foreground');
	logoForeground.setAttribute('transform', 'translate(10.07 10.46)');
}

function logoLinkOnMouseUp() {
	const logoForeground = document.querySelector('#logo-foreground');
	logoForeground.setAttribute('transform', 'translate(0 0)');
}

export function SiteHeader() {
	return (
		<header className="bg-white bg-header-pattern bg-24 py-6">
			<PageWrapper>
				<SpacingWrapper className="flex flex-wrap items-end justify-center gap-x-8 gap-y-6 md:justify-between">
					<Link
						className="-rotate-1"
						href="/"
						onMouseDown={logoLinkOnMouseDown}
						onMouseUp={logoLinkOnMouseUp}
					>
						<LogoImage />
					</Link>

					<SearchForm />
				</SpacingWrapper>
			</PageWrapper>
		</header>
	);
}
