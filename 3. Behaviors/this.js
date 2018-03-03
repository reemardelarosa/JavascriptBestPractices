'use strict';

var obj = {
    val: 'Hi there',
    printVal: function() {
        console.log(this);
        console.log(this.val);
    }
};

var obj2 = {
    val: 'Whats up'
};

var print = obj.printVal.bind(obj2);

// obj2.printVal = obj.printVal;

// obj.printVal(); // `this` is obj
// obj2.printVal(); // `this` is obj2
print(); // this is global scope