import Link from 'next/link';
import React from 'react';
import styles from '../stylesheets/pages/index.module.css';

const Index = () => (
	<div className={styles.index}>
		<div className={styles.text}>
			<h1>
				Hi,
				<br />
				I&apos;m Charalampos Fanoulis
			</h1>
			<p>
				Making stuff with JavaScript, TypeScript & Rust.
				<br /> Leading{' '}
				<a href="https://hackropolis.club" className={styles.textlink}>
					Hackropolis
				</a>
				, Greece's first student-run teenager computer club.
				<br /> Volunteering as a Web Administator for{' '}
				<a href="https://prwtovoulia.com" className={styles.textlink}>
					Protovoulia Neon.
				</a>
				<br />
				Currently interested in internships
			</p>
		</div>
		<hr style={{ width: '50px', textAlign: 'left', marginLeft: 0, border: '0.25rem solid white' }} />
		<div className={styles.links}>
			<Link href="/projects">
				<a href="/projects" className={styles.link}>
					Projects I&apos;ve worked on
				</a>
			</Link>{' '}
			<br />
			<a href="https://github.com/cfanoulis" target="_blank" rel="noreferrer" className={styles.link}>
				GitHub
			</a>{' '}
			<br />
			<a href="https://twitter.com/cfanoulis" target="_blank" rel="noreferrer" className={styles.link}>
				Twitter
			</a>{' '}
			<br />
			<a href="mailto:yo@fanoulis.dev" className={styles.link}>
				E-mail me
			</a>
		</div>
	</div>
);

export default Index;
