import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';

import Footer from './footer';
import Header from './header';
import Hero from './hero';
import SummaryCard from './summary-card';

import '../styles/global.css';
import '../styles/style.css';

const shortcodes = { Hero, Link, SummaryCard };

function Layout({ location, children }) {
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
