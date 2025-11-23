import type { StatCard } from "@types";

const toneToClass: Record<StatCard["tone"], string> = {
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
}: StatCard) {
  const toneClass = toneToClass[tone];

  return (
    <div className="rounded-xl2 bg-card shadow-card p-4 border border-card-edge">
      <div className="text-dim text-sm">{label}</div>
      <div className={`mt-2 text-3xl font-semibold ${toneClass}`}>
        {loading ? "…" : error ? "—" : (value ?? 0)}
      </div>
      {hint ? <div className="text-dim text-xs mt-1">{hint}</div> : null}
    </div>
  );
}
