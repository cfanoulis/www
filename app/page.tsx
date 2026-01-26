import localFont from 'next/font/local';

const headingFont = localFont({
	src: '../public/fonts/ArsenicaDemibold.ttf',
	weight: '500'
});

const arsenicaFont = localFont({
	src: '../public/fonts/ArsenicaRegular.ttf',
	weight: '300'
});

const readexPro = localFont({
	src: '../public/fonts/ReadexPro.ttf'
});

export default function Home() {
	return (
		<main className="absolute flex items-center justify-center h-screen w-screen flex-col lg:overflow-y-hidden lg:overflow-x-hidden bg-neutral-900 p-4 text-gray-300 lg:p-64">
			<h1 className={`text-4xl font-heading tracking-wider self-start mb-6 ${headingFont.className}`}>Caution - still in progress.</h1>
			<p className={`mb-4 ${readexPro.className}`}>
				<span className="font-semibold text-lg text-justify">Hey!</span> I&apos;m Charalampos - a 20 y/o university student from{' '}
				<b>Thessaloniki, GR</b>, studying <b>Electrical & Computer engineering</b> at the{' '}
				<a href="https://www.uowm.gr">University of Western Macedonia</a>. In my spare time, I work with volunteers at ESN Greece, ARSIS
				Kozani & local self-organized teams to create the opportunities we didn&apos;t find waiting for us.
			</p>
			<footer className="self-start">
				This website has not been updated for a while. We&apos;ll be back soon!
				<br />
				Yours,
				<br />
				<span className={arsenicaFont.className}>~ charalampos</span>
			</footer>
		</main>
	);
}
