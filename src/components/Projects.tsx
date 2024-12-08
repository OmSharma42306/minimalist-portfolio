import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ExternalLinkIcon, GithubIcon, ChevronDown, ChevronUp } from './icons';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className="backdrop-blur-xl bg-white/5 rounded-xl overflow-hidden border border-gray-800 
              hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <div 
                  className="flex justify-between items-center cursor-pointer mb-2"
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400">{project.title}</h3>
                  {expandedProject === index ? 
                    <ChevronUp className="text-purple-400" /> : 
                    <ChevronDown className="text-purple-400" />
                  }
                </div>
                <div className={`transition-all duration-300 ${expandedProject === index ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-black/40 backdrop-blur-md rounded-full 
                        text-gray-300 border border-gray-800/50 hover:border-purple-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <GithubIcon size={20} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLinkIcon size={20} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}