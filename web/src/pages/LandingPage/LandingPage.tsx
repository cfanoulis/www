import { Link } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import FeaturedProjectsShowcase from 'src/components/FeaturedProjectsShowcase/FeaturedProjectsShowcase';
import LandingPageSection from 'src/components/LandingPageSection/LandingPageSection';
import SpotifyShowcase from 'src/components/SpotifyShowcase/SpotifyShowcase';

const LandingPage = () => {
	return (
		<div className="min-h-screen w-screen overflow-x-hidden p-4 lg:p-16 flex flex-col bg-neutral-900 text-gray-300 absolute">
			<MetaTags title="Charalampos Fanoulis" description="student, dreamer, maker" />
			<h1 className="text-lg">Greetings, I&apos;m</h1>
			<h1 className="text-4xl md:text-6xl font-heading font-medium">Charalampos Fanoulis</h1>
			<h2 className="text-sm md:text-lg italic font-thin font-heading">student, dreamer, maker</h2>
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
				, cooperating &amp; creating with like-minded students from all around the world.
				<br />
			</LandingPageSection>
			<LandingPageSection title="projects">
				<FeaturedProjectsShowcase />
				<p>
					View my complete portfolio{' '}
					<Link to="/projects" className="underline">
						here ↗
					</Link>
				</p>
			</LandingPageSection>
			<LandingPageSection title="contact">
				<i className="italics text-xs">
					Please keep in mind: I live in <strong className="font-bold">Europe/Athens</strong> time. Slow response times should be expected
					when contacted outside working hours
				</i>
				<ul>
					<li>
						Shout at me on{' '}
						<a className="underline" href="https://twitter.com/cfanoulis">
							Twitter ↗
						</a>
						,
					</li>
					<li>
						or send an email to{' '}
						<a className="underline" href="mailto:charalampos@fanoulis.dev?subject=%F0%9F%91%8B ">
							charalampos@fanoulis.dev ↗
						</a>
						,
					</li>
					<li>or finally, send me a DM on Discord (not preferred): enkiel#8897</li>
				</ul>
			</LandingPageSection>
		</div>
	);
};

export default LandingPage;
