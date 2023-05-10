
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
      <h1 className="text-9xl text-indigo-600 text-center mb-4">lazydukk</h1>
      <p className="text-xl text-white text-center">portal gun for lazydukk/portfolio in the planet C137</p>
      <span className="text-sm text-gray-400">on hold as of exams </span>
      <a href="https://github.com/lazydukk/portal-gun" className="mr-4 hover:underline md:mr-6 ">Github</a>

      <footer className="show fixed bottom-0 right-0 left-0 z-[1030] w-full py-4 px-6 text-white md:flex justify-between items-center text-center md:text-left">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://lazydukk.vercel.app/" className="hover:underline">lazydukk</a>. All Rights Reserved.
    </span>
</footer>
    </main>
  )
}
