import { motion } from 'framer-motion';
import { Send, Twitter } from 'lucide-react';

const TelegramSection = () => {
  return (
    <section id="beta" className="py-20 px-6 bg-black">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Join the Telegram Group to<br/>Enter the Beta.
          </h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://twitter.com/MarginMaxHL" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 group border border-gray-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Twitter size={16} />
            <span>Follow on Twitter</span>
          </motion.a>
          <motion.a 
            href="https://t.me/+Azvl5eA_ko4zNTZl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={16} />
            <span>Join Beta</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TelegramSection;
