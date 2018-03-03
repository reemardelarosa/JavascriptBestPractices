'use strict'; // very important

var obj = {};

Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'This var is read only'
});
obj.readOnly = 'New Value'; // can't write in the readOnly variable
console.dir(obj.readOnly);