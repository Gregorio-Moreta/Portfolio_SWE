
import React from 'react';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
    page: Page;
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
    const isActive = currentPage === page;
    return (
        <button
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive
                ? 'bg-sky-500 text-white'
                : 'text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
        >
            {children}
        </button>
    );
};


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="sticky top-0 bg-slate-900/80 backdrop-blur-md z-50 shadow-md shadow-slate-900/50">
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span 
              className="font-bold text-xl text-white cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              Gregorio Moreta
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Home</NavLink>
            <NavLink page="about" currentPage={currentPage} setCurrentPage={setCurrentPage}>About</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
