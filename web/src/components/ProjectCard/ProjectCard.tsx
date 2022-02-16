interface CardProps {
	img?: string;
	name: string;
	desc: string;
	url?: string;
	featured?: boolean;
}

const ProjectCard = (props: CardProps) => {
	return (
		<div className="mb-2 md:mb-0 border-2 p-2 rounded-sm border-slate-400">
			{props.img !== null && <img src={props.img} className="float-right ml-1 aspect-square sm:h-8" alt={`${props.name} logo`} />}

			{props.featured ? (
				<>
					<a href={props.url}>
						<h5 className="font-medium underline">{props.name} ↗</h5>
					</a>
				</>
			) : (
				<>
					<h5 className="font-medium">{props.name}</h5>
				</>
			)}
			<p className="pt-2 text-sm">{props.desc}</p>
		</div>
	);
};

export default ProjectCard;
