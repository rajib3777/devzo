import { motion } from 'framer-motion'
import { Target, Lightbulb, Users, ChevronRight, Quote } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const values = [
  { icon: Target, title: 'Result-Oriented', desc: 'Every strategy is built around your bottom line and maximum ROI.' },
  { icon: Lightbulb, title: 'Innovative Thinking', desc: 'Staying ahead of digital trends to keep your brand modern.' },
  { icon: Users, title: 'Client-Centric', desc: 'Your success is our success. Long-term growth is our goal.' },
]

export default function AboutCompany() {
  const navigate = useNavigate()

  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ left: '-10%', top: '20%', opacity: 0.35 }} />
        <div className="arc-line" style={{ top: '15%' }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 relative">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* CEO Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-glow group">
              <img
                src="/ceo.png"
                alt="Md. Iqbal Hossen Rana - CEO Rana IT Ltd"
                className="w-full h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />

              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-start gap-3">
                  <Quote className="w-7 h-7 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold leading-snug text-white italic">
                      "A team you can trust.<br />A vision you can grow with."
                    </p>
                    <p className="mt-2 text-sm text-white/60">— Md. Iqbal Hossen Rana, CEO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-accent2 rounded-2xl px-4 py-3 shadow-glow border border-white/10"
            >
              <p className="text-xs font-bold text-white uppercase tracking-widest">Founder & CEO</p>
              <p className="text-[10px] text-white/70 mt-0.5">Rana IT Ltd.</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              About Our Company
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              About<br />
              <span className="gradient-text animate-shimmer">Rana IT Ltd.</span>
            </h2>

            <p className="mt-6 text-white/70 leading-relaxed">
              We are a premier digital marketing and web development agency based in Dhaka, Bangladesh.
              With years of experience and passion for technology, we help businesses dominate the digital space.
            </p>

            <div className="mt-8 grid gap-4">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 flex items-center justify-center border border-white/5">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{v.title}</h4>
                      <p className="text-xs text-white/55 mt-1 leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Read More → navigates to /about page */}
            <motion.button
              whileHover={{ scale: 1.04, x: 4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/about')}
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium border border-white/20 bg-gradient-to-r from-accent/10 to-accent2/10 hover:from-accent/20 hover:to-accent2/20 transition-all text-white"
            >
              Read More
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
