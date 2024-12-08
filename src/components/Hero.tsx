import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(114,63,145,0.1),rgba(0,0,0,0.4))]" />
      </div>

      {/* Glass card */}
      <div className="relative backdrop-blur-xl bg-white/5 p-12 rounded-2xl border border-gray-800 
        hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r 
            from-purple-400 to-pink-600 animate-gradient">
            Om Sharma
          </h1>
          <p className="text-xl text-gray-300 mb-8">Full Stack Developer</p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/OmSharma42306" 
              className="text-gray-300 hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <GithubIcon size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/om-sharma-846733273/" 
              className="text-gray-300 hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <LinkedinIcon size={24} />
            </a>
            <a 
              href="mailto:omsharma.83173@gmail.com" 
              className="text-gray-300 hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <MailIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}