import React from 'react';
import App from 'next/app';

import '../stylesheets/global.scss';
import Head from 'next/head';

export default class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;

		return (
			<>
				<Head>
					<meta charSet="utf-8"/>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width, viewport-fit=cover"
					/>
					<link rel="shortcut icon" href="/public/static/favicon.ico"/>
					<meta name="theme-color" content="#fafafa"/>

					<title>Charalampos Fanoulis</title>
				</Head>
				<Component {...pageProps}/>
			</>

		);
	}
}
