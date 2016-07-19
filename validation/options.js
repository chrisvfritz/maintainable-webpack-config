import { Joi } from 'webpack-validator'
import merge from 'webpack-merge'

export default options => {
  if (typeof options !== 'object') {
    throw new Error('missing options')
  }

  const optionsSchema = {
    folderStructure: {
      src: {
        root: Joi.string().required()
      },
      dist: {
        root: Joi.string().required(),
        assets: Joi.string().required()
      }
    },
    env: Joi.string()
      .regex(/^(development|testing|production)$/).required(),
    webpack: Joi.object(),
    schemaWhitelist: Joi.array().items(Joi.string())
  }

  const optionsSkeleton = merge({
    folderStructure: {
      src: {},
      dist: {}
    },
    webpack: {}
  }, options)

  Joi.validate(optionsSkeleton, optionsSchema, error => {
    if (error) throw error
  })
}
