import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-dark-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-200 mb-4 md:mb-0"
          >
            <p className="text-lg font-semibold">Mohi Madhusudan</p>
            <p className="text-primary-300">Data Enthusiast</p>
          </motion.div>
          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/mohi-m"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-primary-300 hover:text-secondary-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohi-madhu/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-primary-300 hover:text-secondary-400 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:mohi2@illinois.edu"
              whileHover={{ scale: 1.1 }}
              className="text-primary-300 hover:text-secondary-400 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-secondary-500/10 text-secondary-400 hover:bg-secondary-500/20 transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-primary-300 text-sm"
        >
          © {new Date().getFullYear()} Mohi Madhusudan. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
