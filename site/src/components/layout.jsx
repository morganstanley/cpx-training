import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Footer from './footer';
import Header from './header';

import { SHORTCODES } from '../constants/mdx-shortcodes';

import '../styles/global.css';
import '../styles/style.css';

function Layout({ location, children }) {
  return (
    <div className="main">
      <header className="header-main">
        <Header location={location} />
      </header>
      <main className="body-main">
        <MDXProvider components={SHORTCODES}>{children}</MDXProvider>
      </main>
      <footer className="footer-main">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
