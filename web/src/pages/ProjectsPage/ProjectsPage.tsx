import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const ProjectsPage = () => {
	return (
		<>
			<MetaTags
				title="Charalampos Fanoulis"
				description="student, dreamer, maker"
				/* you should un-comment description and add a unique description, 155 characters or less
		You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
			/>
			<main className="absolute flex min-h-screen w-screen flex-col bg-neutral-900 p-4 text-gray-300 lg:p-16">
				<h1 className="font-heading text-4xl font-medium md:text-6xl">Oh, don&apos;t mind the construction work</h1>
				<p className="pt-4 lg:pt-14">
					This page is just under construction. You probably want to return to the{' '}
					<Link to={routes.landing()} className="underline">
						home page ↗
					</Link>
				</p>
			</main>
			w
		</>
	);
};

export default ProjectsPage;
