const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? 'https://cj179john.github.io/nextjs-test/' : './',
    //assetPrefix: isProd ? 'http://127.0.0.1:5500/out/' : './',
  }