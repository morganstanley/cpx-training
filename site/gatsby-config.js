const { plugins } = require('./src/config/base-gatsby-plugins')

module.exports = {
  siteMetadata: {
    title: `Makerspace by Morgan Stanley`,
    description: `An introduction to coding by professional software engineers`,
    siteUrl: 'https://morgan-stanley.github.io/cpx-training/',
  },
  pathPrefix: `/cpx-training`,
  plugins,
}
