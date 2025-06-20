"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { getGlossaryEntry } from "@/data/glossary";
import { GlossaryPopover } from "./GlossaryPopover";

interface TechTermProps {
  term: string;
  children: React.ReactNode;
}

export function TechTerm({ term, children }: TechTermProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  const entry = getGlossaryEntry(term);

  const handleClick = useCallback(() => {
    if (entry) {
      setIsOpen((prev) => !prev);
    }
  }, [entry]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!entry) {
    return <span>{children}</span>;
  }

  return (
    <span ref={wrapperRef} className="relative inline-block">
      <span
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        className="cursor-help"
        style={{
          borderBottom: "1px dotted var(--border-color-light, #ccc)",
        }}
      >
        {children}
      </span>
      {isOpen && <GlossaryPopover entry={entry} onClose={handleClose} />}
    </span>
  );
}
