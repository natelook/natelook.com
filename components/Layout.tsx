import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <React.Fragment>
    <Nav />
    <div className='max-w-xl mx-auto mt-44'>{children}</div>
    <Footer />
  </React.Fragment>
);

export default Layout;
