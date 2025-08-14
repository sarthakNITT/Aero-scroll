import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 glass-effect"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MO</span>
            </div>
            <span className="ml-3 text-sm font-semibold">Mobile Operator</span>
          </motion.div>
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-xs text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-xs text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-xs text-gray-300 hover:text-white transition-colors">About</a>
              <button className="gradient-bg px-4 py-2 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
