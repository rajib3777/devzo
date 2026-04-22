import TiltCard from './TiltCard'

const stats = [
  { label: 'Happy Clients', value: '659+', desc: 'Businesses that scaled using our marketing expertise.' },
  { label: 'Ads ROI', value: '110%', desc: 'Average return on investment for our ad campaigns.' },
  { label: 'Completed Projects', value: '403+', desc: 'Websites and branding projects successfully delivered.' }
]

export default function Stats() {
  return (
    <section id="partners" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">Our Partners & Impact</h2>
        </div>
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
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
            className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium border border-white/10 bg-gradient-to-r from-accent to-accent2 shadow-glow hover:scale-105 transition-transform"
          >
            Give Offer
          </button>
        </div>
      </div>
      <div className="arc-line" style={{ top: '100%' }} />
    </section>
  )
}
