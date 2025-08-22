import { motion } from 'framer-motion';
import { Send, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-black border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <motion.div 
            className="text-gray-400 mb-4 md:mb-0 text-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © MarginMax. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#" 
              className="flex items-center space-x-2 text-white hover:text-green-500 transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Send size={16} />
              <span>Join Telegram</span>
            </motion.a>
            <motion.a 
              href="https://twitter.com/MarginMaxHL" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-500 transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Twitter size={16} />
              <span>@MarginMaxHL</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
