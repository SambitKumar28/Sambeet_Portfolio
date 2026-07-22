import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { motion as Motion } from "motion/react";
import { CONTACT } from "../constants";

const Contact = () => {
  const links = [
    {
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      icon: FiMail,
    },
    {
      label: "LinkedIn",
      value: "Sambit Kumar Chaudhury",
      href: CONTACT.linkedin,
      icon: FiLinkedin,
    },
    {
      label: "GitHub",
      value: "SambitKumar28",
      href: CONTACT.github,
      icon: FiGithub,
    },
  ];

  return (
    <section id="contact" className="border-t border-white/10 py-20">
      <Motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        className="py-4"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-cyan-300">Contact</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Let&apos;s build something useful.</h2>
            <p className="mt-5 max-w-xl leading-7 text-neutral-300">
              I am open to internships, junior full-stack roles, and collaboration on React or MERN projects.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-neutral-400">
              <FiMapPin aria-hidden="true" /> {CONTACT.address}
            </p>
          </div>

          <div className="grid gap-3">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-neutral-950/70 p-4 transition hover:border-emerald-300/45 hover:bg-neutral-950"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-200">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-neutral-500">{link.label}</span>
                      <span className="block truncate font-medium text-white">{link.value}</span>
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default Contact;
