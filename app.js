/**
 * The starting  point of the application.
 *
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

// Get the module "hello". Using ./src/ to indicate that it is
// placed in a subdirectory of this directory.
const hello = require('./src/hello')

// Call the function "sayHello" without any arguments and save the
// return value in the variable "greeting".
let greeting = hello.sayHello()

// Print the value of the variable "greeting" to the terminal (console).
console.log(greeting)
