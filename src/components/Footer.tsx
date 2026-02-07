import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ right: '-30%', top: '-50%', opacity: 0.5 }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-semibold tracking-tight">devzo<span className="text-accent">.</span></div>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Transforming ideas into AI‑Powered success.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {['in', 'x', 'ig', 'yt'].map((s) => (
                <a
                  key={s}
                  href="#"
                  data-interactive="true"
                  className="h-9 w-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors inline-flex items-center justify-center text-xs text-white/80"
                >
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
            <p className="mt-10 text-xs text-white/40">© {new Date().getFullYear()} devzo. All Rights Reserved</p>
          </div>

          <div>
            <p className="text-sm font-semibold">Quick Link</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {[
                ['Home', '#home'],
                ['Features', '#features'],
                ['Pricing', '#pricing'],
                ['Testimonials', '#testimonials'],
                ['FAQ', '#faq']
              ].map(([t, h]) => (
                <li key={h}>
                  <a data-interactive="true" href={h} className="hover:text-white transition-colors">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Help</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {['Help Center', 'Community', 'Terms of Use', 'Privacy Policy'].map((t) => (
                <li key={t}>
                  <a data-interactive="true" href="#" className="hover:text-white transition-colors">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-4 space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-full border border-white/10 bg-white/5 inline-flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white/80" />
                </span>
                <span>+1 220 5119 223</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-full border border-white/10 bg-white/5 inline-flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white/80" />
                </span>
                <span>hello@devzo.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-9 w-9 rounded-full border border-white/10 bg-white/5 inline-flex items-center justify-center mt-0.5">
                  <MapPin className="h-4 w-4 text-white/80" />
                </span>
                <span>192 Westlime St. Saint Louis, Georgia 84231</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
