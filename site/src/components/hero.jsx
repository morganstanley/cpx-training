import React from 'react';

function Hero({
  title,
  subtitle,
  image = '../images/circuitplaygroundexpress.jpg',
}) {
  const backgroundStyle = {
    backgroundImage: image,
  };

  return (
    <article className="hero" style={backgroundStyle}>
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
