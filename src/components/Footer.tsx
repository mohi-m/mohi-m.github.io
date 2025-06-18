import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
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
          viewport={{ once: false }}
          className="text-center mt-6 text-primary-300 text-sm"
        >
          © {new Date().getFullYear()} Mohi. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
