import { MetaTags } from '@redwoodjs/web';
import LandingPageSection from 'src/components/LandingPageSection/LandingPageSection';
import SpotifyShowcase from 'src/components/SpotifyShowcase/SpotifyShowcase';

const LandingPage = () => {
	return (
		<div className="min-h-screen w-screen p-4 lg:p-16 flex flex-col bg-neutral-900 text-gray-300 absolute">
			<MetaTags
				title="Charalampos Fanoulis"
				description="student, dreamer, maker"
				/* you should un-comment description and add a unique description, 155 characters or less
				You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
			/>
			<h2 className="text-xl">Greetings, I&apos;m</h2>
			<br />
			<h1 className="text-3xl md:text-6xl font-heading font-medium">Charalampos Fanoulis</h1>
			<h1 className="text-sm md:text-lg italic font-thin font-heading">student, dreamer, maker</h1>
			<br />
			<SpotifyShowcase />
			<LandingPageSection title="whoami">
				I&apos;m a 17 year-old high-school STEM student from Thessaloniki, Greece. I started programming in 2018, using{' '}
				<strong className="font-bold">Node.JS</strong> to create small Discord bots. Ever since, I have been given the opportunity to work
				with amazing projects such as G4M3R, Skyra and others. As of lately, I&apos;m tinkering around with{' '}
				<strong className="font-bold">Rust</strong> &amp; <strong className="font-bold">RedwoodJS</strong>, creating and maintaining small
				apps &amp; open source libraries. I&apos;m also an active member in{' '}
				<a className="underline" href="https://hackclub.com/">
					Hack Club ↗
				</a>
				<br />
			</LandingPageSection>
		</div>
	);
};

export default LandingPage;
