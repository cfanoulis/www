import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>char;</title>
        <meta property="og:title" content="Charalampos Fanoulis" />
        <meta property="twitter:title" content="Charalampos Fanoulis" />
        <meta
          name="description"
          content="student, dreamer, maker. currently on hiatus"
        />
        <meta
          name="og:description"
          content="student, dreamer, maker. currently on hiatus"
        />
        <meta
          name="twitter:description"
          content="student, dreamer, maker. currently on hiatus"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <main className="absolute flex items-center justify-center h-screen w-screen flex-col lg:overflow-y-hidden lg:overflow-x-hidden bg-neutral-900 p-4 text-gray-300 lg:p-64">
        <h1 className="text-4xl font-heading tracking-wider self-start mb-6">
          On hiatus
        </h1>
        <p className="mb-4">
          <span className="font-semibold text-lg text-justify">Hello!</span>{" "}
          I&apos;m Charalampos - a 17 y/o student from <b>Thessaloniki, GR</b>.
          Having to focus solely on my education this (very last!) year,
          I&apos;m taking a break off developing &amp; maintaining my projects
          such as{" "}
          <a className="font-medium underline" href="https://hugmyalbum.app">
            Hug My Album
          </a>{" "}
          or{" "}
          <a
            className="font-medium underline"
            href="https://www.npmjs.com/package/airtable-plusplus"
          >
            Airtable++
          </a>{" "}
          during the 2022-2023 school year. Most of my software is open-source,
          so they are freely available to use and tinker with; however, no
          support will be provided. If you need to contact me, please send me an{" "}
          <a className="font-medium underline" href="email.txt">
            e-mail
          </a>
          . I won&apos;t be (actively) monitoring other social media accounts
          while on hiatus.{" "}
          <span className="text-xs">
            I might be active on the{" "}
            <a
              rel="me"
              href="https://ieji.de/@charalampos"
              className="underline"
            >
              Fediverse
            </a>{" "}
            though
          </span>
        </p>
        <footer className="self-start">
          See you in 2023!
          <br />
          <span className="text-xs">
            (hopefully, as a university student that time around)
          </span>
          <br />
          <span className="font-heading">~ charalampos</span>
        </footer>
      </main>
    </>
  );
}
