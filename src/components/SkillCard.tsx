import React, { useState } from 'react';
import { getSkillIcon } from '../utils/skillIcons';
import { ChevronDown, ChevronUp } from './icons';

interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-gray-800 
      hover:border-purple-500 transition-all duration-300 hover:shadow-lg 
      hover:shadow-purple-500/20 group"
    >
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-semibold text-purple-400 group-hover:text-purple-300">{category}</h3>
        {isExpanded ? <ChevronUp className="text-purple-400" /> : <ChevronDown className="text-purple-400" />}
      </div>
      <div className={`grid gap-3 transition-all duration-300 ${isExpanded ? 'mt-4 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm bg-black/40 backdrop-blur-md rounded-full 
                text-gray-300 flex items-center gap-2 hover:bg-black/60 transition-colors
                border border-gray-800/50 hover:border-purple-500/50"
              >
                {getSkillIcon(skill)}
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}