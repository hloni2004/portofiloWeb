import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment, FaCheck, FaTimes } from 'react-icons/fa';

const InteractiveContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: {[key: string]: string} = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const getFieldIcon = (fieldName: string) => {
    switch (fieldName) {
      case 'name': return FaUser;
      case 'email': return FaEnvelope;
      case 'message': return FaComment;
      default: return FaUser;
    }
  };

  const getFieldColor = (fieldName: string) => {
    if (errors[fieldName]) return 'from-red-400 to-red-600';
    if (focusedField === fieldName) return 'from-cyan-400 to-purple-500';
    return 'from-gray-400 to-gray-600';
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-800/50 backdrop-blur-sm border border-green-400/50 rounded-xl p-8 text-center"
      >
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <FaCheck className="text-white text-2xl" />
        </motion.div>
        <h3 className="text-2xl font-mono font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-300">Thanks for reaching out! I'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-8 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-mono font-bold text-white mb-2">
          Send Me a Message
        </h3>
        <p className="text-gray-400">Let's discuss your next project!</p>
      </div>

      {/* Name Field */}
      <div className="relative">
        <motion.div
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r ${getFieldColor('name')} rounded-full flex items-center justify-center transition-all duration-300`}
          animate={focusedField === 'name' ? { scale: 1.2 } : { scale: 1 }}
        >
          <FaUser className="text-white text-xs" />
        </motion.div>
        
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          placeholder="Your Name"
          className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 font-mono transition-all duration-300 focus:outline-none ${
            errors.name 
              ? 'border-red-400 focus:border-red-400' 
              : 'border-gray-600 focus:border-cyan-400'
          }`}
        />
        
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <FaTimes size={12} />
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email Field */}
      <div className="relative">
        <motion.div
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r ${getFieldColor('email')} rounded-full flex items-center justify-center transition-all duration-300`}
          animate={focusedField === 'email' ? { scale: 1.2 } : { scale: 1 }}
        >
          <FaEnvelope className="text-white text-xs" />
        </motion.div>
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          placeholder="your.email@example.com"
          className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 font-mono transition-all duration-300 focus:outline-none ${
            errors.email 
              ? 'border-red-400 focus:border-red-400' 
              : 'border-gray-600 focus:border-cyan-400'
          }`}
        />
        
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <FaTimes size={12} />
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Message Field */}
      <div className="relative">
        <motion.div
          className={`absolute left-3 top-4 w-5 h-5 bg-gradient-to-r ${getFieldColor('message')} rounded-full flex items-center justify-center transition-all duration-300`}
          animate={focusedField === 'message' ? { scale: 1.2 } : { scale: 1 }}
        >
          <FaComment className="text-white text-xs" />
        </motion.div>
        
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          placeholder="Tell me about your project or just say hello!"
          rows={4}
          className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 font-mono transition-all duration-300 focus:outline-none resize-none ${
            errors.message 
              ? 'border-red-400 focus:border-red-400' 
              : 'border-gray-600 focus:border-cyan-400'
          }`}
        />
        
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <FaTimes size={12} />
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Character Counter */}
      <div className="text-right">
        <span className={`text-xs font-mono ${
          formData.message.length >= 10 ? 'text-green-400' : 'text-gray-400'
        }`}>
          {formData.message.length}/500 characters
        </span>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-mono font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            />
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane />
            Send Message
          </>
        )}
      </motion.button>

      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        {focusedField && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`absolute inset-0 bg-gradient-to-r ${getFieldColor(focusedField)} blur-3xl`}
          />
        )}
      </div>
    </motion.form>
  );
};

export default InteractiveContactForm;