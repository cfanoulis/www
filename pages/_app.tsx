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
					<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "82afc8e5618b40e38dc1670c59942894"}'></script>

					<meta charSet="utf-8"/>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width, viewport-fit=cover"
					/>
					<meta
						name="description"
						content="My name is Charalampos Fanoulis. Welcome to my site"
					/>
					<meta
						name="summary"
						content="An aspiring student trying their luck in computer science. Greece."
					/>
					<meta name="subject" content="Charalampos Fanoulis's website"/>

					{/* <!-- Open Graph integration --> */}
					<meta property="og:title" content="This is Charalampos Fanoulis"/>
					<meta property="og:type" content="website"/>
					<meta property="og:url" content="https://fanoulis.dev"/>
					<meta property="og:locale" content="en_US"/>
					<meta property="og:email" content="yo@fanoulis.dev"/>
					<meta
						property="og:description"
						content="An aspiring student trying their luck in computer science. Greece."
					/>

					{/* <!-- Twitter Integration --> */}
					<meta name="twitter:title" content="Charalampos Fanoulis's website"/>
					<meta name="twitter:card" content="summary"/>
					<meta
						name="twitter:description"
						content="An aspiring student trying their luck in computer science. Greece."
					/>
					<meta name="twitter:site" content="@cfanoulis"/>
					<meta name="twitter:creator" content="@cfanoulis"/>

					{/* SEO */}
					<meta name="googlebot" content="index,follow"/>
					<meta name="robots" content="archive,follow,imageindex,index,odp,snippet,translate"/>
					<meta name="author" content="Charalampos Fanoulis, yo@fanoulis.dev"/>
					<meta name="owner" content="Charalampos Fanoulis, yo@fanoulis.dev"/>
					<meta name="designer" content="Charalampos Fanoulis, yo@fanoulis.dev"/>
					<meta name="reply-to" content="yo@fanoulis.dev"/>
					<meta name="target" content="all"/>
					<meta name="audience" content="all"/>
					<meta name="coverage" content="Worldwide"/>
					<meta name="distribution" content="Global"/>
					<meta name="rating" content="safe for kids"/>
					<meta name="apple-touch-fullscreen" content="yes"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<meta name="apple-mobile-web-app-status-bar-style" content="dark-blue"/>
					<meta name="format-detection" content="telephone=yes"/>
					<meta name="HandheldFriendly" content="True"/>
					<meta name="keywords" content="charalampos, fanoulis, website, personal, greece, greek, developer"/>
					<meta name="category" content="personal site"/>
					<meta name="revisit-after" content="3 days"/>
					<meta name="url" content="https://fanoulis.dev"/>
					<meta name="identifier-URL" content="https://fanoulis.dev"/>
					<link rel="canonical" href="https://fanoulis.dev"/>
					<link rel="shortlink" href="https://fanoulis.dev"/>

					<title>Charalampos Fanoulis</title>
					<link rel="shortcut icon" href="/static/favicon.ico"/>
					<link rel="favicon" href="/static/favicon.ico"/>
					<meta name="theme-color" content="#fafafa"/>
				</Head>
				<Component {...pageProps}/>
			</>
		);
	}
}
