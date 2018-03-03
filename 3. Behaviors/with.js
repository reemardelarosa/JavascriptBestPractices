'use strict'; // this will detect the with operator

var obj = {
    a: {
        b :{
            c: 'Hello'
        }
    }
};

var c  = 'this is important!';

// with(obj.a.b) {
//     console.log(c);
// }

(function(newVar) {
    console.log(newVar);
})(obj.a.b.c);

// console.log(obj.a.b.c);