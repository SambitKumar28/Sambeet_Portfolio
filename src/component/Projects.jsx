import { FiExternalLink } from "react-icons/fi";
import { motion as Motion } from "motion/react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="border-t border-white/10 py-20">
      <Motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
      >
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-amber-300">Selected work</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Projects with real product flows</h2>
        </div>
        <p className="max-w-md leading-7 text-neutral-400">
          Full-stack apps focused on authentication, live updates, CRUD workflows, API integration, and responsive interfaces.
        </p>
      </Motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Motion.article
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 28 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:border-emerald-300/35 hover:bg-white/[0.055]"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="block overflow-hidden border-b border-white/10 bg-neutral-950"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </a>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-7 text-white">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                  className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:border-emerald-300/60 hover:text-emerald-200"
                >
                  <FiExternalLink aria-hidden="true" />
                </a>
              </div>

              <p className="mt-4 leading-7 text-neutral-400">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-neutral-950 px-3 py-1 text-sm font-medium text-amber-100 ring-1 ring-amber-300/15"
                  >
                    {tech}
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

export default Projects;
