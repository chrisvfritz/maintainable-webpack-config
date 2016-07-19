import path from 'path'

export default options => {
  return {
    entry: {
      app: path.join(
        options.folderStructure.src.root,
        'main.js'
      )
    },
    output: {
      path: options.folderStructure.dist.root,
      publicPath: '/' + path.relative(
        options.folderStructure.dist.root,
        options.folderStructure.dist.assets
      ) + '/',
      filename: '[name].js'
    }
  }
}
