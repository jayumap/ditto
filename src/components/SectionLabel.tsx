interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[11px] text-(--accent) tracking-[0.15em] uppercase mb-4 ${className}`}
    >
      {children}
    </p>
  );
}