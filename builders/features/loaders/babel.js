export default options => {
  return {
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /(node_modules|bower_components)/,
          query: {
            presets: ['es2015', 'stage-2'],
            plugins: ['transform-runtime'],
            comments: false
          }
        }
      ]
    }
  }
}
