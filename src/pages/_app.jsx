import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
	return (
		<>
			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
}
