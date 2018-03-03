var obj = function() {
    var _this = this; // save your this
    console.log(this);
    this.hello = 'hello';

    this.greet = function() {
        console.log(_this.hello);
    }

    this.delayGreeting = function() {
        // setTimeout(this.greet.bind(this), 1000);
        setTimeout(_this.greet, 1000);
    }
}

var greeter = new obj();
greeter.greet();
greeter.delayGreeting();