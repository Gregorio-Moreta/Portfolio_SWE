
import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <div className="bg-slate-700/50 text-slate-300 text-sm font-medium px-4 py-2 rounded-md shadow-sm hover:bg-slate-700 hover:text-white transition-colors duration-300 cursor-default">
      {name}
    </div>
  );
};

export default SkillBadge;
