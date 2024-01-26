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

					<nav className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-6 md:flex md:justify-end">
						<a
							className="border-b-8 border-b-secondary-400 px-6 py-4 text-xl font-bold"
							href="#episodes"
						>
							episodes
						</a>
						<a
							className="border-b-8 border-b-accent-400 px-6 py-4 text-xl font-bold"
							href="#about"
						>
							about
						</a>
						<Link
							className="border-b-8 border-b-tertiary-400 px-6 py-4 text-xl font-bold"
							href="https://podcasts.apple.com/us/podcast/the-kick/id983292375"
						>
							subscribe
						</Link>
					</nav>
				</SpacingWrapper>
			</PageWrapper>
		</header>
	);
}
