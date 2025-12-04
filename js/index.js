var a =10;
console.log(a);
var b=20;
console.log(b);

function named()
{
    console.log("This is a named function");
    console.log("This is a named function");
    console.log("This is a named function");
}

named();
let functionExpression = function()
{
    console.log("This is a function expression");
    console.log("This is a function expression");
    console.log("This is a function expression");
}
functionExpression();

let arrow =()=>
{
    console.log("This is an arrow function");
    console.log("This is an arrow function");
    console.log("This is an arrow function");
}
arrow();

//call back function 
(()=>
{
    console.log("This is a call back function");
    console.log("This is a call back function");
    console.log("This is a call back function");
})();
