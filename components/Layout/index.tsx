import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, title = 'Add title to this page' }) => {
  return (
    <>
      <Navbar title={title} />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
