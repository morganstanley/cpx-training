import React from 'react';

function Hero({ title, subtitle }) {
  const classnames = `hero hero-${title.split(' ').join('-').toLowerCase()}`;
  return (
    <article className={classnames}>
      <div className="pane">
        <header className="content">
          <h2>
            <span>{title}</span>
          </h2>
        </header>
        <section className="content">
          <span>{subtitle}</span>
        </section>
      </div>
    </article>
  );
}

export default Hero;
