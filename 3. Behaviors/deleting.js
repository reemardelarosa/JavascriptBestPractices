'use strict';

var obj = {a: 100, b: 200},
    myVar = 10;

delete obj.a; // working
delete myVar; // failing
delete obj; // failing
console.log(obj);
console.log(myVar);