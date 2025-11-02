import type { StatCardProps } from "@types";

const toneToClass: Record<StatCardProps["tone"], string> = {
  ok: "text-ok",
  due: "text-due",
  over: "text-over",
};

export default function StatCard({
  label,
  value,
  hint,
  tone,
  loading,
  error,
}: StatCardProps) {
  const toneClass = toneToClass[tone];

  return (
    <div className="rounded-xl2 bg-card shadow-card p-4 border border-card-edge">
      <div className="text-white/70 text-sm">{label}</div>
      <div className={`mt-2 text-3xl font-semibold ${toneClass}`}>
        {loading ? "…" : error ? "—" : (value ?? 0)}
      </div>
      {hint ? <div className="text-white/40 text-xs mt-1">{hint}</div> : null}
    </div>
  );
}
