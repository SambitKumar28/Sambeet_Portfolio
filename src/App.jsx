import About from "./component/About"
import Contact from "./component/Contact"
import Experience from "./component/Experience"
import Hero from "./component/Hero"
import Projects from "./component/Projects"
import Technologies from "./component/Technologies"

const App = () => {
  return(
    <div className="min-h-screen overflow-x-hidden bg-[#080a0f] text-neutral-200 antialiased selection:bg-emerald-300 selection:text-neutral-950">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(135deg,rgba(34,197,94,0.12),transparent_35%),linear-gradient(315deg,rgba(14,165,233,0.10),transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a0f]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-sm font-semibold tracking-[0.25em] text-white">
            SAMBIT
          </a>
          <div className="hidden items-center gap-6 text-sm text-neutral-300 sm:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#projects">Projects</a>
            <a className="transition hover:text-white" href="#skills">Skills</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </div>
          <a
            href="mailto:sambeet482@gmail.com"
            className="rounded-full border border-emerald-300/40 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:border-emerald-200 hover:bg-emerald-300 hover:text-neutral-950"
          >
            Hire me
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Technologies/>
        <Contact/>
      </main>

      <footer className="mx-auto max-w-6xl px-5 py-8 text-center text-sm text-neutral-500">
        Built by Sambit Kumar Chaudhury.
      </footer>
      </div>
  )
}

export default App
