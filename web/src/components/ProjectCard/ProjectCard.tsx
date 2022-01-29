interface ProjectCardProps {
	projectTitle: string;
	projectDescription: string;
	current: boolean;
	img?: string;
}

const ProjectCard = ({ projectTitle, projectDescription, current, img }: ProjectCardProps) => {
	return (
		<div className={`glass p-8 rounded lg:max-w-md ${current ? 'order-1' : ''}`}>
			<h5 className="text-xl font-heading font-bold">{projectTitle}</h5>
			<p className="text-base font-sans font-normal">{projectDescription}</p>
			<img src="https://github.com/skyra-project.png" />
		</div>
	);
};

export default ProjectCard;
