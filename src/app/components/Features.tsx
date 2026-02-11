import { motion } from "motion/react";
import { Languages, Zap, Shield, Globe2, Code2, Users, Brain, Cpu } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "2000+ Languages",
    description: "Comprehensive support for major and indigenous African languages with cultural context.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "Advanced NLP",
    description: "State-of-the-art natural language processing trained on diverse African linguistic data.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast inference with sub-100ms latency for production workloads.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with international data protection standards.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "Custom Models",
    description: "Fine-tune models on your data or build domain-specific language solutions.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Simple APIs, comprehensive SDKs, and extensive documentation to get started fast.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe2,
    title: "Cultural Intelligence",
    description: "Models that understand context, idioms, and cultural nuances across regions.",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built with African researchers, linguists, and developers for the continent.",
    gradient: "from-rose-500 to-pink-500",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Powerful Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to build next-generation AI applications for African markets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
