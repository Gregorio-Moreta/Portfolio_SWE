
import React from 'react';
import type { Project } from '../types';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-sky-900/50 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <img className="w-full h-56 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
            <h3 className="font-bold text-xl text-white mb-2">{project.title}</h3>
            <p className="text-slate-400 text-base mb-4">
            {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
                <span key={tag} className="inline-block bg-slate-700 rounded-full px-3 py-1 text-sm font-semibold text-sky-300">
                {tag}
                </span>
            ))}
            </div>
        </div>
        <div className="flex items-center justify-end mt-4 space-x-4">
            {project.codeUrl && (
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
                    <GithubIcon className="w-6 h-6" />
                </a>
            )}
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
                <ExternalLinkIcon className="w-6 h-6" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
