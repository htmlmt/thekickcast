import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html className="h-full antialiased" lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Mono&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="flex h-full flex-col">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
