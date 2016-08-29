/**
 * Test for the hello module.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict';

let hello = require('../src/hello');
let expect = require('chai').expect;

describe('Test the function sayHello', function() {
    it('sayHello(); should return \'Hello, World!\'', function(done) {
        expect(hello.sayHello()).to.eql('Hello, World!');
        done();
      });
  });
