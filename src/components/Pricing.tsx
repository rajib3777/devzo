import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import TiltCard from './TiltCard'

type Plan = {
  name: string
  priceMonthly: number
  perks: string[]
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    priceMonthly: 29,
    perks: ['Automate basic tasks', 'Simple data insights', 'Connects with 3 apps', 'Email support']
  },
  {
    name: 'Premium',
    priceMonthly: 79,
    perks: ['Everything in Starter Plan', 'Smarter AI insights & predictions', 'Connects with 10+ apps', 'Monthly performance reports'],
    featured: true
  },
  {
    name: 'Enterprise',
    priceMonthly: 120,
    perks: ['Everything in Premium Plan', 'Fully customized AI solutions', 'Unlimited app connections', 'Personalized AI models']
  }
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  const display = useMemo(() => {
    const discount = 0.5
    return plans.map((p) => ({
      ...p,
      price: annual ? Math.round(p.priceMonthly * 12 * discount) : p.priceMonthly,
      suffix: annual ? '/year' : '/month'
    }))
  }, [annual])

  return (
    <section id="pricing" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ right: '-20%', top: '10%', opacity: 0.6 }} />
        <div className="arc-line" style={{ top: '68%' }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-24 relative">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-semibold tracking-tight"
          >
            Flexible plans for<br />
            <span className="text-white/40">every business</span>
          </motion.h2>
          <p className="mt-5 text-white/65 max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              data-interactive="true"
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-xs transition-colors ${!annual ? 'bg-accent text-white' : 'text-white/70 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              data-interactive="true"
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-xs transition-colors ${annual ? 'bg-accent text-white' : 'text-white/70 hover:text-white'}`}
            >
              Annually
            </button>
            <span className="ml-1 rounded-full border border-white/15 bg-bg/60 px-2 py-1 text-[10px] text-white/80">
              50%
            </span>
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-7 items-end">
          {display.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={idx === 0 ? 'lg:translate-y-6 lg:-rotate-6' : idx === 2 ? 'lg:translate-y-6 lg:rotate-6' : ''}
            >
              <TiltCard
                className={`rounded-3xl border border-white/10 p-7 shadow-soft ${
                  p.featured ? 'bg-gradient-to-b from-white/10 to-white/5' : 'bg-card'
                }`}
                maxRotate={10}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/70 rounded-full border border-white/10 px-3 py-1">
                    {p.name}
                  </span>
                  {p.featured ? (
                    <span className="text-xs font-medium rounded-full bg-gradient-to-r from-accent to-accent2 px-3 py-1">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-6">
                  <span className="text-5xl font-semibold tracking-tight">${p.price}</span>
                  <span className="text-white/60 text-sm ml-1">{p.suffix}</span>
                </div>

                <motion.a
                  href="#contact"
                  data-interactive="true"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium border ${
                    p.featured ? 'border-white/10 bg-gradient-to-r from-accent to-accent2 shadow-glow' : 'border-white/20 bg-white/5 hover:bg-white/8'
                  }`}
                >
                  Choose Plan
                </motion.a>

                <ul className="mt-7 space-y-3">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm text-white/75">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 border border-white/10">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
