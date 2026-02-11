import { Globe, Menu } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 blur-lg opacity-50"></div>
            <Globe className="w-8 h-8 text-white relative z-10" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            AfricaLLM
          </span>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Technology', 'About', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden md:block relative px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium overflow-hidden group"
        >
          <span className="relative z-10">Get API Key</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>

        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.header>
  );
}
