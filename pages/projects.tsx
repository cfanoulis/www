import React, {useEffect, useState} from 'react';

import styles from '../stylesheets/pages/projects.module.scss';

const fetchProjects = () => {
	return [
		{
			name: 'Skyra', description: ' Skyra is a robust All-in-One bot for Discord', links: [
				{name: 'Visit Skyra', link: 'https://skyra.pw'},
				{name: 'Skyra on GitHub', link: 'https://github.com/skyra-project/skyra'}
			]
		}
	];
};

const generateCards = () => {
	const projects = fetchProjects();
	return projects.map(project => {
		return (
			<div key={project.name} className={styles.card}>
				<p className={styles.cardtitle}>{project.name}</p>
				<p className={styles.carddesc}>{project.description}</p>
				{project.links.map(linkElement => {
					return (
						<div key={linkElement.name} className={styles.cardlink} >
							<br />
							<a href={linkElement.link} target="_blank" rel="noreferrer">{linkElement.name}</a>
						</div>
					);
				})}
			</div>
		);
	});
};

const Projects = () => {
	const [cardElements, setCards] = useState(null);
	useEffect(() => {
		function makeCards() {
			const cards = generateCards();
			setCards(cards);
		}

		makeCards();
	}, []);

	return (
		<div className={styles.projectspage}>
			<h1> Projects I&apos;ve worked on</h1>
			<div className={styles.cardscontainer}>
				{cardElements ?? 'Loading awesomeness'}
			</div>
		</div>
	);
};

export default Projects;
