import { motion } from 'framer-motion';

const TradingCompanion = () => {
  const features = [
    {
      image: "/AI-Stock-Picker.png",
      title: "AI Trade Picker",
      description: "The core engine. Model keep a watch on live price action, checks indicators across timeframes, and fires clean calls with entry, stop, and targets."
    },
    {
      image: "/Crypto-Stock-Technical-Analysis.png",
      title: "Strategy-Driven Logic",
      description: "Calls aren't random. Model checks for various indicators, triggers, strategies, market movements, news, and more before calling in on a conviction."
    },
    {
      image: "/Stock-Monitor.png",
      title: "Real-Time Adjustments",
      description: "Model keep the signals updates with Take-Profit, Stop-Loss, and re-entry levels dynamically adjust based on how the signal and market evolves."
    },
    {
      image: "/Financial-AI-Agent.png",
      title: "Ask for a Read, Get a Response",
      description: "Ask for analysis, signal explanation, market movements, or more - the agent gives a full breakdown and plan in seconds."
    },
    {
      image: "/Copy-Top-Investor-Portfolios.png",
      title: "Trade with Near-Zero Fees",
      description: "Calls are built to run on Hyperliquid with Builders Code - fees is minimal as low as 0.015% to keep you in green always."
    },
    {
      image: "/Swing-Trading.png",
      title: "Agent Swarm",
      description: "Works as hedge fund desk - each agent runs a different strategy, reads a different part of the market, and competes to push the best calls. You get stacked signal quality, not just one model's opinion."
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl lg:text-xl font-light text-white mb-2">
            Now just a dashboard.
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white">
            Your Exclusive Trading Companion
          </h3>
        </motion.div>

        {/* Feature Cards Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
                
                {/* Overlaid Text Content - Mobile Optimized */}
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-left">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
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
