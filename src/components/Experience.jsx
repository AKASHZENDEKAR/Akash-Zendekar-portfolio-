import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { internships } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="section-container py-24 sm:py-28">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="relative ml-3 space-y-12 border-l border-white/10 pl-8 sm:ml-6 sm:pl-10">
        {internships.map((role, idx) => (
          <motion.div
            key={role.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-accent-500/40 bg-base-900 text-accent-400 shadow-glow-sm sm:-left-[53px]">
              <FiBriefcase size={14} />
            </span>

            <div className="glass-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-ink-100">{role.title}</h3>
                <span className="font-mono text-xs text-ink-500">{role.period}</span>
              </div>
              <p className="mt-1 text-accent-400">{role.company}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.responsibilities.map((r) => (
                  <span key={r} className="tag-chip">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
