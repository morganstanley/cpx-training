import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';

import Footer from './footer';
import Header from './header';
import Hero from './hero';

const shortcodes = { Hero, Link };

function Layout({ location, title, children }) {
  return (
    <div className="main">
      <header className="header-main">
        <Header location={location} />
      </header>
      <main className="body-main">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </main>
      <footer className="footer-main">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
