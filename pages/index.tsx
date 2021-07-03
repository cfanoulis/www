import styles from '../stylesheets/pages/index.module.css';

const Index = () => (
	<div className={styles.index}>
		<div className={styles.text}>
			<h1>
				Hi,
				<br />
				I&apos;m Charalampos Fanoulis
			</h1>
			<h5>
				<i>If it doesn't exist, why not make it yourself?</i>
			</h5>
			<p>
				Full-time student, part-time maker & open-source contributor
				<br /> Leading{' '}
				<a href="https://hackropolis.club" className={styles.textlink}>
					Hackropolis
				</a>
				, Greece's first student-run teenager computer club.
				<br />
			</p>
		</div>
		<hr style={{ width: '50px', textAlign: 'left', marginLeft: 0, border: '0.25rem solid white' }} />
		<div className={styles.links}>
			<a href="/projects" rel="noreferrer" className={styles.link}>
				Projects I&apos;ve worked on
			</a>
			<br />
			<a href="https://l.fanoulis.dev/github" target="_blank" rel="noreferrer" className={styles.link}>
				GitHub
			</a>
			<br />
			<a href="https://fanoulis.dev/twt" target="_blank" rel="noreferrer" className={styles.link}>
				Twitter
			</a>
			<br />
			<a href="mailto:yo@fanoulis.dev" className={styles.link}>
				E-mail me
			</a>
		</div>
	</div>
);

export function getStaticProps() {
	return { props: {} };
}

export default Index;
