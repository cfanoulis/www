interface ProjectDetails {
	img?: string;
	name: string;
	description: string;
	url: string;
	featured: boolean;
}
import { useEffect, useRef, useState } from 'react';
import ProjectCard from 'src/components/ProjectCard/ProjectCard';

const getFeaturedProjects = async () => {
	const d = (await fetch('/projects.json').then((p) => p.json())) as ProjectDetails[];
	return d.filter((project) => project.featured);
};

const FeaturedProjectsShowcase = () => {
	const [loaded, setLoaded] = useState(false);
	const projects = useRef([] as ProjectDetails[]);
	useEffect(() => {
		getFeaturedProjects().then((results) => {
			projects.current = results;
			setLoaded(true);
		});
	}, []);
	const featuredProjectCards = loaded
		? projects.current.map((details) => (
				<ProjectCard
					key={details.name.toLowerCase()}
					name={details.name}
					desc={details.description}
					url={details.url}
					img={details.img ?? null}
					featured
				></ProjectCard>
		  ))
		: [];
	return <div className="grid-cols-5 md:grid gap-3 mb-4">{featuredProjectCards}</div>;
};

export default FeaturedProjectsShowcase;
