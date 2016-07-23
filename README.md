# Maintainable Webpack Config

Wepack configurations can quickly grow complex. That's annoying in individual projects, but when maintaining a [popular template](https://github.com/vuejs-templates/webpack/tree/dist/template/build), accidentally introducing a regression might cost thousands of developers hours of troubleshooting. This project is an experiment - an attempt to make _all of it_ testable. I'd like to provide:

## Robustness through tests and validation

Robustness is ensured by:

- providing tests for every feature of the build process
- validating all provided options through a custom validator
- validating the final produced config through webpack-validator

## Plenty of escape hatches to extend the config

``` js
var path = require('path')

module.exports = buildConfig({
  // ...
  webpack: {
    // provide additional and overriding webpack options
    plugins: new MySpecialPlugin(),
    mySpecialPluginOptions: {
      foo: 'bar'
    }
  },
  schemaWhitelist: {
    mySpecialPluginOptions: true
  }
})
```

## A simple interface for opinionated setups

I honestly don't know how I want this to look yet. Maybe like this?

``` js
var path = require('path')

module.exports = buildConfig({
  folderStructure: {
    src: {
      root: path.join(__dirname, 'src')
    },
    dist: {
      root: path.join(__dirname, 'dist'),
      assets: path.join(__dirname, 'dist/assets')
    }
  },
  env: 'production',
  features: {
    gzip: true
  }
})
```
