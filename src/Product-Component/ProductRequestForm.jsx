import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ProductRequestForm() {
  const formRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    customer_email: '',
    requested_product: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.user_name.trim() || !formData.requested_product.trim()) {
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    emailjs.sendForm(
      'service_7rysvyj',
      'template_siaculh',
      formRef.current,
      'Ilo197thtURlqw-rK'
    )
    .then(() => {
        setLoading(false);
        setIsSubmitted(true);
        setFormData({ user_name: '', customer_email: '', requested_product: '', notes: '' });
    })
    .catch((error) => {
        setLoading(false);
        setErrorMsg('Something went wrong. Please try again.');
        console.error('EmailJS Error:', error);
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMsg('');
  };

  // 1. Minimized Trigger (Shows when closed)
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer border border-slate-700"
      >
        <span>✨ Request Fragrance</span>
      </button>
    );
  }

  // 2. Fixed Floating Panel (Shows on the bottom-right)
  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md bg-gradient-to-br from-white to-rose-50/40 p-6 rounded-2xl shadow-2xl border border-rose-100 backdrop-blur-md transition-all duration-300 animate-fadeIn">
      
      {/* Top Close (X) Button */}
      <button 
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-all cursor-pointer text-sm font-bold"
        aria-label="Close request form"
      >
        ✕
      </button>

      {/* SUCCESS VIEW */}
      {isSubmitted ? (
        <div className="text-center py-6 flex flex-col items-center justify-center">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mb-3 shadow-sm">
            ✓
          </div>
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 font-semibold text-[10px] rounded-full uppercase tracking-wider mb-2">
            Request Received
          </span>
          <h3 className="text-xl font-extrabold text-slate-800 mb-2">Thank You!</h3>
          <p className="text-xs text-slate-600 max-w-xs mb-5 leading-relaxed">
            We have received your request. We'll verify availability and get back to you shortly.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="py-2.5 px-4 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
            >
              Submit Another
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="py-2.5 px-4 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      ) : (

        /* FORM VIEW */
        <>
          <div className="text-left mb-4 pr-6">
            <span className="inline-block px-2.5 py-0.5 bg-rose-100 text-rose-700 font-semibold text-[10px] rounded-full uppercase tracking-wider mb-1">
              Special Order
            </span>
            <h3 className="text-lg font-extrabold text-slate-800 tracking-tight">Can't Find Your Fragrance?</h3>
            <p className="text-xs text-slate-500">Submit details below and we will source it for you.</p>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-3">
            <input type="hidden" name="page_url" value={window.location.href} />
            <input type="hidden" name="submitted_at" value={new Date().toLocaleString()} />

            {/* Input: Name */}
            <div className="relative">
              <input 
                type="text" 
                name="user_name" 
                value={formData.user_name}
                onChange={handleChange}
                required 
                placeholder=" "
                className="peer w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all placeholder-transparent"
              />
              <label className="absolute left-3.5 -top-2 bg-white px-1 text-[10px] font-medium text-slate-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:bg-white peer-focus:text-[10px] peer-focus:text-rose-500">
                Your Full Name *
              </label>
            </div>

            {/* Input: Contact Info */}
            <div className="relative">
              <input 
                type="text" 
                name="customer_email" 
                value={formData.customer_email}
                onChange={handleChange}
                required 
                placeholder=" "
                className="peer w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all placeholder-transparent"
              />
              <label className="absolute left-3.5 -top-2 bg-white px-1 text-[10px] font-medium text-slate-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:bg-white peer-focus:text-[10px] peer-focus:text-rose-500">
                Email or WhatsApp Number *
              </label>
            </div>

            {/* Input: Requested Product */}
            <div className="relative">
              <input 
                type="text" 
                name="requested_product" 
                value={formData.requested_product}
                onChange={handleChange}
                required 
                placeholder=" "
                className="peer w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all placeholder-transparent"
              />
              <label className="absolute left-3.5 -top-2 bg-white px-1 text-[10px] font-medium text-slate-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:bg-white peer-focus:text-[10px] peer-focus:text-rose-500">
                Fragrance / Product Name *
              </label>
            </div>

            {/* Textarea: Notes */}
            <div className="relative">
              <textarea 
                name="notes" 
                value={formData.notes}
                onChange={handleChange}
                rows="2"
                placeholder=" "
                className="peer w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all placeholder-transparent resize-none"
              />
              <label className="absolute left-3.5 -top-2 bg-white px-1 text-[10px] font-medium text-slate-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:bg-white peer-focus:text-[10px] peer-focus:text-rose-500">
                Additional Specs (Size, concentration...)
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? 'Sending Request...' : 'Submit Sourcing Request'}
            </button>

            {errorMsg && (
              <div className="p-2 bg-rose-50 text-rose-700 border border-rose-200 rounded-lg text-[11px] font-semibold text-center">
                {errorMsg}
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
}