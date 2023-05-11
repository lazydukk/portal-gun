import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>lazydukk/portal-gun</title>
      <meta name="description" content="playing w/ nextjs 13.4" />
      <link rel="icon" href="favicon.ico" />
    </Head>
    <main className="font-sans flex flex-col items-center justify-center min-h-screen bg-slate-900">
        <h1 className="text-9xl text-indigo-600 text-center mb-4">lazydukk</h1>
        <p className="text-xl text-white text-center">portal gun for lazydukk&apos;s portfolio in the planet C137</p>
        <span className="font-roboto text-sm text-gray-400">on hold as of exams </span>
        <a href="https://github.com/lazydukk/" className="font-roboto mr-4 hover:underline md:mr-6 ">Github</a>
      </main>
      </>
  )
}

