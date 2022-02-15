import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

export default () => (
	<>
		<MetaTags
			title="Charalampos Fanoulis"
			description="student, dreamer, maker"
			/* you should un-comment description and add a unique description, 155 characters or less
	You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
		/>
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
	</>
);
