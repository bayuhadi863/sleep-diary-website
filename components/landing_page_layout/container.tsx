import React from 'react';

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`px-4 sm:px-8 lg:px-16 ${className}`}>{children}</div>;
};

export default Container;
