import { motion as Motion } from "motion/react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const technologyGroups = [
  {
    title: "Languages",
    items: [{ name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" }],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: RiReactjsLine, color: "text-cyan-300" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-300" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-300" },
      { name: "Express.js", icon: SiExpress, color: "text-neutral-100" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-300" },
      { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-blue-300" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "text-orange-300" },
      { name: "GitHub", icon: SiGithub, color: "text-neutral-100" },
      { name: "AWS", icon: FaAws, color: "text-amber-300" },
    ],
  },
];

const Technologies = () => {
  return (
    <section id="skills" className="border-t border-white/10 py-20">
      <Motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase text-emerald-300">Skills</p>
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">Technology stack</h2>
      </Motion.div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {technologyGroups.map((group, groupIndex) => (
          <Motion.div
            key={group.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: groupIndex * 0.05 }}
            className="border-t border-white/10 pt-5"
          >
            <h3 className="mb-5 text-lg font-semibold text-white">{group.title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="flex min-h-24 flex-col items-center justify-center rounded-lg border border-white/10 bg-neutral-950/70 p-4 text-center transition hover:border-white/20"
                  >
                    <Icon className={`text-4xl ${item.color}`} aria-hidden="true" />
                    <span className="mt-3 text-sm font-medium text-neutral-300">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
