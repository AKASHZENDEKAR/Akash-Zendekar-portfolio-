import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, heroContent } from '../data/portfolioData';
import FloatingIcons from './ui/FloatingIcons';

const socialLinks = [
  { Icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { Icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { Icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  { Icon: SiLeetcode, href: personalInfo.leetcode, label: 'LeetCode' },
];

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* ambient glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-accent-glow/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <FloatingIcons />

      <div className="section-container relative grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-blink" />
            Available for opportunities
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-ink-100 sm:text-5xl lg:text-6xl">
            {heroContent.heading}
          </h1>

          <p className="mt-4 font-mono text-lg text-accent-400 sm:text-xl">
            {heroContent.subtitle}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-300">
            {heroContent.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button onClick={() => scrollTo('#projects')} className="btn-primary">
              View Projects <FiArrowRight />
            </button>
            <a href={personalInfo.resumeUrl} download className="btn-outline">
              Download Resume <FiDownload />
            </a>
            <button onClick={() => scrollTo('#contact')} className="btn-outline">
              Contact Me
            </button>
          </div>

          <div className="mt-10 flex gap-5">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10
                  bg-white/[0.03] text-ink-300 backdrop-blur transition-all duration-300
                  hover:-translate-y-1 hover:border-accent-500/50 hover:text-accent-400 hover:shadow-glow-sm"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 animate-float rounded-full bg-gradient-to-br from-accent-600/30 to-transparent blur-2xl" />
          <div className="glass-card relative h-full w-full overflow-hidden rounded-full p-2 shadow-glow">
            <img
              src={personalInfo.photo}
              alt="Akash Zendekar — professional profile photo"
              width="320"
              height="320"
              loading="eager"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
