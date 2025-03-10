import { Github, Linkedin, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="fixed w-full bg-gray-200 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-gray-800">
            Portfolio
          </a>
          <div className="flex items-center gap-10">
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mohi-m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohi-madhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:mohi2@illinois.edu" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
