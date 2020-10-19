module.exports = {
  publicPath: process.env.PUB_PATH || '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('tailwindcss')('tailwind.config.js'),
          require('autoprefixer')()
        ]
      }
    }
  }
}
