import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "mohi2@illinois.edu",
      href: "mailto:mohi2@illinois.edu",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mohi-m",
      href: "https://github.com/mohi-m",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mohi-madhu",
      href: "https://www.linkedin.com/in/mohi-madhu/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-light mb-4">Get in Touch</h2>
          <p className="text-primary-200">Feel free to reach out through any of these platforms</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center p-6 bg-dark-300/30 backdrop-blur-sm rounded-xl hover:shadow-2xl hover:shadow-secondary-500/20 transition-all duration-300 border border-dark-400/50"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-500/10 text-secondary-300 mb-4"
              >
                <contact.icon size={24} />
              </motion.div>
              <h3 className="text-lg font-semibold text-light mb-2">{contact.label}</h3>
              <p className="text-primary-200 group-hover:text-secondary-300 transition-colors">{contact.value}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
