import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, title = 'Add title to this page' }) => {
  return (
    <>
      <Navbar />

      <main>
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget
        tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in,
        elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh
        pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
        aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut
        libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.
        Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras
        ultricies ligula sed magna dictum porta.
      </main>

      <Footer />
    </>
  );
};

export default Layout;
