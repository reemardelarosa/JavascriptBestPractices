// spaghetti code
// function asyncMethod (message, cb) {
//     setTimeout(function() {
//         console.log(message);
//         cb();
//     }, 500);
// }

// asyncMethod('Open DB connection', function() {
//     asyncMethod('Find user', function() {
//         asyncMethod('validate user', function() {
//             asyncMethod('do stuff', function() {
//                 // body
//             })
//         })
//     })
// });

// Promise code - Case 1
// function asyncMethod (message, cb) {
//     return new Promise(function(fulfill, reject) {
//         setTimeout(function() {
//             console.log(message);
//             fulfill();
//         }, 500);
//     })
// }

// function findUser() {
//     asyncMethod('Find user').then(validateUser)
// }

// function validateUser() {
//     asyncMethod('validate user').then(doStuff)
// }

// function doStuff() {
//     asyncMethod('do stuff').then(function() {
//         // body
//     })
// }

// asyncMethod('Open DB connection').then(findUser);

// Promise - improved version
function asyncMethod (message, cb) {
    return new Promise(function(fulfill, reject) {
        setTimeout(function() {
            console.log(message);
            fulfill();
        }, 500);
    })
}

function findUser() {
    return asyncMethod('Find user');
}

function validateUser() {
    return asyncMethod('validate user');
}

function doStuff() {
    return asyncMethod('do stuff');
}

asyncMethod('Open DB connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function() {
        console.log('final call');
    });

