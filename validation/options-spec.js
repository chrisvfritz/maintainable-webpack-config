/* global describe it expect */

import validateOptions from './options'

describe('minimal valid options', () => {
  it('do not raise an error', () => {
    expect(() => {
      validateOptions({
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

describe('undefined options', () => {
  it('throws an error describing missing options', () => {
    expect(() => validateOptions())
      .toThrow(new Error('missing options'))
  })
})

describe('empty options object', () => {
  it('throws an error describing the missing information', () => {
    expect(() => validateOptions({}))
      .toThrow(new Error('child "folderStructure" fails because [child "src" fails because [child "root" fails because ["root" is required]]]'))
  })
})

describe('missing dist root', () => {
  it('throws an error describing the missing information', () => {
    expect(() => {
      validateOptions({
        folderStructure: {
          src: {
            root: 'tmp'
          }
        }
      })
    }).toThrow(new Error('child "folderStructure" fails because [child "dist" fails because [child "root" fails because ["root" is required]]]'))
  })
})

describe('missing dist assets', () => {
  it('throws an error describing the missing information', () => {
    expect(() => {
      validateOptions({
        folderStructure: {
          src: {
            root: 'tmp'
          },
          dist: {
            root: 'tmp'
          }
        }
      })
    }).toThrow(new Error('child "folderStructure" fails because [child "dist" fails because [child "assets" fails because ["assets" is required]]]'))
  })
})

describe('missing env', () => {
  it('throws an error describing the missing information', () => {
    expect(() => {
      validateOptions({
        folderStructure: {
          src: {
            root: 'tmp'
          },
          dist: {
            root: 'tmp',
            assets: 'tmp'
          }
        }
      })
    }).toThrow(new Error('child "env" fails because ["env" is required]'))
  })
})

describe('env has an invalid value', () => {
  it('throws an error describing the pattern that should be matched', () => {
    expect(() => {
      validateOptions({
        folderStructure: {
          src: {
            root: 'tmp'
          },
          dist: {
            root: 'tmp',
            assets: 'tmp'
          }
        },
        env: 'foo'
      })
    }).toThrow(new Error('child "env" fails because ["env" with value "foo" fails to match the required pattern: /^(development|testing|production)$/]'))
  })
})
