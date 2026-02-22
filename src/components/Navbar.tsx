'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-12 py-6
        transition-all duration-300
        ${scrolled
          ? 'border-b border-[#1e1e1e] bg-[rgba(8,8,8,0.85)] backdrop-blur-md'
          : 'border-b border-transparent'
        }
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 text-[22px] font-extrabold tracking-tight font-display">
        <span
          className="accent-dot inline-block w-2 h-2 rounded-full"
          style={{ background: 'var(--accent)' }}
        />
        ditto
      </div>

      {/* Right side */}
      <div className="flex items-center gap-8 font-mono text-xs tracking-widest text-muted">
        <span>find your dev twin</span>
        <span
          className="px-3 py-1.5 rounded-full border border-[#1e1e1e] text-[11px]"
        >
          beta
        </span>
      </div>
    </nav>
  );
}