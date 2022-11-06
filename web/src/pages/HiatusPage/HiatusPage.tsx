import { MetaTags } from '@redwoodjs/web';

const HiatusPage = () => {
	return (
		<main className="absolute flex items-center justify-center h-screen w-screen flex-col overflow-x-hidden lg:overflow-x-hidden bg-neutral-900 p-4 text-gray-300 lg:p-64">
			<MetaTags title="Charalampos Fanoulis" description="student, dreamer, maker. currently on hiatus" />
			<h1 className="text-4xl font-heading tracking-wider self-start mb-6">On hiatus</h1>
			<p className="mb-4">
				<span className="font-semibold text-lg text-justify">Hello!</span> I&apos;m Charalampos - a 17 y/o student from{' '}
				<b>Thessaloniki, GR</b>. Having to focus solely on my education this (very last!) year, I&apos;m taking a break off developing &amp;
				maintaining my projects such as{' '}
				<a className="font-medium underline" href="https://hugmyalbum.app">
					Hug My Album
				</a>{' '}
				or{' '}
				<a className="font-medium underline" href="https://www.npmjs.com/package/airtable-plusplus">
					Airtable++
				</a>{' '}
				during the 2022-2023 school year. Most of my software is open-source, so they are freely available to use and tinker with; however, no
				support will be provided. If you need to contact me, please send me an{' '}
				<a className="font-medium underline" href="email.txt">
					e-mail
				</a>
				. I won&apos;t be (actively) monitoring Twitter, F Telegram, Signal or other social media accounts while on hiatus.
				<span>I might be active on the <a rel="me" href="https://ieji.de/@charalampos">Fediverse</a> though</span>
			</p>
			<footer className="self-start">
				See you in 2023!
				<br />
				<span className="text-xs">(hopefully, as a university student that time around)</span>
				<br />
				<span className="font-heading">~ charalampos</span>
			</footer>
		</main>
	);
};

export default HiatusPage;
