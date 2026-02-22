import UsernameInput from './UsernameInput';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-12 overflow-hidden">

      {/* Grid background */}
      <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />

      {/* Green glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184,255,87,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">

        {/* Tag */}
        <div
          className="
            inline-flex items-center gap-2
            font-mono text-[11px] tracking-widest uppercase
            text-(--accent)
            px-3.5 py-1.5 mb-8
            rounded-full border border-[rgba(184,255,87,0.25)]
            bg-[rgba(184,255,87,0.05)]
          "
          style={{ animationDelay: '0.1s', animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both' }}
        >
          <span
            className="accent-dot inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--accent)' }}
          />
          github profile analysis
        </div>

        {/* Title */}
        <h1
          className="font-display font-extrabold leading-[0.95] tracking-[-3px] mb-8"
          style={{
            fontSize: 'clamp(56px, 8vw, 112px)',
            animation: 'fade-up 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both',
          }}
        >
          who are
          <br />
          <span className="text-muted">you</span>
          {' '}
          <span className="text-accent accent-underline">really?</span>
        </h1>

        {/* Sub */}
        <p
          className="font-mono text-[14px] text-muted leading-[1.7] max-w-120 mb-12"
          style={{ animation: 'fade-up 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both' }}
        >
          paste your github profile and find your developer twin —
          the stranger on the internet who codes exactly like you.
        </p>

        {/* Input */}
        <div style={{ animation: 'fade-up 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both' }}>
          <UsernameInput />
        </div>

        {/* Meta */}
        <div
          className="flex gap-6 mt-5"
          style={{ animation: 'fade-up 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both' }}
        >
          {['no login needed', 'free forever', 'takes ~5 seconds'].map((item) => (
            <span
              key={item}
              className="font-mono text-[11px] text-[#333] flex items-center gap-1.5"
            >
              <span className="text-(--accent)">—</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div
          className="scroll-line w-px"
          style={{
            height: '48px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }}
        />
        <span className="font-mono text-[10px] text-[#333] tracking-widest uppercase">
          scroll
        </span>
      </div>
    </section>
  );
}