import React, { useState } from 'react';
import { X, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStyle?: string;
  onSuccess: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialStyle = 'Custom Tattoos',
  onSuccess
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    style: initialStyle,
    placement: '',
    size: 'Medium (Palm to Hand Size)',
    description: '',
    referenceUrl: '',
    preferredDate: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccess();
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0f0f13] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0a0a0c]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-sans text-white uppercase tracking-wider">
                Request Tattoo Consultation
              </h3>
              <p className="text-xs text-neutral-400">DAVINK.TATTO0 — David | Haines City / Davenport, FL</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-sans text-white uppercase tracking-wide">
              Inquiry Received Successfully!
            </h4>
            <p className="text-neutral-300 text-sm max-w-md font-light leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. David has received your consultation request for your <span className="text-amber-400 font-semibold">{formData.style}</span> project. We will review your concept and reach out via email within 24–48 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-8 py-3.5 bg-white text-neutral-950 font-bold text-xs tracking-widest uppercase rounded-full hover:bg-amber-400 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            <p className="text-xs text-neutral-400 font-light">
              Please provide as much detail as possible about your tattoo concept, placement, and reference inspiration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(321) 000-0000"
                  className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                  Preferred Tattoo Style *
                </label>
                <select
                  name="style"
                  value={formData.style}
                  onChange={handleChange}
                  className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="Custom Tattoos">Custom Tattoos</option>
                  <option value="Black & Grey Tattoos">Black & Grey Tattoos</option>
                  <option value="Cover-Up Tattoos">Cover-Up Tattoos</option>
                  <option value="Fine Line / Geometric">Fine Line / Geometric</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                  Tattoo Placement *
                </label>
                <input
                  type="text"
                  name="placement"
                  required
                  value={formData.placement}
                  onChange={handleChange}
                  placeholder="e.g., Forearm, Outer Thigh, Half Sleeve"
                  className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                  Approximate Size *
                </label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="Small (Palm Size)">Small (Palm Size)</option>
                  <option value="Medium (Hand to Forearm Size)">Medium (Hand to Forearm Size)</option>
                  <option value="Large (Full Thigh / Half Sleeve)">Large (Full Thigh / Half Sleeve)</option>
                  <option value="Extra Large (Full Sleeve / Back Piece)">Extra Large (Full Sleeve / Back Piece)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                Describe Your Idea / Vision *
              </label>
              <textarea
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell David about your concept, specific motifs, mood, and whether this is a cover-up..."
                className="w-full bg-neutral-900 border border-white/15 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                  Reference Image URL (Optional)
                </label>
                <input
                  type="url"
                  name="referenceUrl"
                  value={formData.referenceUrl}
                  onChange={handleChange}
                  placeholder="https://imgur.com/... or Pinterest link"
                  className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                  Preferred Date / Season (Optional)
                </label>
                <input
                  type="text"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  placeholder="e.g., Next month, Weekends"
                  className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-neutral-300 font-medium text-xs tracking-widest uppercase rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-widest uppercase rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Consultation Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
