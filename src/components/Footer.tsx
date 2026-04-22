import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ right: '-30%', top: '-50%', opacity: 0.5 }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 relative">
        <div className="mb-16 w-full h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-soft">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.603310037894!2d90.36643261543206!3d23.800676492906497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1200388e635%3A0xc6e4de552f50d7!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1625062402288!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-semibold tracking-tight">Rana IT Ltd<span className="text-accent">.</span></div>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Transforming businesses with Professional Digital Marketing.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {['fb', 'in', 'ig', 'yt'].map((s) => (
                <a
                  key={s}
                  href="#"
                  data-interactive="true"
                  className="h-9 w-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors inline-flex items-center justify-center text-xs text-white/80 uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
            <p className="mt-10 text-xs text-white/40">© {new Date().getFullYear()} Rana IT Ltd. All Rights Reserved</p>
          </div>

          <div>
            <p className="text-sm font-semibold">Quick Link</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {[
                ['Home', '#home'],
                ['Services', '#features'],
                ['Pricing', '#pricing'],
                ['Partners', '#partners'],
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
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {['About Us', 'Project Showcase', 'Terms of Use', 'Privacy Policy'].map((t) => (
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
                <span>01815-311438</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-full border border-white/10 bg-white/5 inline-flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white/80" />
                </span>
                <span>hello@ranait.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-9 w-9 rounded-full border border-white/10 bg-white/5 inline-flex items-center justify-center mt-0.5">
                  <MapPin className="h-4 w-4 text-white/80" />
                </span>
                <span>House 4, Bindu Britto Goli, Mirpur, Dhaka - 1216</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
