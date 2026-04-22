import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, MessageSquare, User, Send, CheckCircle } from 'lucide-react'

const initialReviews = [
  { name: 'Sabbir Ahmed', role: 'Business Owner', rating: 5, text: 'Rana IT Ltd converted our vision into a high-performance website. Their video editing team is exceptional!' },
  { name: 'Maria Rahman', role: 'Marketing Head', rating: 5, text: 'The best digital agency in Dhaka. Our ad campaigns saw a 300% increase in ROI within the first month.' },
  { name: 'Kushal Dev', role: 'Startup Founder', rating: 4, text: 'Professional, timely, and very creative. Highly recommended for any web development projects.' },
]

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: '', role: '', rating: 5, text: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setReviews([formData, ...reviews])
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({ name: '', role: '', rating: 5, text: '' })
      
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1500)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-bg">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Review List */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-white/60">
                Join hundreds of satisfied clients who have scaled their business with Rana IT Ltd.
              </p>
            </motion.div>

            <div className="space-y-6">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className={`w-3 h-3 ${idx < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-white/20'}`} />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm italic mb-4 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <User className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{review.name}</p>
                      <p className="text-[10px] text-white/40">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Review Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <div className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/10 blur-[80px] -z-10" />

              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold">Leave a Review</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Company / Role</label>
                  <input
                    required
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. CEO, Founder"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Rating</label>
                  <div className="flex gap-2 p-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: num })}
                        className={`transition-all ${formData.rating >= num ? 'scale-110' : 'scale-90 opacity-40'}`}
                      >
                        <Star className={`w-6 h-6 ${formData.rating >= num ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Your Message</label>
                  <textarea
                    required
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    rows={4}
                    placeholder="Share your experience with Rana IT Ltd..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent to-accent2 py-4 rounded-xl font-bold text-sm shadow-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Review
                    </>
                  )}
                </button>
              </form>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center justify-center gap-2 text-emerald-400 text-xs font-bold"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Thank you! Your review has been added.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
