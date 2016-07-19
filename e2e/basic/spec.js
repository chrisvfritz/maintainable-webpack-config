/* global describe it expect runConfig */

import path from 'path'

describe('with minimal options', () => {
  const config = {
    folderStructure: {
      src: {
        root: path.join(__dirname, 'fixtures')
      },
      dist: {
        root: path.join(__dirname, 'tmp'),
        assets: path.join(__dirname, 'tmp/assets')
      }
    },
    env: 'development'
  }

  it('compiles successfully', done => {
    runConfig(config)
      .then(() => {
        expect(() => require('./tmp/app'))
          .toThrow(new Error('hello'))
        done()
      })
  })
})
