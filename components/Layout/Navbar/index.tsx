import React from 'react';

interface NavbarProps {
  title: string;
}
const Navbar: React.FC<NavbarProps> = ({ title }: NavbarProps) => {
  return <div>{title}</div>;
};

export default Navbar;
