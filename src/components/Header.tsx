import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Responsive sizing */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <img src="/Logo.svg" alt="MarginMax Logo" className="h-8 sm:h-10 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <motion.a 
              href="#trading" 
              className="text-gray-400 text-sm xl:text-base font-normal hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              1-click Trading
            </motion.a>
            <motion.a 
              href="#features" 
              className="text-gray-400 text-sm xl:text-base font-normal hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#beta" 
              className="text-gray-400 text-sm xl:text-base font-normal hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              Join Beta
            </motion.a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {/* Twitter button */}
            <motion.a 
              href="https://twitter.com/MarginMaxHL" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Follow on Twitter</span>
            </motion.a>
            
            {/* Green Open App button */}
            <motion.button 
              className="bg-green-500 hover:bg-green-600 text-white px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Open App</span>
              <ExternalLink size={16} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="lg:hidden mt-4 pb-4 border-t border-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
            <nav className="flex flex-col space-y-4 pt-4">
              <motion.a 
                href="#trading" 
                className="text-gray-300 text-base font-medium hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                1-click Trading
              </motion.a>
              <motion.a 
                href="#features" 
                className="text-gray-300 text-base font-medium hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </motion.a>
              <motion.a 
                href="#beta" 
                className="text-gray-300 text-base font-medium hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Beta
              </motion.a>
              
              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <motion.a 
                  href="https://twitter.com/MarginMaxHL" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Follow on Twitter</span>
                </motion.a>
                
                <motion.button 
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Open App</span>
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
