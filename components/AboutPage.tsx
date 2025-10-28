
import React from 'react';
import { WORK_EXPERIENCE, EDUCATION, SKILLS } from '../constants';
import type { Experience, SkillCategory } from '../types';
import SkillBadge from './SkillBadge';

const TimelineItem: React.FC<{ item: Experience }> = ({ item }) => (
    <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-sky-500 after:border-4 after:box-content after:border-slate-800 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-sky-400 bg-sky-900/50 rounded-full">{item.period.split(' - ')[1]}</time>
            <div className="text-xl font-bold text-white">{item.role}</div>
        </div>
        <div className="text-slate-400 mb-2">{item.company} | {item.period}</div>
        <ul className="list-disc list-inside text-slate-400 space-y-1">
            {item.description.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
    </div>
);


const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 fade-in">
      {/* About Me Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1">
          <img 
            src={`https://picsum.photos/seed/gregorio/500/500`} 
            alt="Gregorio Moreta"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover shadow-lg shadow-sky-900/50 border-4 border-slate-700"
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am a passionate Software Engineer with a background in education, dedicated to creating elegant and effective solutions. I have experience mentoring students and leading workshops on Agile development and CI/CD, and I thrive on applying my technical and teaching skills to innovative frontend challenges. My goal is to build software that is not only functional but also provides a delightful user experience.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Work Experience</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
             {WORK_EXPERIENCE.map((exp, index) => <TimelineItem key={index} item={exp} />)}
        </div>
      </section>
      
       {/* Education Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Education</h2>
         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
             {EDUCATION.map((edu, index) => <TimelineItem key={index} item={edu} />)}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Technical Skills</h2>
        <div className="space-y-8">
          {SKILLS.map((category: SkillCategory) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-sky-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => <SkillBadge key={skill} name={skill} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
