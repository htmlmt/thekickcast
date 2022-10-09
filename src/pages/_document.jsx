import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html className="h-full antialiased" lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@400;700&family=Saira:wght@400;600&family=Roboto+Mono&family=Playfair+Display:ital,wght@1,700&display=optional"
					rel="stylesheet"
				/>
			</Head>
			<body className="flex h-full flex-col bg-gray-700">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
