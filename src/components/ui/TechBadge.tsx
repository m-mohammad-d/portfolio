
export const TechBadge = ({ label }: { label: string }) => (
  <span className="px-3 py-1 text-xs font-medium tracking-wide text-primary bg-primary/10 border border-primary/20 rounded-full shadow-sm hover:bg-primary/20 transition-colors">
    {label}
  </span>
);
