import SectionLabel from './SectionLabel';
import LanguageBar   from './LanguageBar';

const LANGUAGES = [
  { name: 'TypeScript', percent: 72, delay: '0.1s' },
  { name: 'Python',     percent: 18, delay: '0.2s' },
  { name: 'CSS',        percent: 10, delay: '0.3s' },
] as const;

const TAGS = [
  'The Chronic Starter',
  '2am commit energy',
  'TypeScript purist',
  'README procrastinator',
] as const;

export default function ResultPreview() {
  return (
    <section className="px-12 pb-30">
      {/* Header */}
      <div className="text-center mb-12">
        <SectionLabel className="justify-center flex">example output</SectionLabel>
        <h2
          className="font-display font-extrabold tracking-[-1.5px] leading-none"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          this is what
          <br />
          <span className="text-muted">you'll get</span>
        </h2>
      </div>

      {/* Card */}
      <div
        className="relative rounded-[20px] border border-[#1e1e1e] p-10 max-w-2xl mx-auto overflow-hidden"
        style={{ background: 'var(--surface)' }}
      >
        {/* Glow */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(184,255,87,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Card header */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1e1e1e]">
          <div className="w-13 h-13 rounded-xl flex items-center justify-center text-2xl shrink-0"
            style={{ background: 'linear-gradient(135deg,#1e3a1e,#2d5a1b)' }}>
            🧑‍💻
          </div>
          <div>
            <h3 className="font-display font-bold text-[18px] tracking-tight">
              @yourusername
            </h3>
            <p className="font-mono text-[11px] text-muted mt-0.5">
              analyzed just now • 47 repos
            </p>
          </div>
          <div
            className="ml-auto font-mono text-[11px] text-(--accent) px-3.5 py-1.5 rounded-full border border-[rgba(184,255,87,0.2)] whitespace-nowrap"
            style={{ background: 'var(--accent-dim)' }}
          >
            93% match found
          </div>
        </div>

        {/* Twin */}
        <div className="mb-7">
          <SectionLabel className="mb-3">your ditto</SectionLabel>
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg shrink-0"
              style={{ background: 'linear-gradient(135deg,#1a1a3e,#2a2a6e)' }}
            >
              👾
            </div>
            <div className="flex-1">
              <h4 className="font-display font-semibold text-[15px] tracking-tight">
                @devkarlsson · Sweden 🇸🇪
              </h4>
              <p className="font-mono text-[11px] text-muted mt-0.5">
                52 repos · TypeScript obsessive · last active 2 days ago
              </p>
            </div>
            <span
              className="font-display font-extrabold text-[28px] tracking-[-1px] text-(--accent)"
            >
              93%
            </span>
          </div>
        </div>

        {/* Language bars */}
        <div className="mb-7">
          <SectionLabel className="mb-3">language overlap</SectionLabel>
          {LANGUAGES.map((lang) => (
            <LanguageBar key={lang.name} {...lang} />
          ))}
        </div>

        {/* Roast */}
        <div
          className="font-mono text-[12px] text-[#888] leading-[1.9] p-5 rounded-xl border-l-2 border-(--accent)"
          style={{ background: '#0d0d0d' }}
        >
          <span className="text-(--text)">both of you</span> discovered TypeScript in 2022 and never looked back. you share an affinity for starting projects on friday nights and abandoning them by sunday.{' '}
          <span className="text-(--text)">@devkarlsson</span> has 11 repos named some variation of "portfolio" — you have 8. kindred spirits, truly. you're both in your{' '}
          <span className="text-(--text)">rewrite everything in Next.js</span> era.
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mt-5">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-muted px-3 py-1.5 rounded-full border border-[#1e1e1e] tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}