import { readFile } from 'fs/promises';
import Link from 'next/link';
import styles from '../stylesheets/pages/projects.module.css';
interface IProject {
	name: string;
	img: string | null;
	description: string;
	current: boolean;
	links: {
		name: string;
		link: string;
	}[];
}

const generateCards = (projects: IProject[]) => {
	return projects.map((project) => {
		return (
			<div key={project.name} className={styles.card}>
				<div>
					{project.img !== null && <img src={project.img} width={64} height={64} className={styles.cardimg} />}
					<p className={styles.cardtitle}>{project.name}</p>
					<p className={styles.carddesc}>{project.description}</p>
					<br />
				</div>
				<div className={styles.linkcontainer}>
					{project.links.map((linkElement) => {
						return (
							<div key={linkElement.name}>
								<a href={linkElement.link} target="_blank" rel="noreferrer" className={styles.cardlink}>
									{linkElement.name}
								</a>
								<br />
							</div>
						);
					})}
				</div>
			</div>
		);
	});
};

const Projects = (props: { data: IProject[]; err?: Error }) => {
	if (!props.err) {
		const curr = generateCards(props.data.filter((e) => e.current));
		const prev = generateCards(props.data.filter((e) => !e.current));

		return (
			<div className={styles.projectscontainer}>
				<Link href="/">
					<a className={styles.back}>&#8592; Go back</a>
				</Link>
				<h1 className={styles.title}> Projects I&apos;m a part of</h1>
				<div className={styles.cardscontainer}>{curr ?? 'Give it a second...'}</div>
				<h1 className={styles.title}> Projects I&apos;ve worked on</h1>
				<div className={styles.cardscontainer}>{prev ?? 'Give it a second...'}</div>
			</div>
		);
	}
	return (
		<div className={styles.projectscontainer}>
			<Link href="/">
				<a className={styles.back}>&#8592; Go back</a>
			</Link>
			<h1 className={styles.title}> Welp, something went wrong.</h1>
			<p>Maybe try again? Else email me, including the following error</p>
			<br />
			<br />
			<code>{props.err}</code>
		</div>
	);
};

export async function getStaticProps() {
	try {
		const txt = await readFile('./public/static/projects.json', 'utf-8');
		const data = JSON.parse(txt) as IProject[];
		return { props: { data } };
	} catch (error) {
		return {
			props: {
				curr: [],
				prev: [],
				err: `${error.message}
				
		${error.stack}`
			}
		};
	}
}

export default Projects;
