import React from 'react';

function Hero({ title, subtitle }) {
  return (
    <article className="hero">
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
