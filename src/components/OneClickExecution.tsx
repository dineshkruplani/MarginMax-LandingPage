import { motion } from 'framer-motion';
import { useState } from 'react';

const OneClickExecution = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="trading" className="relative py-8 px-6 bg-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            One-Click Signal Execution
          </h2>
          <p className="text-xs md:text-sm text-white/90 max-w-3xl mx-auto">
            Models watch the market and trigger signals automatically, managing risk and handling profits for you.
          </p>
        </motion.div>

        {/* Card Images - Using Actual Assets */}
        <div className="relative mx-auto h-[350px] max-w-6xl">
          {/* Left Card (POL) - Using BERA.png */}
          <motion.div
            className="absolute w-[460px] h-[552px] cursor-pointer"
            style={{
              left: 'calc(50% - 230px - 80px)',
              top: 'calc(50% - 276px)',
              zIndex: hovered === 'pol' ? 40 : 10,
            }}
            animate={{ 
              rotate: hovered === 'pol' ? 0 : -8,
              scale: hovered === 'pol' ? 1.08 : 1,
              y: hovered === 'pol' ? -10 : 0
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 25
            }}
            whileHover={{ 
              scale: 1.08,
              rotate: 0,
              y: -10,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            onMouseEnter={() => setHovered('pol')}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.img 
              src="/BERA.png" 
              alt="POL Trading Card" 
              className="w-full h-full object-contain drop-shadow-2xl" 
              draggable={false}
              animate={{
                filter: hovered === 'pol' 
                  ? 'brightness(1.15) blur(0px)' 
                  : hovered && hovered !== 'pol' 
                    ? 'brightness(0.8) blur(3px)' 
                    : 'brightness(1) blur(0px)'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Center Card (ETH) - Using eth.png */}
          <motion.div
            className="absolute w-[460px] h-[552px] cursor-pointer"
            style={{
              left: 'calc(50% - 230px)',
              top: 'calc(50% - 276px)',
              zIndex: hovered === 'eth' ? 40 : 30,
            }}
            animate={{ 
              rotate: 0,
              scale: hovered === 'eth' ? 1.1 : 1,
              y: hovered === 'eth' ? -15 : 0
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 25
            }}
            whileHover={{ 
              scale: 1.1,
              y: -15,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            onMouseEnter={() => setHovered('eth')}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.img 
              src="/eth.png" 
              alt="ETH Trading Card" 
              className="w-full h-full object-contain drop-shadow-2xl" 
              draggable={false}
              animate={{
                filter: hovered === 'eth' 
                  ? 'brightness(1.2) blur(0px)' 
                  : hovered && hovered !== 'eth' 
                    ? 'brightness(0.8) blur(3px)' 
                    : 'brightness(1) blur(0px)'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Right Card (BERA) - Using SOL.png */}
          <motion.div
            className="absolute w-[460px] h-[552px] cursor-pointer"
            style={{
              left: 'calc(50% - 230px + 80px)',
              top: 'calc(50% - 276px)',
              zIndex: hovered === 'bera' ? 40 : 20,
            }}
            animate={{ 
              rotate: hovered === 'bera' ? 0 : 8,
              scale: hovered === 'bera' ? 1.08 : 1,
              y: hovered === 'bera' ? -10 : 0
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 25
            }}
            whileHover={{ 
              scale: 1.08,
              rotate: 0,
              y: -10,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            onMouseEnter={() => setHovered('bera')}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.img 
              src="/SOL.png" 
              alt="BERA Trading Card" 
              className="w-full h-full object-contain drop-shadow-2xl" 
              draggable={false}
              animate={{
                filter: hovered === 'bera' 
                  ? 'brightness(1.15) blur(0px)' 
                  : hovered && hovered !== 'bera' 
                    ? 'brightness(0.8) blur(3px)' 
                    : 'brightness(1) blur(0px)'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Trade directly on Hyperliquid */}
        <motion.div 
          className="flex items-center justify-center space-x-2 text-white/70 mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <span>Trade directly on</span>
          <img src="/HL-logo.svg" alt="Hyperliquid" className="h-6 w-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default OneClickExecution;
