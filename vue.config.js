module.exports = {
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
