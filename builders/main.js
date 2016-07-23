import validateWebpackConfig, { Joi } from 'webpack-validator'
import merge from 'webpack-merge'

import validateOptions from '../validation/options'
import buildBase from './base/base'
import buildFeatureBabel from './features/loaders/babel'
import buildEnv from './envs/env'

export const buildConfig = options => {
  return merge.smart(
    buildBase(options),
    buildFeatureBabel(options),
    buildEnv(options),
    options.webpack
  )
}

// TODO: Will also have to extend the schema for features
export const buildSchemaExtensions = options => {
  if (!options.schemaWhitelist) return Joi.object({})
  const whiteListObject = options.schemaWhitelist
    .map(key => {
      return { [key]: Joi.any() }
    })
    .reduce((a, b) => merge({}, a, b))
  return Joi.object(whiteListObject)
}

export default options => {
  validateOptions(options)

  return validateWebpackConfig(
    buildConfig(options),
    {
      schemaExtension: buildSchemaExtensions(options),
      quiet: true
    }
  )
}
