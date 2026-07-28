import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { education } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

const Education = () => {
  return (
    <section id="education" className="section-container py-24 sm:py-28">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass-card flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
            <FiAward size={22} />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink-100">
              {education.degree} — {education.field}
            </h3>
            <p className="mt-1 text-ink-300">{education.institution}</p>
            <p className="mt-1 font-mono text-xs text-ink-500">Graduated {education.year}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 self-start rounded-lg border border-accent-500/25 bg-accent-500/[0.07] px-5 py-3 sm:self-center">
          <span className="eyebrow">CGPA</span>
          <span className="font-display text-2xl font-bold text-accent-400">{education.cgpa}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
