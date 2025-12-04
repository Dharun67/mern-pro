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


const add =()=>
{
    let a =10;  
    let b=20;
    console.log("The Sum is ",a+b);
}
add();
//repeat calls
add();
add();
add();

const addTwoNumbers =(num1,num2)=>
{
    console.log("The Sum is ",num1+num2);
}
addTwoNumbers(10,20);
addTwoNumbers();

const addMultipleNumbers =(...numbers)=>
{
    let sum =0;     
    for(let number of numbers)
    {
        sum +=number;
    }           
    console.log("The Sum is ",sum);
}
addMultipleNumbers(10,20,30,40,50);

