import { motion } from 'framer-motion';
import { Send, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Copyright */}
          <motion.div 
            className="text-gray-400 text-center md:text-left text-sm sm:text-base"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © MarginMax. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#" 
              className="flex items-center space-x-2 text-white hover:text-green-500 transition-colors duration-300 text-sm sm:text-base py-2"
              whileHover={{ scale: 1.05 }}
            >
              <Send size={16} className="sm:w-5 sm:h-5" />
              <span>Join Telegram</span>
            </motion.a>
            <motion.a 
              href="https://twitter.com/MarginMaxHL" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-500 transition-colors duration-300 text-sm sm:text-base py-2"
              whileHover={{ scale: 1.05 }}
            >
              <Twitter size={16} className="sm:w-5 sm:h-5" />
              <span>@MarginMaxHL</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
