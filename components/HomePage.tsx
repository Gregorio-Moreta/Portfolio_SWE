
import React from 'react';
import { GITHUB_URL, LINKEDIN_URL, EMAIL_ADDRESS, PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';
import type { Page } from '../App';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 fade-in">
          Gregorio Moreta
        </h1>
        <p className="text-2xl md:text-3xl text-sky-400 mb-8 fade-in fade-in-delay-1">
          Software Engineer
        </p>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8 fade-in fade-in-delay-2">
          Senior Instructional Associate with a background in React and JavaScript, skilled in building innovative and user-friendly web applications.
        </p>
        <div className="flex justify-center space-x-6 fade-in fade-in-delay-3">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transform hover:scale-110 transition-all duration-300">
              <GithubIcon className="h-8 w-8" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transform hover:scale-110 transition-all duration-300">
              <LinkedinIcon className="h-8 w-8" />
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-slate-300 hover:text-sky-400 transform hover:scale-110 transition-all duration-300">
              <MailIcon className="h-8 w-8" />
            </a>
        </div>
        <div className="mt-12 fade-in fade-in-delay-4">
            <button
                onClick={() => setCurrentPage('about')}
                className="bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-sky-500/50 transform hover:scale-105 transition-all duration-300 text-lg"
            >
                Learn More About Me
            </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 fade-in">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={project.title} style={{ animationDelay: `${index * 0.2}s` }} className="fade-in">
                <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;