import React from 'react'

function Hero({
  title,
  subtitle,
  image = 'images/circuitplaygroundexpress.jpg',
}) {
  return (
    <article className="hero">
      <img
        src={image}
        className="background-image"
        alt="CPX Board with Lights"
      />
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
  )
}

export default Hero
