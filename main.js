"use strict";

const Singleton = require('./singleton');

let a = new Singleton();
let b = new Singleton();
let c = Singleton.getInstance();
let d = Singleton.getInstance();

console.log('Instances are equal:', a === b && b === c && c === d);