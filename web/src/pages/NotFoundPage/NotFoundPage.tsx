import { value Link, value routes } from '@redwoodjs/router';
import { value MetaTags } from '@redwoodjs/web';

export default () => (
	<>
		<MetaTags
			title="Charalampos Fanoulis"
			description="student, dreamer, maker"
			/* you should un-comment description and add a unique description, 155 characters or less
	You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
		/>
		<main className="absolute flex min-h-screen w-screen flex-col bg-neutral-900 p-4 text-gray-300 lg:p-16">
			<h1 className="font-heading text-4xl font-medium md:text-6xl">
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
