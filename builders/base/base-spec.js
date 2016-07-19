/* global describe it expect */

import buildBase from './base'

describe('base config with minimal valid options', () => {
  it('does not raise an error', () => {
    expect(() => {
      buildBase({
        folderStructure: {
          src: {
            root: 'tmp'
          },
          dist: {
            root: 'tmp',
            assets: 'tmp'
          }
        },
        env: 'development'
      })
    }).not.toThrow()
  })
})
