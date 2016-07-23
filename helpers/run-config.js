import webpack from 'webpack'
import webpackConfig from '../index.js'

const runConfig = options => {
  const config = webpackConfig(options)
  return new Promise((resolve, reject) => {
    webpack(config, (error, stats) => {
      if (error) reject(error)
      resolve({ config, stats })
    })
  })
}

if (process.env.JASMINE_CONFIG_PATH) {
  global.runConfig = runConfig
}

export default runConfig
