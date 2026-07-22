import { motion as Motion } from "motion/react";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <section id="about" className="border-t border-white/10 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase text-emerald-300">About me</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            I turn project ideas into practical full-stack applications.
          </h2>
        </Motion.div>

        <Motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-lg leading-8 text-neutral-300">{ABOUT_TEXT}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-neutral-500">Focus</p>
              <p className="mt-2 font-semibold text-white">MERN applications</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-neutral-500">Strength</p>
              <p className="mt-2 font-semibold text-white">Clean responsive UI</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-neutral-500">Interest</p>
              <p className="mt-2 font-semibold text-white">AI integration</p>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
