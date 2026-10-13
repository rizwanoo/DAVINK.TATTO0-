import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';

export const ConsultationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    style: 'Custom Tattoos',
    placement: '',
    size: 'Medium (Hand to Forearm)',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="consultation" className="py-24 sm:py-28 bg-[#040404] text-slate-100 relative overflow-hidden border-t border-neutral-900/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold block mb-2">
            Direct Studio Inquiry
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-[0.1em] uppercase font-sans text-white break-words">
            BOOK A <span className="text-red-600">CONSULTATION</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3 max-w-xl">
            Discuss your custom concept or cover-up project directly with David. Provide your placement and ideas below.
          </p>
        </motion.div>

        {/* Clean Luxury Borderless Form with AnimatePresence */}
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-16 text-center flex flex-col items-center justify-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-600 flex items-center justify-center text-red-500 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-3xl font-black uppercase text-white tracking-wide">
                Request Sent Successfully
              </h3>
              <p className="text-neutral-300 text-base max-w-md font-light leading-relaxed">
                Thank you, <span className="text-white font-bold">{formData.fullName}</span>. David will review your concept for your <span className="text-red-500 font-bold">{formData.style}</span> and reply via email within 24 hours.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSubmitted(false)}
                className="mt-4 px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs tracking-widest uppercase rounded-full border border-neutral-700"
              >
                Send Another Request
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-10"
            >
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-b border-neutral-800 focus-within:border-red-600 transition-colors pb-2">
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-transparent text-white text-base py-2 focus:outline-none placeholder:text-neutral-600 font-sans"
                  />
                </div>

                <div className="border-b border-neutral-800 focus-within:border-red-600 transition-colors pb-2">
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-transparent text-white text-base py-2 focus:outline-none placeholder:text-neutral-600 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-b border-neutral-800 focus-within:border-red-600 transition-colors pb-2">
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(000) 000-0000"
                    className="w-full bg-transparent text-white text-base py-2 focus:outline-none placeholder:text-neutral-600 font-sans"
                  />
                </div>

                <div className="border-b border-neutral-800 focus-within:border-red-600 transition-colors pb-2">
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1">
                    Tattoo Style *
                  </label>
                  <select
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white text-base py-2 focus:outline-none font-sans cursor-pointer"
                  >
                    <option value="Custom Tattoos" className="bg-neutral-900 text-white">Custom Tattoos</option>
                    <option value="Black & Grey Realism" className="bg-neutral-900 text-white">Black & Grey Realism</option>
                    <option value="Cover-Up Tattoos" className="bg-neutral-900 text-white">Cover-Up Tattoos</option>
                    <option value="Fine Line / Geometric" className="bg-neutral-900 text-white">Fine Line / Geometric</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-b border-neutral-800 focus-within:border-red-600 transition-colors pb-2">
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1">
                    Placement on Body *
                  </label>
                  <input
                    type="text"
                    name="placement"
                    required
                    value={formData.placement}
                    onChange={handleChange}
                    placeholder="e.g. Forearm, Chest, Full Sleeve"
                    className="w-full bg-transparent text-white text-base py-2 focus:outline-none placeholder:text-neutral-600 font-sans"
                  />
                </div>

                <div className="border-b border-neutral-800 focus-within:border-red-600 transition-colors pb-2">
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1">
                    Approximate Size *
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white text-base py-2 focus:outline-none font-sans cursor-pointer"
                  >
                    <option value="Small (Palm Size)" className="bg-neutral-900 text-white">Small (Palm Size)</option>
                    <option value="Medium (Hand to Forearm)" className="bg-neutral-900 text-white">Medium (Hand to Forearm)</option>
                    <option value="Large (Full Thigh / Half Sleeve)" className="bg-neutral-900 text-white">Large (Full Thigh / Half Sleeve)</option>
                    <option value="Extra Large (Full Sleeve / Full Back)" className="bg-neutral-900 text-white">Extra Large (Full Sleeve / Full Back)</option>
                  </select>
                </div>
              </div>

              <div className="border-b border-neutral-800 focus-within:border-red-600 transition-colors pb-2">
                <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-1">
                  Describe Your Concept / Idea *
                </label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Motifs, references, meaning, and if this is a cover-up..."
                  className="w-full bg-transparent text-white text-base py-2 focus:outline-none placeholder:text-neutral-600 resize-none font-sans"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Haines City & Davenport, Florida</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-black text-xs tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Consultation Request'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>

            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
