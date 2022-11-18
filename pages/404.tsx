import Head from "next/head.js";
import Link from "next/link.js";

const Fourohfour = () => (
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
    </Head>{" "}
    <main className="absolute flex min-h-screen w-screen flex-col bg-neutral-900 p-4 text-gray-300 lg:p-16">
      <h1 className="font-heading text-4xl font-medium md:text-6xl">
        Error Four-Oh-Four:
        <br />
        Not the page you&apos;re looking for
      </h1>
      <p className="pt-4 lg:pt-14">
        You&apos;ve landed on a page that doesn&apos;t exist. Let&apos;s take
        you back to the{" "}
        <Link href="/">
          <a className="underline">home page ↗</a>
        </Link>
      </p>
    </main>
  </>
);

export default Fourohfour;
