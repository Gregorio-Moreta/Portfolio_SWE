
import React from 'react';
import { GITHUB_URL, LINKEDIN_URL, EMAIL_ADDRESS } from '../constants';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Gregorio Moreta. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
