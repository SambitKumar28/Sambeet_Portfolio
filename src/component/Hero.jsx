import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { motion as Motion } from "motion/react";
import { CONTACT, HERO_CONTENT } from "../constants";
import profilePic from "../assets/SambitchaudhuryProfile.jpg";

const fadeUp = (delay = 0) => ({
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, delay },
  },
});

const Hero = () => {
  return (
    <section id="home" className="grid min-h-[calc(100vh-73px)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
      <div className="max-w-3xl">
        <Motion.p
          variants={fadeUp()}
          initial="hidden"
          animate="visible"
          className="mb-5 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-200"
        >
          Full-stack developer 
        </Motion.p>

        <Motion.h1
          variants={fadeUp(0.12)}
          initial="hidden"
          animate="visible"
          className="text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl"
        >
          Sambit Kumar Chaudhury
        </Motion.h1>

        <Motion.p
          variants={fadeUp(0.24)}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300"
        >
          {HERO_CONTENT}
        </Motion.p>

        <Motion.div
          variants={fadeUp(0.36)}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200"
          >
            View projects <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
          >
            <FiMail aria-hidden="true" /> Contact me
          </a>
        </Motion.div>

        {/* <Motion.dl
          variants={fadeUp(0.48)}
          initial="hidden"
          animate="visible"
          className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-y border-white/10 py-5 text-center sm:text-left"
        >
          <div>
            <dt className="text-2xl font-semibold text-white">5+</dt>
            <dd className="mt-1 text-xs uppercase text-neutral-500">Projects</dd>
          </div>
          <div>
            <dt className="text-2xl font-semibold text-white">MCA</dt>
            <dd className="mt-1 text-xs uppercase text-neutral-500">Graduate</dd>
          </div>
          <div>
            <dt className="text-2xl font-semibold text-white">2025</dt>
            <dd className="mt-1 text-xs uppercase text-neutral-500">Internship</dd>
          </div>
        </Motion.dl> */}
      </div>

      <Motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-md lg:max-w-lg"
      >
        <div className="absolute -inset-1 rounded-lg bg-[linear-gradient(135deg,rgba(52,211,153,0.55),rgba(56,189,248,0.35),rgba(251,191,36,0.28))] opacity-80 blur" />
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-neutral-950 shadow-2xl shadow-black/40">
          <img
            src={profilePic}
            alt="Sambit Kumar Chaudhury"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <p className="mt-4 text-center text-sm text-neutral-400">
          React, Node.js, Express.js, MongoDB, and responsive product UI.
        </p>
      </Motion.div>
    </section>
  );
};

export default Hero;
