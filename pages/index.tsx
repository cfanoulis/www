import React from 'react';
import Link from 'next/link';

import styles from '../stylesheets/pages/index.module.scss';
const randomHello = () => {
	const greetings = ['hi', 'hello', 'howdy', 'hi there', 'hello there'];
	return greetings[Math.floor(Math.random() * 5)];
};

const Index = () => (
	<div className={styles.indexpage}>
		<div className={styles.intro}>
			<h1>
				{randomHello()},<br/>I&apos;m charalampos fanoulis
			</h1>
			<p>
				A 15 year old self-taught developer,<br/>{}
				currently attending Junior High School,<br/>{}
				born and raised in Thessaloniki, GR

				<br/>
				<br/>{}

				I&apos;m experienced with JavaScript and TypeScript, both
				on the backend with Node.js and on the frontend with
				React and Next.js. In addition, I have studied some basic Rust and
				Python as well. I&apos;ve also got some novice experience
				with Docker, parts of the Hashicorp stack and system administration
			</p>
			<div className={styles.buttongroup}>
				<button type="button"><a href="https://github.com/cfanoulis" target="_blank" rel="noreferrer">GitHub</a></button>
				<button type="button"><a href="https://twitter.com/cfanoulis" target="_blank" rel="noreferrer">Twitter</a></button>
				<button type="button"><a href="https://instagram.com/cfanoulis" target="_blank" rel="noreferrer">Instagram</a></button>
				<button type="button"><a href="mailto:yo@fanoulis.dev">E-mail me</a></button>
			</div>
		</div>
		<div className={styles.navigation}>
			<h3>Navigation</h3>
			<ul>
				<li><Link href="/projects"><a href="/projects">Projects I&apos;ve worked on</a></Link></li>
				<li><Link href="/contact"><a href="/contact">Contact me</a></Link></li>
			</ul>
		</div>
	</div>
);

export default Index;
