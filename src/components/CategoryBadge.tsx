import { cn } from "@/lib/utils";

const CATEGORY_BORDER_COLORS: Record<string, string> = {
  AI: "#6b7280",
  "Eng ML": "#4b5563",
  Data: "#374151",
  Models: "#1f2937",
  Social: "#9ca3af",
  API: "#d1d5db",
  "Predição": "#111827",
  Eleitoral: "#525252",
};

interface CategoryBadgeProps {
  category: string;
  size?: "sm" | "md";
}

export function CategoryBadge({ category, size = "sm" }: CategoryBadgeProps) {
  const borderColor = CATEGORY_BORDER_COLORS[category] ?? "#6b7280";

  return (
    <span
      className={cn(
        "inline-block font-mono uppercase font-light rounded-[2px]",
        "bg-[#1e1e1e0a] text-[var(--font-color,currentColor)]",
        size === "sm" && "text-[10px] px-1.5 py-0.5",
        size === "md" && "text-xs px-2 py-1"
      )}
      style={{ borderLeft: `2px solid ${borderColor}` }}
    >
      {category}
    </span>
  );
}
