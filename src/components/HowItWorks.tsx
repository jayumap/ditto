import SectionLabel from './SectionLabel';

const STEPS = [
  {
    num:   '01 / 03',
    title: 'Drop your username',
    desc:  'just your github username. no OAuth, no login, no permissions. we read what\'s already public.',
    icon:  '⌨',
  },
  {
    num:   '02 / 03',
    title: 'We analyze your patterns',
    desc:  'languages, commit frequency, repo style, star count, abandoned projects. the full picture of how you actually code.',
    icon:  '◎',
  },
  {
    num:   '03 / 03',
    title: 'Meet your twin',
    desc:  'a real public profile that codes like you. plus your dev personality type, roast card, and shareable result.',
    icon:  '≡',
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="px-12 py-30">
      <SectionLabel>how it works</SectionLabel>

      <h2
        className="font-display font-extrabold tracking-[-1.5px] leading-none mb-16"
        style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
      >
        three steps.
        <br />
        <span className="text-muted">zero fluff.</span>
      </h2>

      <div className="grid grid-cols-3 gap-0.5">
        {STEPS.map((step) => (
          <div
            key={step.num}
            data-interactive
            className="step-card relative bg-(--surface) p-10 overflow-hidden transition-colors duration-200 hover:bg-[#141414]"
          >
            <p className="font-mono text-[11px] text-(--accent) tracking-widest mb-6 opacity-70">
              {step.num}
            </p>
            <h3 className="font-display font-bold text-[20px] tracking-[-0.5px] mb-3">
              {step.title}
            </h3>
            <p className="font-mono text-[12px] text-muted leading-[1.8]">
              {step.desc}
            </p>
            <span className="absolute bottom-8 right-8 text-[40px] opacity-[0.06] pointer-events-none">
              {step.icon}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}