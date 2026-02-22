"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface UsernameInputProps {
  placeholder?: string;
  btnLabel?: string;
  maxWidth?: string;
}

export default function UsernameInput({
  placeholder = "your-username",
  btnLabel = "find my twin →",
  maxWidth = "560px",
}: UsernameInputProps) {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    const username = value.trim();
    if (!username) return;
    // Will route to /result/[username] once built
    router.push(`/result/${username}`);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div
      className="input-zone flex items-center gap-0 rounded-[14px] overflow-hidden border border-[#1e1e1e] transition-all duration-200"
      style={{ maxWidth, background: "var(--surface)" }}
    >
      <span className="font-mono text-[13px] text-muted pl-5 whitespace-nowrap">
        github.com/
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
        placeholder={placeholder}
        className="
          flex-1 bg-transparent border-none outline-none
          px-4 py-4.5
          font-mono text-[14px] text-(--text)
          placeholder:text-[#333]
        "
      />

      <button
        onClick={handleSubmit}
        data-interactive
        className="
          m-1.5 px-6 py-3
          rounded-[10px]
          font-display text-[13px] font-bold
          text-[#080808] bg-(--accent)
          border-none
          transition-all duration-150
          hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(184,255,87,0.3)]
          active:scale-[0.98]
          whitespace-nowrap
        "
      >
        {btnLabel}
      </button>
    </div>
  );
}
