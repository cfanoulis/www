import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>char;</title>
				<meta property="og:title" content="Charalampos Fanoulis" />
				<meta property="twitter:title" content="Charalampos Fanoulis" />
				<meta name="description" content="student, dreamer, maker. currently on hiatus" />
				<meta name="og:description" content="student, dreamer, maker. currently on hiatus" />
				<meta name="twitter:description" content="student, dreamer, maker. currently on hiatus" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary" />
			</Head>
			<main className="absolute flex items-center justify-center h-screen w-screen flex-col lg:overflow-y-hidden lg:overflow-x-hidden bg-neutral-900 p-4 text-gray-300 lg:p-64">
				<h1 className="text-4xl font-heading tracking-wider self-start mb-6">Caution - still in progress.</h1>
				<p className="mb-4">
					<span className="font-semibold text-lg text-justify">Hey!</span> I&apos;m Charalampos - an 18 y/o university student from{' '}
					<b>Thessaloniki, GR</b>, studying <b>Electrical & Computer engineering</b> at the{' '}
					<a href="https://www.uowm.gr">University of West Macedonia</a>. 
				</p>
				<footer className="self-start">
					This website has been under development for a while. We'll be back soon!
					<br />
					Yours,
					<br />
					<span className="font-heading">~ charalampos</span>
				</footer>
			</main>
		</>
	);
}
