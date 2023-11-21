import React from 'react';

function Hero({ title, subtitle, image }) {
  const style = {
    backgroundImage: '../../images/circuitplaygroundexpress.jpg',
    border: 'red solid 5px',
  };

  return (
    <article className="hero" style={style}>
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
