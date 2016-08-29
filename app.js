/**
 * Starting  point of the application.
 *
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

// Get the module "hello". Using ./ to indicate that it is placed in this subdirectory.
let hello = require('./src/hello');

// Call the function "sayHello" without any arguments and save the result in the variable "greeting".
let greeting = hello.sayHello();

// Print the result to the terminal (console).
console.log(greeting);
