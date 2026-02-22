interface LanguageBarProps {
  name:    string;
  percent: number;
  delay?:  string;
}

export default function LanguageBar({ name, percent, delay = '0s' }: LanguageBarProps) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="font-mono text-[11px] text-muted w-20">{name}</span>

      <div className="flex-1 h-1 bg-[#1a1a1a] rounded-sm overflow-hidden">
        <div
          className="bar-fill rounded-sm"
          style={{ width: `${percent}%`, animationDelay: delay }}
        />
      </div>

      <span className="font-mono text-[10px] text-[#333] w-8 text-right">
        {percent}%
      </span>
    </div>
  );
}