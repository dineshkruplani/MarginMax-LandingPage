import { motion } from 'framer-motion';
import { Send, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 bg-black">
      {/* Background Image - Mobile Responsive */}
      <div className="absolute inset-0">
        <img 
          src="/background.png" 
          alt="Hero Background" 
          className="w-full h-1/2 sm:w-1/2 sm:h-1/2 md:w-2/3 md:h-2/3 lg:w-3/4 lg:h-3/4 xl:w-4/5 xl:h-4/5 object-contain object-left-top ml-0 mt-16 sm:mt-20"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Main Headline */}
        <motion.div 
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-2 sm:mb-3">
            It's a Fu*king Hedge
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-2 sm:mb-3">
            Fund.
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
            <span className="text-white">Powered by </span>
            <span className="text-green-500">Agents.</span>
          </h2>
        </motion.div>

        {/* Subtitle/Tagline */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 font-normal px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Focus on making money, leave analysis to swarms of agents.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-10 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Join Beta Button - Mobile optimized */}
          <motion.a 
            href="https://t.me/+Azvl5eA_ko4zNTZl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white px-4 sm:px-5 py-3 sm:py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            <span>Join Beta</span>
          </motion.a>

          {/* Open App Button - Mobile optimized */}
          <motion.button 
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-4 sm:px-5 py-3 sm:py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Open App</span>
            <ExternalLink size={16} />
          </motion.button>
        </motion.div>

        {/* Build on Hyperliquid Section - Mobile optimized */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-2 sm:space-y-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-white/70 text-xs sm:text-sm">Build on</span>
          <div className="flex items-center">
            <img src="/HL-logo.svg" alt="Hyperliquid" className="h-6 sm:h-8 w-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
