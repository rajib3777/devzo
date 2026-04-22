import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, ArrowRight, Tag, Monitor, Megaphone, Camera, Video, PenTool } from 'lucide-react'

type Project = {
  title: string
  category: string
  description: string
  img: string
  tech: string[]
  link: string
  icon: any
  color: string
}

const projects: Project[] = [
  {
    title: 'E-commerce Website Redesign',
    category: 'Web Development',
    description: 'Full redesign of a multi-vendor e-commerce platform with custom checkout flow, real-time inventory management, and mobile-first design.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=900',
    tech: ['React', 'Next.js', 'Tailwind'],
    link: '#',
    icon: Monitor,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Brand Identity System',
    category: 'Graphics Design',
    description: 'Complete brand identity creation including logo, typography, color palette, stationery, and social media kits for a lifestyle brand.',
    img: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=900',
    tech: ['Illustrator', 'Figma', 'Photoshop'],
    link: '#',
    icon: PenTool,
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Meta Ads Campaign',
    category: 'Digital Marketing',
    description: 'Scaled a fashion brand from ৳0 to ৳5L/month revenue using targeted Facebook & Instagram ads with audience segmentation and retargeting.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900',
    tech: ['Meta Ads', 'Pixel', 'Analytics'],
    link: '#',
    icon: Megaphone,
    color: 'from-orange-500 to-rose-600',
  },
  {
    title: 'Product Launch Film',
    category: 'Video Editing',
    description: "Cinematic product launch video with motion graphics, color grading, and sound design for a premium skincare brand's market entry.",
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=900',
    tech: ['Premiere Pro', 'After Effects', 'DaVinci'],
    link: '#',
    icon: Video,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'SaaS Analytics Dashboard',
    category: 'Web Development',
    description: 'Real-time analytics platform with custom charts, role-based access control, and export functionality serving 10,000+ active users.',
    img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=900',
    tech: ['TypeScript', 'React', 'Chart.js'],
    link: '#',
    icon: Monitor,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Real Estate Lead Gen',
    category: 'Ad Campaign',
    description: 'Google Ads + Facebook funnel strategy generating 200+ qualified leads per month for a luxury real estate developer in Dhaka.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=900',
    tech: ['Google Ads', 'Facebook', 'CRM'],
    link: '#',
    icon: Megaphone,
    color: 'from-yellow-500 to-amber-600',
  },
  {
    title: 'Fashion Lookbook Shoot',
    category: 'Product Photography',
    description: 'High-end fashion photography for seasonal lookbook — 200+ edited shots, lifestyle photos, and social media ready content.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=900',
    tech: ['Photography', 'Lightroom', 'Retouching'],
    link: '#',
    icon: Camera,
    color: 'from-pink-400 to-fuchsia-600',
  },
  {
    title: 'Food Brand Social Media',
    category: 'Social Media',
    description: 'Built a food delivery brand from 500 to 85,000 followers in 6 months through viral content strategy, reels, and community management.',
    img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=900',
    tech: ['Instagram', 'TikTok', 'Facebook'],
    link: '#',
    icon: Megaphone,
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'Organic Seed E-commerce',
    category: 'Web + Marketing',
    description: 'Full-stack e-commerce build and marketing for an agricultural brand — website, Facebook ads, and packaging design all delivered.',
    img: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=900',
    tech: ['Django', 'React', 'Meta Ads'],
    link: '#',
    icon: Monitor,
    color: 'from-green-500 to-emerald-700',
  },
  {
    title: 'Cosmetics Brand Video',
    category: 'Video Editing',
    description: 'Series of 15 short-form product videos for TikTok and Instagram Reels, achieving 2M+ combined views in first 30 days.',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=900',
    tech: ['TikTok', 'Reels', 'Motion Design'],
    link: '#',
    icon: Video,
    color: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Healthcare App UI/UX',
    category: 'App Design',
    description: 'Mobile-first health tracking application with appointment scheduling, health metrics dashboard, and doctor consultation flow.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173bdd99602?auto=format&fit=crop&q=80&w=900',
    tech: ['Figma', 'Prototype', 'User Testing'],
    link: '#',
    icon: Monitor,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Jewelry Product Catalogue',
    category: 'Photography + Design',
    description: 'Premium product photography and brochure design for a jewellery brand — white background studio shots with lifestyle compositions.',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=900',
    tech: ['Photography', 'Photoshop', 'InDesign'],
    link: '#',
    icon: Camera,
    color: 'from-amber-400 to-yellow-600',
  },
]

export default function ProjectShowcase() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ right: '-10%', top: '30%', opacity: 0.25 }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Our Work
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Project <span className="gradient-text animate-shimmer">Showcase</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Real results for real businesses. Explore the work we've delivered across industries.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {visible.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden cursor-pointer"
                onClick={() => setSelected(project)}
              >
                {/* Image */}
                <div className="relative h-32 sm:h-52 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />

                  {/* Category pill on image */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span className={`inline-flex items-center gap-1.5 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                      <Icon className="w-2.5 h-2.5 sm:w-3 h-3" />
                      <span className="hidden xs:inline">{project.category}</span>
                      <span className="xs:hidden">{project.category.split(' ')[0]}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-6">
                  <h3 className="text-[11px] sm:text-base font-bold text-white mb-1 sm:mb-2 leading-tight line-clamp-1 sm:line-clamp-none">{project.title}</h3>
                  <p className="hidden sm:block text-xs text-white/60 leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech tags (hidden on very small screens) */}
                  <div className="hidden xs:flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                    {project.tech.slice(0, 2).map((t) => (
                      <span key={t} className="text-[8px] sm:text-[10px] rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between mt-1 sm:mt-0">
                    <span className="text-[9px] sm:text-xs text-accent font-semibold group-hover:underline">Details →</span>
                    <div className={`hidden sm:flex w-8 h-8 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* See More */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold border border-white/15 bg-gradient-to-r from-accent/10 to-accent2/10 hover:from-accent/20 hover:to-accent2/20 transition-all shadow-glow"
          >
            {showAll ? 'Show Less' : 'See More Projects'}
            <motion.span animate={{ rotate: showAll ? 90 : 0 }}>
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-bg overflow-hidden shadow-glow"
            >
              <div className="relative h-64">
                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-8">
                <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1.5 bg-gradient-to-r ${selected.color} text-white mb-4`}>
                  {selected.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{selected.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{selected.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((t) => (
                    <span key={t} className="flex items-center gap-1 text-xs rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-white/70">
                      <Tag className="w-3 h-3 text-accent" />
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r ${selected.color} text-white text-sm font-semibold`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <button
                    onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors"
                  >
                    Give Offer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
