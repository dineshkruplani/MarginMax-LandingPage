import { motion } from 'framer-motion';

const MoreFeatures = () => {
  const features = [
    {
      firstWord: "Real-time Market",
      secondWord: "Analysis",
      icon: "📊",
      bgColor: "bg-gradient-to-r from-yellow-500/20 to-transparent",
      accentColor: "text-yellow-400"
    },
    {
      firstWord: "Smart Portfolio",
      secondWord: "Analysys",
      icon: "👤",
      bgColor: "bg-gradient-to-r from-orange-500/20 to-transparent", 
      accentColor: "text-orange-400"
    },
    {
      firstWord: "Movement",
      secondWord: "Lister",
      icon: "📈",
      bgColor: "bg-gradient-to-r from-blue-500/20 to-transparent",
      accentColor: "text-blue-400"
    },
    {
      firstWord: "Browser",
      secondWord: "Plugin",
      icon: "🌐",
      bgColor: "bg-gradient-to-r from-teal-500/20 to-transparent",
      accentColor: "text-teal-400"
    },
    {
      firstWord: "Market",
      secondWord: "Copilot",
      icon: "✅",
      bgColor: "bg-gradient-to-r from-green-500/20 to-transparent",
      accentColor: "text-green-400"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-4 sm:mb-6">
            and there's more...
          </h2>
        </motion.div>

        {/* Feature Buttons Grid - Mobile Responsive Layout */}
        <div className="max-w-4xl mx-auto mb-8">
          {/* Top Row - 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                className={`${feature.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="font-semibold text-base sm:text-lg lg:text-xl">
                  <span className={feature.accentColor}>{feature.firstWord}</span> {feature.icon} <span className="text-white">{feature.secondWord}</span>
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.slice(2, 5).map((feature, index) => (
              <motion.div
                key={index + 2}
                className={`${feature.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="font-semibold text-base sm:text-lg lg:text-xl">
                  <span className={feature.accentColor}>{feature.firstWord}</span> {feature.icon} <span className="text-white">{feature.secondWord}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sub-text */}
        <motion.p 
          className="text-center text-gray-400 text-base sm:text-lg px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          ...and more on the way.
        </motion.p>
      </div>
    </section>
  );
};

export default MoreFeatures;
