import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html className="h-full antialiased" lang="en">
			<Head>
				<link rel="icon" href="/favicon.svg" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Mono&family=Saira+Extra+Condensed&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="flex flex-col">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
