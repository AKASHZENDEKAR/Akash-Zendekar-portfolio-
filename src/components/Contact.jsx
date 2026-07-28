import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { personalInfo, contactFormEndpoint } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

const contactDetails = [
  { Icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { Icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  { Icon: FiLinkedin, label: 'LinkedIn', value: 'akash-zendekar', href: personalInfo.linkedin },
  { Icon: FiGithub, label: 'GitHub', value: 'AKASHZENDEKAR', href: personalInfo.github },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(contactFormEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Form submission failed');

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-container py-24 sm:py-28">
      <SectionHeading eyebrow="Contact" title="Let's build something" />

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-ink-300">
            Have an opening for a fresher role, or want to talk about a project? My inbox is open.
          </p>
          {contactDetails.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-4 transition-all duration-300 hover:border-accent-500/40 hover:shadow-glow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                <Icon size={18} />
              </span>
              <div>
                <p className="eyebrow">{label}</p>
                <p className="text-ink-100">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-card space-y-4 p-6"
        >
          <div>
            <label htmlFor="name" className="eyebrow mb-2 block">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-ink-100
                placeholder:text-ink-700 outline-none transition-colors focus:border-accent-500/60"
            />
          </div>
          <div>
            <label htmlFor="email" className="eyebrow mb-2 block">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-ink-100
                placeholder:text-ink-700 outline-none transition-colors focus:border-accent-500/60"
            />
          </div>
          <div>
            <label htmlFor="message" className="eyebrow mb-2 block">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role or project..."
              className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-ink-100
                placeholder:text-ink-700 outline-none transition-colors focus:border-accent-500/60"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sent' && (
              <>
                Sent <FiCheck />
              </>
            )}
            {status === 'error' && (
              <>
                Couldn't send — try again <FiAlertCircle />
              </>
            )}
            {(status === 'idle' || status === 'sending') && (
              <>
                {status === 'sending' ? 'Sending…' : 'Send Message'} <FiSend />
              </>
            )}
          </button>

          {status === 'error' && (
            <p className="text-center text-xs text-ink-500">
              Message not sent. You can also reach out directly at{' '}
              <a href={`mailto:${personalInfo.email}`} className="text-accent-400 underline">
                {personalInfo.email}
              </a>
              .
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
