import { Link, routes } from '@redwoodjs/router';

const ProjectsPage = () => {
	return (
		<main className="min-h-screen w-screen p-4 lg:p-16 flex flex-col bg-neutral-900 text-gray-300 absolute">
			<h1 className="text-4xl md:text-6xl font-heading font-medium">Oh, don&apos;t mind the construction work</h1>
			<p className="pt-4 lg:pt-14">
				This page is just under construction. You probably want to return to the{' '}
				<Link to={routes.landing()} className="underline">
					home page ↗
				</Link>
			</p>
		</main>
	);
};

export default ProjectsPage;
