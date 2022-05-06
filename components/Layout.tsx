import React from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Nav from './Nav';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <React.Fragment>
    <Meta />
    <Nav />
    <div className='max-w-xl mx-auto mt-44 wrapper'>{children}</div>
    <Footer />
  </React.Fragment>
);

export default Layout;
