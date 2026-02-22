import SectionLabel from './SectionLabel';

interface PersonalityType {
  emoji: string;
  name:  string;
  desc:  string;
}

const TYPES: PersonalityType[] = [
  {
    emoji: '🔥',
    name:  'The Chronic Starter',
    desc:  '47 repos. 3 with more than 2 commits. living in the dopamine of initialization.',
  },
  {
    emoji: '🌑',
    name:  'The Silent Contributor',
    desc:  '1 public repo. 847 contributions. all the work, none of the spotlight. we see you.',
  },
  {
    emoji: '📖',
    name:  'The README Perfectionist',
    desc:  'the readme has a logo, badges, and a table of contents. the app has one file.',
  },
  {
    emoji: '⚡',
    name:  'The Late Night Pusher',
    desc:  '82% of commits between 11pm and 3am. no morning person. just vibes and caffeine.',
  },
];

function TypeCard({ emoji, name, desc }: PersonalityType) {
  return (
    <div
      data-interactive
      className="p-8 bg-(--surface) transition-colors duration-200 hover:bg-[#141414]"
    >
      <div className="text-[32px] mb-4">{emoji}</div>
      <h3 className="font-display font-bold text-[15px] tracking-tight mb-2">{name}</h3>
      <p className="font-mono text-[11px] text-muted leading-[1.7]">{desc}</p>
    </div>
  );
}

export default function PersonalityTypes() {
  return (
    <section className="px-12 py-30">
      <SectionLabel>personality archetypes</SectionLabel>

      <h2
        className="font-display font-extrabold tracking-[-1.5px] leading-none mb-12"
        style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
      >
        which one
        <br />
        <span className="text-muted">are you?</span>
      </h2>

      <div className="grid grid-cols-4 gap-0.5">
        {TYPES.map((type) => (
          <TypeCard key={type.name} {...type} />
        ))}
      </div>
    </section>
  );
}