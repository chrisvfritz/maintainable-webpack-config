/* global describe it expect runConfig jasmine */

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
        console.log = jasmine.createSpy('log')
        require('./tmp/app')
        expect(console.log).toHaveBeenCalledWith('hello')
        done()
      })
  })
})
