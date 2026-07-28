import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, align = 'left' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <span className="eyebrow">{`<${eyebrow}/>`}</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-ink-100">{title}</h2>
      <div
        className={`mt-4 h-px w-16 bg-gradient-to-r from-accent-500 to-transparent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
};

export default SectionHeading;
