import TiltCard from './TiltCard'

const stats = [
  { label: 'Boost Efficiency', value: '90%', desc: 'Increase in efficiency with our AI‑powered solutions.' },
  { label: 'Trusted By', value: '150K+', desc: 'Professionals leverage our AI to stay ahead.' },
  { label: 'Proven Impact', value: '$20M+', desc: 'In business impact, turning ideas into results.' }
]

export default function Stats() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <TiltCard
              key={s.label}
              className={`rounded-3xl border border-white/10 bg-card p-7 shadow-soft`}
              maxRotate={12}
            >
              <p className="text-xs text-white/60">{s.label}</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight">{s.value}</p>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.desc}</p>
              <div
                className="mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-accent to-accent2"
                style={{ opacity: 0.9 }}
              />
            </TiltCard>
          ))}
        </div>
      </div>
      <div className="arc-line" style={{ top: '100%' }} />
    </section>
  )
}
