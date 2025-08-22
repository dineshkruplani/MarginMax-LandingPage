import { motion } from 'framer-motion';
import { useState } from 'react';

const OneClickExecution = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="trading" className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-4">
            One-Click Signal Execution
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-3xl mx-auto px-2">
            Models watch the market and trigger signals automatically, managing risk and handling profits for you.
          </p>
        </motion.div>

        {/* Mobile Layout - Same Overlapping Design, Smaller Cards */}
        <div className="lg:hidden relative mx-auto h-[400px] sm:h-[450px] max-w-4xl">
          {/* Left Card (POL) - Using BERA.png */}
          <motion.div
            className="absolute cursor-pointer"
            style={{
              width: '280px',
              height: '336px',
              left: 'calc(50% - 140px - 40px)',
              top: 'calc(50% - 168px)',
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
            className="absolute cursor-pointer"
            style={{
              width: '280px',
              height: '336px',
              left: 'calc(50% - 140px)',
              top: 'calc(50% - 168px)',
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
            className="absolute cursor-pointer"
            style={{
              width: '280px',
              height: '336px',
              left: 'calc(50% - 140px + 40px)',
              top: 'calc(50% - 168px)',
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

        {/* Desktop Layout - Overlapping Cards (Original Design) */}
        <div className="hidden lg:block relative mx-auto h-[350px] max-w-6xl">
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
                filter: hovered === 'pol' 
                  ? 'brightness(1.15) blur(0px)' 
                  : hovered && hovered !== 'pol' 
                    ? 'brightness(0.8) blur(3px)' 
                    : 'brightness(1) blur(0px)'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Trade directly on Hyperliquid */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-white/70 mt-8 sm:mt-10 lg:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-sm sm:text-base">Trade directly on</span>
          <img src="/HL-logo.svg" alt="Hyperliquid" className="h-5 sm:h-6 w-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default OneClickExecution;
