import { motion } from 'framer-motion';

const TradingCompanion = () => {
  const features = [
    {
      image: "/AI-Stock-Picker.png",
      title: "AI Stock Picker",
      description: "Advanced AI algorithms analyze market patterns and identify the most promising trading opportunities."
    },
    {
      image: "/Copy-Top-Investor-Portfolios.png",
      title: "Copy Top Investor Portfolios",
      description: "Mirror the strategies of successful investors and automatically replicate their winning trades."
    },
    {
      image: "/Crypto-Stock-Technical-Analysis.png",
      title: "Crypto & Stock Technical Analysis",
      description: "Comprehensive technical analysis across crypto and traditional markets with real-time insights."
    },
    {
      image: "/Financial-AI-Agent.png",
      title: "Financial AI Agent",
      description: "Your personal AI assistant that provides instant market insights and trading recommendations."
    },
    {
      image: "/Stock-Monitor.png",
      title: "Stock Monitor",
      description: "Real-time monitoring and alerts for your watchlist with customizable notification preferences."
    },
    {
      image: "/Swing-Trading.png",
      title: "Swing Trading",
      description: "Automated swing trading strategies that capture medium-term price movements efficiently."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
                     <h2 className="text-xl md:text-xl lg:text-xl font-light text-white mb-2">
             Now just a dashboard.
           </h2>
          <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white">
            Your Exclusive Trading Companion
          </h3>
        </motion.div>

        {/* Feature Cards Grid - Using Actual Feature Images with Overlaid Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="cursor-pointer group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Feature Image with Overlaid Content */}
              <motion.div
                className="relative"
                whileHover={{
                  filter: "brightness(1.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-contain drop-shadow-lg"
                  draggable={false}
                />
                
                {/* Overlaid Text Content */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingCompanion;
