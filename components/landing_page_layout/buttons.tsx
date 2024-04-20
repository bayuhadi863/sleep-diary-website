import React from 'react';

const PrimaryButton = ({ children, size, className }: { children: React.ReactNode; size?: string; className?: string }) => {
  return <button className={` bg-white px-4 ${size === 'xl' ? 'py-4' : 'py-2'} rounded-md text-background text-sm font-medium border border-white`}>{children}</button>;
};

const OutlineButton = ({ children, size }: { children: React.ReactNode; size?: string }) => {
  return <button className={`bg-transparent px-4 ${size === 'xl' ? 'py-4' : 'py-2'} rounded-md text-white text-sm font-medium border border-white hover:bg-gray-500/10 transition`}>{children}</button>;
};

export { PrimaryButton, OutlineButton };
