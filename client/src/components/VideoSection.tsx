import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const videoCards = [
  {
    title: "Quick Setup",
    description: "Integration in under 5 minutes",
    color: "bg-yellow-500"
  },
  {
    title: "Real-time Results", 
    description: "Instant feedback and reports",
    color: "bg-cyan-500"
  },
  {
    title: "Smart Analytics",
    description: "AI-powered insights",
    color: "bg-orange-500"
  }
];

export default function VideoSection() {
  const [videoRef, videoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="min-h-screen py-20 relative scroll-snap-section" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Watch how Mobile Operator transforms your testing workflow in minutes
          </p>
        </div>
        
        <div className="relative">
          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, y: 60 }}
            animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="video-container mb-12"
          >
            <div className="gradient-border rounded-xl">
              <div className="glass-effect rounded-xl p-4">
                <div className="aspect-video w-full max-w-4xl mx-auto">
                  <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Mobile Operator Demo"
                    className="w-full h-full rounded-lg"
                    frameBorder="0" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </motion.div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                className="video-card"
              >
                <div className="glass-effect rounded-lg p-6 text-center">
                  <div className={`w-2 h-2 ${card.color} rounded-full mx-auto mb-3`}></div>
                  <h4 className="text-sm font-semibold mb-2">{card.title}</h4>
                  <p className="text-xs text-gray-400">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
