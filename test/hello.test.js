/**
 * Test for the hello module.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const hello = require('../src/hello')
const expect = require('chai').expect

describe('Test the function sayHello', () => {
  it(`should return 'Hello, World!'`, done => {
    expect(hello.sayHello()).to.eql('Hello, World!')
    done()
  })
})
