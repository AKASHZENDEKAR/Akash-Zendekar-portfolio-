import { motion } from 'framer-motion';
import { aboutMe, personalInfo } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

const facts = [
  { label: 'Location', value: personalInfo.location },
  { label: 'Focus', value: 'Backend, AI/ML & Full Stack' },
  { label: 'Status', value: 'Open to fresher roles' },
];

const About = () => {
  return (
    <section id="about" className="section-container py-24 sm:py-28">
      <SectionHeading eyebrow="About" title="Who I am" />

      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-base leading-relaxed text-ink-300 sm:text-lg"
        >
          {aboutMe}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card space-y-5 p-6"
        >
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <span className="eyebrow">{fact.label}</span>
              <span className="text-ink-100">{fact.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
