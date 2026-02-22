export default function Footer() {
  return (
    <footer className="px-12 py-8 border-t border-[#1e1e1e] flex items-center justify-between">
      <div className="flex items-center gap-2 font-display font-extrabold text-[16px] tracking-tight">
        <span
          className="accent-dot inline-block w-2 h-2 rounded-full"
          style={{ background: 'var(--accent)' }}
        />
        ditto
      </div>

      <p className="font-mono text-[11px] text-[#333]">
        built for devs. powered by github api.
      </p>

      <p className="font-mono text-[11px] text-[#333]">
        no data stored. ever.
      </p>
    </footer>
  );
}