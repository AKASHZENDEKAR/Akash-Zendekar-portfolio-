import { FiCode, FiCpu, FiDatabase, FiTerminal } from 'react-icons/fi';

const items = [
  { Icon: FiCode, className: 'top-[12%] left-[8%] animate-float-slow', size: 28 },
  { Icon: FiCpu, className: 'top-[65%] left-[6%] animate-float', size: 24 },
  { Icon: FiDatabase, className: 'top-[20%] right-[10%] animate-float', size: 26 },
  { Icon: FiTerminal, className: 'top-[70%] right-[8%] animate-float-slow', size: 22 },
];

const FloatingIcons = () => {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      {items.map(({ Icon, className, size }, i) => (
        <div key={i} className={`absolute text-accent-500/20 ${className}`}>
          <Icon size={size} />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
