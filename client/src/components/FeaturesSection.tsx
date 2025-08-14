import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: "Crash Detection",
    description: "Advanced AI algorithms detect potential crash scenarios before they impact users. Real-time monitoring across all device configurations.",
    color: "bg-red-500",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  },
  {
    title: "Performance Analytics",
    description: "Deep performance insights with memory usage, CPU optimization, and battery impact analysis. Identify bottlenecks instantly.",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  },
  {
    title: "Automated Testing",
    description: "Smart test case generation and execution. Our AI creates comprehensive test scenarios based on user behavior patterns.",
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  },
  {
    title: "Cross-Platform Support",
    description: "Test across iOS, Android, and hybrid platforms simultaneously. Ensure consistent experience across all devices and OS versions.",
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  }
];

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="min-h-screen py-20 relative scroll-snap-section" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Testing Suite</h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Our AI analyzes your mobile app's behavior patterns to deliver comprehensive testing coverage
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="feature-card"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 h-full hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 ${feature.color} rounded-full mr-3`}></div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  {feature.description}
                </p>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="rounded-lg w-full h-32 object-cover opacity-80" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
