import React from 'react';
import SkillCard from './SkillCard';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-black" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCard key={category} category={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
}