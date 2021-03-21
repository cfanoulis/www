import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../stylesheets/pages/projects.module.css';
const fetchProjects = () => {
	return [
		{
			name: 'Skyra',
			img: 'https://github.com/skyra-project.png',
			description: 'Skyra is a robust All-in-One bot for Discord',
			links: [
				{ name: 'Visit Skyra', link: 'https://skyra.pw' },
				{ name: 'Skyra on GitHub', link: 'https://github.com/skyra-project/skyra' }
			]
		},
		{
			name: 'Hackropolis',
			img: 'https://github.com/hackropolis.png',
			description: "Greece's first teenage maker club. Operating under the auspices of The Hack Foundation",
			links: [
				{ name: 'Club website', link: 'https://hackropolis.club' },
				{ name: 'Club projects (on GitHub)', link: 'https://github.com/hackropolis' }
			]
		},
		{
			name: 'Airtable++',
			img: null,
			description: 'Less-frustrating Typescript abstraction over the airtable JS SDK. Forked from victorhahn/airtable-plus',
			links: [
				{ name: 'Club website', link: 'https://hackropolis.club' },
				{ name: 'Club projects (on GitHub)', link: 'https://github.com/hackropolis' }
			]
		},
		{
			name: 'Network',
			img: null,
			description: 'A social network inside Discord. Made for Discord Hack Week 2019',
			links: [{ name: 'Github Repository ', link: 'https://github.com/Skillz4Killz/network' }]
		}
	];
};

const generateCards = () => {
	const projects = fetchProjects();
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

const Projects = () => {
	const [cardElements, setCards] = useState<null | JSX.Element[]>(null);
	useEffect(() => {
		function makeCards() {
			const cards = generateCards();
			setCards(cards);
		}

		makeCards();
	}, []);

	return (
		<div className={styles.projectscontainer}>
			<Link href="/">
				<a className={styles.back}>&#8592; Go back</a>
			</Link>
			<h1 className={styles.title}> Projects I&apos;ve worked on</h1>
			<div className={styles.cardscontainer}>{cardElements ?? 'Give it a second...'}</div>
		</div>
	);
};

export default Projects;
