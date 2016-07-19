/* global describe it expect */

import { Joi } from 'webpack-validator'
import { buildConfig, buildSchemaExtensions } from './main'

const baseOptions = {
  folderStructure: {
    src: {
      root: 'tmp'
    },
    dist: {
      root: 'tmp',
      assets: 'tmp'
    }
  }
}

describe('buildConfig', () => {
  it('builds an object', () => {
    const config = buildConfig(baseOptions)
    expect(config instanceof Object).toBe(true)
  })

  it('merges the webpack object with the base schema', () => {
    const config = buildConfig({
      ...baseOptions,
      webpack: {
        entry: {
          foo: 'bar'
        },
        baz: 'boo'
      }
    })
    expect(config.baz).toBe('boo')
    expect(config.entry.foo).toBe('bar')
    expect(config.entry.app).toMatch(/tmp\/main\.js$/)
  })
})

describe('buildSchemaExtensions', () => {
  it('builds an empty Joi object by default', () => {
    const schema = buildSchemaExtensions(baseOptions)
    expect(schema).toEqual(Joi.object({}))
  })

  it('adds the schema whitelist to the options object', () => {
    const schema = buildSchemaExtensions({
      ...baseOptions,
      schemaWhitelist: ['foo', 'bar']
    })
    expect(schema).toEqual(Joi.object({
      foo: Joi.any(),
      bar: Joi.any()
    }))
  })
})
