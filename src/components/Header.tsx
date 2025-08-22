import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Reduced by 20% */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <img src="/Logo.svg" alt="MarginMax Logo" className="h-10 w-auto" />
          </motion.div>

          {/* Navigation - Reduced font by 50%, muted color, less weight */}
          <nav className="hidden md:flex items-center space-x-12">
            <motion.a 
              href="#trading" 
              className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              1-click Trading
            </motion.a>
            <motion.a 
              href="#features" 
              className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#beta" 
              className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              Join Beta
            </motion.a>
          </nav>

          {/* Right side - Buttons with exact styling */}
          <div className="flex items-center space-x-4">
            {/* Twitter button - No background, light border, reduced size by 30% */}
            <motion.a 
              href="https://twitter.com/MarginMaxHL" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Follow on Twitter</span>
            </motion.a>
            
            {/* Green Open App button - Reduced size by 30% */}
            <motion.button 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Open App</span>
              <ExternalLink size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
