import { Link } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import SpotifyShowcase from 'src/components/SpotifyShowcase/SpotifyShowcase';

const LandingPage = () => {
	return (
		<div className="h-screen w-screen flex flex-col justify-center lg:p-16 bg-blue-200">
			<MetaTags
				title="Charalampos Fanoulis"
				// description="Landing description"
				/* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
			/>
			<div className="glass lg:w-7/12 p-8 rounded ">
				<h1 className="font-heading text-4xl font-bold mb-8">Well hello, I&apos;m Charalampos</h1>
				<p className="font-sans mb-4">
					I&apos;m a sophomore student in Thessaloniki, GR, while also writing code in my free time, participating & maintaining open-source{' '}
					<Link to="/projects" className="underline">
						projects ↗
					</Link>{' '}
					and participating in{' '}
					<a href="https://hackclub.com/?ref=fanoulis" className="underline">
						Hack Club ↗
					</a>
					, an online community for teenagers in computer sciences.
				</p>
				<SpotifyShowcase className="mb-4" />
				<div className="flex sm:flex-row">
					<a className="sm:text-sm mr-4 underline" href="https://fanoulis.dev/twt">
						My Twitter ↗
					</a>
					<a className="sm:text-sm mr-4 underline" href="https://fanoulis.dev/gh">
						My GitHub ↗
					</a>
					<a className="sm:text-sm underline" href="mailto:yo@fanoulis.dev">
						Email me →
					</a>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
