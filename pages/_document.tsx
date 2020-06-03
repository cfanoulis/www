import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';

export default class CustomDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width, viewport-fit=cover"
					/>
					<link rel="manifest" href="/manifest.json"/>
					<meta name="theme-color" content="#fafafa"/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</html>
		);
	}
}
