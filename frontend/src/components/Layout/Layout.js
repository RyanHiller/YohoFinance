import React from 'react';

import Navbar from '../NavBar/NavBar';

const Layout = props => (
  <>
    <Navbar />
    {/* Indices */}
    {props.children}
  </>
);

export default Layout;
