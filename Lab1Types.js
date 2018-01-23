//Basic types in Typescript
var num = 5;
console.log("Value of num is: " + num);
var firstName = 'Ultan';
console.log("Value of firstName is: " + firstName);
var bool = true;
console.log("Value of bool is: " + bool);
var list = [1, 2, 3];
console.log("Value of list[1] is: " + list[1]);
var tuple = ["hello", 1];
console.log("Value of tuple[1] is: " + tuple[1]);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
console.log("Value of color[0] is: " + color[0]);
var notsure = "a";
console.log("Value of notsure is: " + notsure);
var n = null;
console.log("Value of n is: " + n);
var u = undefined;
console.log("Value of u is: " + u);
var v = undefined;
console.log("Value of v is: " + v);
