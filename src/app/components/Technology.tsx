import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";

const techStack = [
  "Transformer-based Architecture",
  "Multi-modal Processing",
  "Context-aware Translation",
  "Sentiment Analysis",
  "Named Entity Recognition",
  "Text Summarization",
  "Question Answering",
  "Speech-to-Text Integration",
];

export function Technology() {
  return (
    <section id="technology" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Built on </span>
              <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Our models are trained on billions of tokens from diverse African language sources, 
              ensuring authentic and culturally relevant AI responses.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{tech}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Explore Models
              </button>
              <button className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all">
                Read Whitepaper
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20 blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1617049037028-d4746ed5e6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNzAyOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Technology Visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 shadow-2xl shadow-orange-500/50"
            >
              <div className="text-white text-sm font-semibold mb-1">Accuracy</div>
              <div className="text-white text-3xl font-bold">98.7%</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-2xl shadow-purple-500/50"
            >
              <div className="text-white text-sm font-semibold mb-1">Speed</div>
              <div className="text-white text-3xl font-bold">85ms</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
