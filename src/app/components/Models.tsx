import { motion } from "motion/react";
import { Zap, Brain, Gauge, Shield } from "lucide-react";

const models = [
  {
    name: 'AfricaGPT-4',
    icon: Brain,
    description: 'Our most capable model for complex reasoning and creative tasks',
    gradient: 'from-purple-500 to-pink-600',
    specs: [
      { label: 'Context', value: '128K tokens' },
      { label: 'Languages', value: '2000+' },
      { label: 'Speed', value: 'Fast' },
      { label: 'Cost', value: '$0.03/1K tokens' },
    ],
    features: ['Advanced reasoning', 'Cultural context', 'Code generation', 'Translation'],
  },
  {
    name: 'AfricaGPT-3.5',
    icon: Zap,
    description: 'Fast and efficient model for everyday tasks and high-volume applications',
    gradient: 'from-orange-500 to-yellow-500',
    specs: [
      { label: 'Context', value: '16K tokens' },
      { label: 'Languages', value: '2000+' },
      { label: 'Speed', value: 'Very Fast' },
      { label: 'Cost', value: '$0.002/1K tokens' },
    ],
    features: ['Quick responses', 'High throughput', 'Cost-effective', 'Reliable'],
  },
  {
    name: 'AfricaMini',
    icon: Gauge,
    description: 'Lightweight model optimized for speed and simple tasks',
    gradient: 'from-green-500 to-teal-500',
    specs: [
      { label: 'Context', value: '8K tokens' },
      { label: 'Languages', value: '500+' },
      { label: 'Speed', value: 'Ultra Fast' },
      { label: 'Cost', value: '$0.0005/1K tokens' },
    ],
    features: ['Instant responses', 'Low latency', 'Budget-friendly', 'Simple tasks'],
  },
  {
    name: 'AfricaSecure',
    icon: Shield,
    description: 'Enterprise-grade model with enhanced security and compliance',
    gradient: 'from-blue-500 to-indigo-600',
    specs: [
      { label: 'Context', value: '64K tokens' },
      { label: 'Languages', value: '2000+' },
      { label: 'Speed', value: 'Fast' },
      { label: 'Cost', value: 'Custom' },
    ],
    features: ['Data privacy', 'SOC2 compliant', 'On-premise option', 'Audit logs'],
  },
];

export function Models() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Powered by African Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Our Models
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect model for your use case. All models are trained on African languages and cultural contexts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${model.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${model.gradient} mb-6`}>
                  <model.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{model.name}</h3>
                <p className="text-gray-400 mb-6">{model.description}</p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {model.specs.map((spec, i) => (
                    <div key={i} className="bg-black/30 rounded-xl p-3 border border-white/5">
                      <div className="text-xs text-gray-500 mb-1">{spec.label}</div>
                      <div className="text-sm font-semibold text-white">{spec.value}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {model.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
