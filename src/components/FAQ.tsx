import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    q: 'What Services Does Rana IT Ltd Provide?',
    a: 'We provide professional Facebook marketing, SEO, modern web development, and graphic design to help businesses grow their online presence and sales.'
  },
  { 
    q: 'How Can Digital Marketing Benefit My Business?', 
    a: 'Digital marketing allows you to target the right audience with precision, significantly increasing brand awareness, generating high-quality leads, and boosting your ROI.' 
  },
  { 
    q: 'Do You Offer Custom Marketing Strategies?', 
    a: 'Yes, every business is unique. We prepare advanced business strategy plans tailored specifically to your industry, goals, and target audience.' 
  },
  { 
    q: 'How Soon Can We Expect Results?', 
    a: 'While it depends on the specific service, our Facebook ad campaigns and optimized marketing funnels often start showing noticeable traction and leads within the first few weeks.' 
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="faq" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ left: '-25%', top: '20%', opacity: 0.45 }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-24 relative">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-5 text-white/65 max-w-xl mx-auto">Find answers to the most common questions about our agency.</p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={`rounded-2xl border border-white/10 overflow-hidden ${
                  isOpen ? 'bg-gradient-to-r from-accent/70 to-accent2/70' : 'bg-white/5'
                }`}
              >
                <button
                  data-interactive="true"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white/90" />
                    <span className="font-medium">{f.q}</span>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/10">
                    {isOpen ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      <div className="px-6 pb-6 text-sm text-white/90 leading-relaxed max-w-3xl">
                        {f.a}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight">Ready to get started?</h3>
          <p className="mt-2 text-white/60">We are here to help your business grow</p>
          <motion.button
            onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
            data-interactive="true"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium border border-white/10 bg-gradient-to-r from-accent to-accent2 shadow-glow"
          >
            Give Offer
          </motion.button>
        </div>
      </div>
    </section>
  )
}
