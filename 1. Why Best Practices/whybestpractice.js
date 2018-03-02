// Is this true?

var x = 10;
var y = "10";
if (x == y) {
    console.log("Is this true?");
    console.log("x == y", x == y); // true
    console.log("x === y", x === y); // false
}

// Will this work?
function working()
{
    return {
        x: 3,
        y: 4
    }
}

function notWorking()
{
    return
    {
        x: 3,
        y: 4
    }
}
console.log("Will this work?");
console.log(working.toString());
console.log(working());
console.dir(notWorking.toString());
console.log(notWorking());