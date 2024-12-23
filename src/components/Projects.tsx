import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    github: 'https://github.com',
    live: 'https://example.com',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Project Two',
    description: 'Mobile-first e-commerce platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    github: 'https://github.com',
    live: 'https://example.com',
    tags: ['React Native', 'Firebase', 'Stripe']
  },
  {
    title: 'Project Three',
    description: 'AI-powered data visualization dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    github: 'https://github.com',
    live: 'https://example.com',
    tags: ['Python', 'TensorFlow', 'D3.js']
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}