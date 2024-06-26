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

					<nav className="grid w-full grid-cols-1 gap-6 text-center md:w-auto md:grid-cols-3">
						<div className="col-span-3 flex justify-center gap-6 md:justify-end">
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

						<Link
							className="col-span-1 hidden border-b-8 border-b-secondary-400 px-6 py-4 text-xl font-bold md:block"
							href="#episodes"
						>
							episodes
						</Link>
						<Link
							className="col-span-1 hidden border-b-8 border-b-accent-400 px-6 py-4 text-xl font-bold md:block"
							href="#about"
						>
							about
						</Link>
						<a
							className="col-span-3 border-b-8 border-b-tertiary-400 px-6 py-4 text-xl font-bold md:col-span-1"
							href="https://podcasts.apple.com/us/podcast/the-kick/id983292375"
							target="_blank"
						>
							subscribe
						</a>
					</nav>
				</SpacingWrapper>
			</PageWrapper>
		</header>
	);
}
