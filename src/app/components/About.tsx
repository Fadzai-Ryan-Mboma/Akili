import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To make AI accessible in every African language, preserving linguistic diversity while driving technological innovation.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Empowering 1.4 billion Africans to access technology, education, and information in their native languages.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering research in low-resource language AI, setting new standards for multilingual models worldwide.",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-600/20 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

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
              Transforming Africa's Digital Future
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're building the foundation for an inclusive, multilingual AI ecosystem across Africa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.gradient} mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image section with pattern overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-600/30 mix-blend-overlay"></div>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760681557952-e78ce074a197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ2VvbWV0cmljJTIwcGF0dGVybnN8ZW58MXx8fHwxNzcwNzg2MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="African patterns"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Rooted in African Innovation
              </h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Founded by a team of African AI researchers, linguists, and engineers, we understand 
                the unique challenges and opportunities in building language technology for our continent.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our work is informed by decades of linguistic research and powered by partnerships 
                with universities, cultural institutions, and communities across all 54 African nations.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    54
                  </div>
                  <div className="text-gray-400 text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mb-2">
                    200+
                  </div>
                  <div className="text-gray-400 text-sm">Researchers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <div className="text-gray-400 text-sm">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
