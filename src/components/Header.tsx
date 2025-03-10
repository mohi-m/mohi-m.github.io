import { Github, Linkedin, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="fixed w-full bg-gray-900 text-white backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-gray-100">
            Portfolio
          </a>
          <div className="flex items-center gap-10">
            <a href="#experience" className="text-gray-100 hover:text-gray-400 transition-colors font-bold">
              Experience
            </a>
            <a href="#projects" className="text-gray-100 hover:text-gray-400 transition-colors font-bold">
              Projects
            </a>
            <a href="#contact" className="text-gray-100 hover:text-gray-400 transition-colors font-bold">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mohi-m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohi-madhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:mohi2@illinois.edu" className="text-gray-100 hover:text-gray-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
