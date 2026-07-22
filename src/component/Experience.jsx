import { motion as Motion } from "motion/react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="border-t border-white/10 py-20">
      <Motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase text-cyan-300">Experience</p>
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">Where I am building now</h2>
      </Motion.div>

      <div className="space-y-6">
        {EXPERIENCES.map((experience, index) => (
          <Motion.article
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-[180px_1fr]"
          >
            <p className="text-sm font-medium text-neutral-400">{experience.year}</p>
            <div>
              <h3 className="text-xl font-semibold text-white">
                {experience.role}
                <span className="block text-base font-medium text-cyan-200 sm:inline">
                  {" "}at {experience.company}
                </span>
              </h3>
              <p className="mt-3 leading-7 text-neutral-300">{experience.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
