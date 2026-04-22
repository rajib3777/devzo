import { motion } from 'framer-motion'
import { ArrowLeft, Quote, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const employees = [
  { name: 'Md. Iqbal Hossen Rana', role: 'Founder & CEO', dept: 'Leadership', initials: 'IR', color: 'from-pink-500 to-purple-700' },
  { name: 'Tanvir Ahmed', role: 'Head of Marketing', dept: 'Marketing', initials: 'TA', color: 'from-pink-500 to-rose-600' },
  { name: 'Nusrat Jahan', role: 'Creative Director', dept: 'Design', initials: 'NJ', color: 'from-violet-500 to-purple-700' },
  { name: 'Rakib Hasan', role: 'Lead Developer', dept: 'Tech', initials: 'RH', color: 'from-cyan-400 to-blue-600' },
  { name: 'Sadia Islam', role: 'Social Media Manager', dept: 'Marketing', initials: 'SI', color: 'from-emerald-400 to-teal-600' },
  { name: 'Farhan Kabir', role: 'Video Editor', dept: 'Content', initials: 'FK', color: 'from-orange-400 to-amber-600' },
  { name: 'Mim Akter', role: 'Graphic Designer', dept: 'Design', initials: 'MA', color: 'from-yellow-400 to-orange-500' },
  { name: 'Zahid Hossain', role: 'Ad Campaign Specialist', dept: 'Marketing', initials: 'ZH', color: 'from-indigo-400 to-blue-700' },
]

const expectations = [
  'Clear communication at every step of the project',
  'On-time delivery without compromising quality',
  'A website that feels super fast from top to bottom',
  'Dedicated support and transparent reporting',
  'Data-driven strategies that maximize your ROI',
  'Long-term partnership focused on your growth',
]

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen bg-bg text-text overflow-x-hidden">
      <div className="noise" />

      {/* ─── BACK BUTTON ─── */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 rounded-full border border-white/15 bg-bg/80 backdrop-blur-md px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all shadow-soft"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </motion.button>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* bg glows */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent2/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

        <div className="mx-auto max-w-6xl px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ─── LEFT: Text ─── */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs text-accent mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                About Rana IT Ltd.
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight"
              >
                Md. Iqbal Hossen<br />
                <span className="gradient-text animate-shimmer">Rana</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-3 text-accent text-lg font-medium"
              >
                Founder & CEO, Rana IT Ltd.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 relative border-l-2 border-accent pl-6"
              >
                <Quote className="absolute -left-4 -top-2 w-7 h-7 text-accent" />
                <p className="text-xl text-white italic leading-relaxed">
                  "A team you can trust.<br />A vision you can grow with."
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-8 text-white/70 leading-relaxed text-base"
              >
                Rana IT was born from a dream — where technology is not just for work, but to take people's businesses forward faster, beautifully, and powerfully. We believe that with the right plan, a strong team, and honesty, any digital challenge can be turned into an opportunity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-8 flex items-center gap-4"
              >
                <button
                  onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
                  className="rounded-full px-7 py-3 text-sm font-semibold bg-gradient-to-r from-accent to-accent2 shadow-glow hover:scale-105 transition-transform"
                >
                  Contact Us
                </button>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Phone className="w-4 h-4 text-accent" />
                  01815-311438
                </div>
              </motion.div>
            </div>

            {/* ─── RIGHT: CEO Photo ─── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-glow group">
                <img
                  src="/ceo.png"
                  alt="Md. Iqbal Hossen Rana - CEO Rana IT Ltd"
                  className="w-full h-[540px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              </div>

              {/* Floating name badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 left-8 rounded-2xl bg-gradient-to-r from-accent to-accent2 px-6 py-4 shadow-glow border border-white/10"
              >
                <p className="text-sm font-bold text-white">Rana IT Ltd.</p>
                <p className="text-xs text-white/70 mt-0.5">Best Digital Agency in Bangladesh</p>
              </motion.div>

              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-[3rem] border border-accent/10 -z-10" />
              <div className="absolute -inset-8 rounded-[3.5rem] border border-white/5 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CEO MESSAGE SECTION ─── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs text-accent mb-6">
                CEO's Message
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Our Vision &amp; Mission
              </h2>
              <div className="space-y-5 text-white/70 leading-relaxed">
                <p>
                  Rana IT was founded with a clear mission: to empower businesses in Bangladesh and beyond with world-class digital marketing, cutting-edge web development, and creative content — all under one roof.
                </p>
                <p>
                  We believe every business, no matter how small or large, deserves a powerful digital presence. That's why we've built a dedicated team of marketers, developers, designers, and content creators who work tirelessly to deliver results that matter.
                </p>

                <div className="my-8 rounded-2xl border border-accent/20 bg-accent/5 p-6">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-white text-lg italic font-medium leading-relaxed">
                    "Always dare to dream big. When you dream of doing something great, the world creates a path for you."
                  </p>
                  <p className="mt-4 text-sm text-white/50">— Md. Iqbal Hossen Rana, Founder & CEO</p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/70 mb-6">
                What You Can Expect
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
                Our Promise<br />
                <span className="gradient-text">to You</span>
              </h2>
              <ul className="space-y-4">
                {expectations.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-8 text-white/70 text-sm leading-relaxed">
                <span className="text-white font-semibold">Clear communication, on-time delivery,</span> and a website that feels super fast from top to bottom — that's the Rana IT guarantee.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TEAM SECTION ─── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-accent2/40 to-transparent" />
        <div className="absolute -left-20 top-20 w-96 h-96 rounded-full bg-accent2/8 blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Meet Our <span className="gradient-text animate-shimmer">Team</span>
            </h2>
            <p className="mt-4 text-white/55 max-w-lg mx-auto">
              The talented people behind every successful campaign and project at Rana IT Ltd.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {employees.map((emp, i) => (
              <motion.div
                key={emp.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative"
              >
                {/* Folded card */}
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.07]">
                  {/* Top gradient strip */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${emp.color}`} />

                  {/* Fold corner triangle */}
                  <div
                    className={`absolute top-1.5 right-0 w-10 h-10 bg-gradient-to-br ${emp.color} opacity-30`}
                    style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                  />

                  <div className="p-6">
                    {/* Avatar */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${emp.color} flex items-center justify-center text-xl font-bold text-white shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {emp.initials}
                    </div>

                    <p className="font-semibold text-sm leading-tight text-white">{emp.name}</p>
                    <p className="text-xs text-accent mt-1 font-medium">{emp.role}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] text-white/50">
                        {emp.dept}
                      </span>
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${emp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </div>

                  {/* Bottom hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${emp.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT STRIP ─── */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] bg-gradient-to-r from-accent/20 via-accent2/20 to-accent/20 border border-white/10 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold">Ready to work with us?</h3>
              <p className="text-white/60 mt-2 text-sm">Let's build something amazing together.</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 text-sm text-white/60">
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" />01815-311438</span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" />hello@ranait.com</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" />House 4, Bindu Britto Goli, Mirpur, Dhaka</span>
              </div>
            </div>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
              className="shrink-0 rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-accent to-accent2 text-white shadow-glow hover:scale-105 transition-transform"
            >
              Give Offer
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
