import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex justify-between items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#home"
            className="text-xl font-bold text-light"
          >
            Portfolio
          </motion.a>
          <div className="flex items-center gap-6">
            {["about", "skills", "education", "experience", "projects", "contact"].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`#${item}`}
                className="text-primary-200 hover:text-secondary-400 transition-colors font-bold capitalize"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/mohi-m" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mohi-madhu/" },
              { icon: Mail, href: "mailto:mohi2@illinois.edu" },
            ].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-secondary-400 transition-colors"
              >
                <item.icon size={20} />
              </motion.a>
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
