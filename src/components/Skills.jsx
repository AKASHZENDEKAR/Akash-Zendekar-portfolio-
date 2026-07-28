import { motion } from 'framer-motion';
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCpu,
  FiTool,
} from 'react-icons/fi';
import { skills } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

const categoryIcons = {
  Programming: FiCode,
  Frontend: FiLayout,
  Backend: FiServer,
  Database: FiDatabase,
  'AI & ML': FiCpu,
  Tools: FiTool,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section id="skills" className="section-container py-24 sm:py-28">
      <SectionHeading eyebrow="Skills" title="What I work with" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {Object.entries(skills).map(([category, list]) => {
          const Icon = categoryIcons[category] ?? FiCode;
          return (
            <motion.div
              key={category}
              variants={item}
              whileHover={{ y: -6 }}
              className="glass-card p-6 transition-shadow duration-300 hover:shadow-glow"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink-100">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {list.map((skill) => (
                  <span key={skill} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
