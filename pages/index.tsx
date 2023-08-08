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
				<h1 className="text-4xl font-heading tracking-wider self-start mb-6">Holy sh*t - we made it!</h1>
				<p className="mb-4">
					<span className="font-semibold text-lg text-justify">Well, hello!</span> I&apos;m Charalampos - an 18 y/o university student from{' '}
					<b>Thessaloniki, GR</b>, studying <b>Electrical & Computer engineering</b> at the{' '}
					<a href="https://www.uowm.gr">University of West Macedonia</a>. The 2022-2023 school year was a ride and a half - and I owe this
					incredible outcome to some close people of mine: <b>Giannis</b>, <b>Martha</b> (my parents), <b>George</b> (my brother),{' '}
					<b>Kostas</b>, <b>Arber</b>, <b>Anna</b>, <b>Ilias</b> (my friends), <b>Maria</b>, <b>Vasilis</b>, <b>Dimitris</b> &{' '}
					<b>Marinos</b> (my teachers)
				</p>
				<footer className="self-start">
					Hold tight as I update this website - for the time being, this shall stand as a tribute to their efforts
					<br />
					Yours,
					<br />
					<span className="font-heading">~ charalampos</span>
				</footer>
			</main>
		</>
	);
}
