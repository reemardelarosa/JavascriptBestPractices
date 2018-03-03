// **Rule 1a** *When, as a Script or Module is parsed from left to right, a token (called the `offending token`) is encountered that is `not allowed` by any production of the grammar.* - EcmaScript Standards
// **Rule 1b** *The `offending token is separated from the previous token` by at least one LineTerminator* - EcmaScript Standards
// **Rule 2** *When, as the Script or Module is parsed from the left to right, the `end of the input stream` of token is encountered, then a semicolon is automatically inserted at the end of the input stream.* - EcmaScript Standards

// Example 1

var a = 12 // Rule 1a - The offending token is `v`
var b = 13 // Rule 1a - The offending token is `i`

if(a){console.log(a)} // Rule 1b -  The offending token is `}`

console.log(a+b) // Rule 2 - End of input stream.

// Example 2

var a = 12 // Rule 1a
var b = 13 // Rule 1a
var c = a + b

['string1', 'string2', 'string3']
    .forEach(function(element) {
        console.log(element); // Rule 1b
    });

// Example 3

var a = 12
var b = 13
var c = a + b // The offending token is `(`

(function(){
    console.log('inside my life');
    console.log('doing secret stuff');
}())

// Example 4
function getObject()
{
    if(thisIsTrue)
    {
        return // Rule 3
        {
            hi: 'hello'
        }
    }
}