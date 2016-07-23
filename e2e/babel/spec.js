/* global describe it expect runConfig jasmine */

import path from 'path'

describe('babel', () => {
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

  it('works with esnext features down to stage-2', done => {
    runConfig(config)
      .then(() => {
        console.log = jasmine.createSpy('log')
        require('./tmp/app')
        expect(console.log).toHaveBeenCalledWith('0,1,2,3,4,5,6,7,8,9')
        done()
      })
  })
})
