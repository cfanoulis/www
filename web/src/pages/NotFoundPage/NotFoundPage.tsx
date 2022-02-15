import { Link, routes } from '@redwoodjs/router';

export default () => (
	<main className="min-h-screen w-screen p-4 lg:p-16 flex flex-col bg-neutral-900 text-gray-300 absolute">
		<h1 className="text-4xl md:text-6xl font-heading font-medium">
			Error Four-Oh-Four:
			<br />
			Not the page you&apos;re looking for
		</h1>
		<p className="pt-4 lg:pt-14">
			You&apos;ve landed on a page that doesn&apos;t exist. Let&apos;s take you back to the{' '}
			<Link to={routes.landing()} className="underline">
				home page ↗
			</Link>
		</p>
	</main>
);
