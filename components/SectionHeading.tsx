
import React from 'react';

interface SectionHeadingProps {
  title: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="md:col-span-1">
      <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 sticky top-32">
        {title}
      </h3>
    </div>
  );
};
