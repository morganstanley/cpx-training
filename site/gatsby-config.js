const { plugins } = require('./src/config/base-gatsby-plugins');

module.exports = {
  siteMetadata: {
    title: `Makerspace by Morgan Stanley`,
    description: `An introduction to coding by professional software engineers`,
    siteUrl: 'https://morganstanley.github.io/makerspace/',
  },
  pathPrefix: `/makerspace`,
  plugins,
};
