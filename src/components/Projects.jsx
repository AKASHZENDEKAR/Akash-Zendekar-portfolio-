import { motion } from 'framer-motion';
import { FiGithub, FiFolder } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section id="projects" className="section-container py-24 sm:py-28">
      <SectionHeading eyebrow="Projects" title="Featured work" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.name}
            variants={item}
            whileHover={{ y: -6 }}
            className="glass-card flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-glow"
          >
            <div className="flex h-40 items-center justify-center border-b border-white/5 bg-gradient-to-br from-accent-600/10 to-base-800/40">
              <FiFolder size={40} className="text-accent-500/50" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold text-ink-100">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-6 w-fit !px-4 !py-2 text-sm"
              >
                <FiGithub size={16} /> View Code
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
