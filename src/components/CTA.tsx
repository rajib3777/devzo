import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ right: '-22%', bottom: '-30%', opacity: 0.6 }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-10 pb-24 relative">
        <div className="rounded-[32px] border border-white/10 bg-white/5 overflow-hidden shadow-soft">
          <div className="relative p-10 sm:p-14">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-tr from-accent/60 to-accent2/60 blur-2xl opacity-80" />
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-gradient-to-tr from-accent2/60 to-accent/60 blur-2xl opacity-70" />
            <div className="relative">
              <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight">Get to know us</h3>
              <p className="mt-4 text-white/65 max-w-xl">
                Rana IT Ltd helps businesses scale fast with professional digital marketing, web development, and top-tier branding services.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
                  data-interactive="true"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium border border-white/10 bg-gradient-to-r from-accent to-accent2 shadow-glow"
                >
                  Give Offer
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[32px] bg-[#F7F6F9] text-[#060606] px-8 sm:px-14 py-16 text-center shadow-soft">
          <h4 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Take your business to<br />
            the next level today
          </h4>
          <p className="mt-5 text-black/65 max-w-2xl mx-auto">
            Enhance brand awareness, automate your growth, and gain smart insights with our marketing expertise. Grow faster and stay ahead in the competitive market!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
              data-interactive="true"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium bg-gradient-to-r from-accent to-accent2 text-white shadow-glow"
            >
              Give Offer
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
