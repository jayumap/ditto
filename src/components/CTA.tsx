import UsernameInput from './UsernameInput';

export default function CTA() {
  return (
    <section className="px-12 py-20 text-center">
      <h2
        className="font-display font-extrabold tracking-[-2px] leading-none mb-6"
        style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
      >
        your twin is
        <br />
        out there{' '}
        <span className="text-(--accent)">somewhere.</span>
      </h2>

      <p className="font-mono text-[13px] text-muted mb-10">
        takes 5 seconds. no login. just paste and go.
      </p>

      <div className="flex justify-center">
        <UsernameInput maxWidth="480px" />
      </div>
    </section>
  );
}