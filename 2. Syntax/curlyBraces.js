// Example 1 - Wrong
function service()
{
    var get = function()
    {
        console.log('get');
    }
    var set = function() {
        console.log('set');
    }
    return // Restricted Production - continue, break, return, or throw
    { 
        get: get,
        set: set
    }
}

// Example 2 - Right
function service() {
    var get = function() {
        console.log('get');
    };
    var set = function() {
        console.log('set');
    };
    return {
        get: get,
        set: set
    }
}