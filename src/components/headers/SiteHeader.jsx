import Link from 'next/link';

import { LogoImage } from '@/components/images/LogoImage';

import { PageWrapper } from '@/components/wrappers/PageWrapper';
import { SpacingWrapper } from '@/components/wrappers/SpacingWrapper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faXTwitter,
	faTiktok,
} from '@fortawesome/free-brands-svg-icons';

export function SiteHeader() {
	return (
		<header className="bg-white py-6">
			<PageWrapper>
				<SpacingWrapper className="flex flex-wrap items-end justify-center gap-x-8 gap-y-6 md:justify-between">
					<Link className="w-full md:w-auto" href="/">
						<LogoImage />
					</Link>

					<nav className="grid grid-cols-3 gap-6 text-center">
						<div className="col-span-3 flex justify-end gap-6">
							<a
								aria-label="The Kick on Instagram"
								href="https://www.instagram.com/thekick_pod/"
								target="_blank"
							>
								<FontAwesomeIcon size="2x" icon={faInstagram} />
							</a>
							<a
								aria-label="The Kick on Twitter"
								href="https://x.com/TheKick_Pod/"
								target="_blank"
							>
								<FontAwesomeIcon size="2x" icon={faXTwitter} />
							</a>
							<a
								aria-label="The Kick on TikTok"
								href="https://www.tiktok.com/@the.kick.podcast"
								target="_blank"
							>
								<FontAwesomeIcon size="2x" icon={faTiktok} />
							</a>
						</div>

						<a
							className="hidden border-b-8 border-b-secondary-400 px-6 py-4 text-xl font-bold md:block"
							href="#episodes"
						>
							episodes
						</a>
						<a
							className="hidden border-b-8 border-b-accent-400 px-6 py-4 text-xl font-bold md:block"
							href="#about"
						>
							about
						</a>
						<Link
							className="w-full border-b-8 border-b-tertiary-400 px-6 py-4 text-xl font-bold md:w-auto"
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
