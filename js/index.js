// var a =10;
// console.log(a);
// var b=20;
// console.log(b);

// function named()
// {
//     console.log("This is a named function");
//     console.log("This is a named function");
//     console.log("This is a named function");
// }

// named();
// let functionExpression = function()
// {
//     console.log("This is a function expression");
//     console.log("This is a function expression");
//     console.log("This is a function expression");
// }
// functionExpression();

// let arrow =()=>
// {
//     console.log("This is an arrow function");
//     console.log("This is an arrow function");
//     console.log("This is an arrow function");
// }
// arrow();

// //call back function 
// (()=>
// {
//     console.log("This is a call back function");
//     console.log("This is a call back function");
//     console.log("This is a call back function");
// })();


// const add =()=>
// {
//     let a =10;  
//     let b=20;
//     console.log("The Sum is ",a+b);
// }
// add();
// //repeat calls
// add();
// add();
// add();

// const addTwoNumbers =(num1,num2)=>
// {
//     console.log("The Sum is ",num1+num2);
// }
// addTwoNumbers(10,20);
// addTwoNumbers();

// const addMultipleNumbers =(...numbers)=>
// {
//     let sum =0;     
//     for(let number of numbers)
//     {
//         sum +=number;
//     }           
//     console.log("The Sum is ",sum);
// }
// addMultipleNumbers(10,20,30,40,50);


// var aa=10;
// console.log(typeof aa);

// var bb="Hello";
// console.log(typeof bb);

// function multiply(a, b) {
//     return a * b;
// }


// console.log("Multiplication = " + multiply(10,20));

// function divide(a, b) {
//     return a / b;
// }
// console.log("Division = " + divide(20,10));

// function subtract(a, b) {
//     return a - b;
// }
// console.log("Subtraction = " + subtract(20,10));

// let x="10";
// let y=20;

// console.log(typeof(x + y)); 

// //array

// let array = [10, 20, 30, 40, 50];
// console.log("Array Elements:");
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// let arr =[1,2,3,"ass"];
// let arrr=[1,2,3,"ass"];

// console.log(arr==arrr);
// console.log(arr===arrr);



// let arr1=[1,2,3,4,5,6];

// for(let i=0;i<arr1.length;i++)
// {
//     console.log(arr1[i]);

// }
// let arr2=[1,2,3,4,5,6];
// arr2.forEach((element,index)=>
// {
//     console.log(element,index);
// });
// let arr3=[1,2,3,4,5,6];
// arr3.map((element,index)=>
// {
//     console.log(element,index);
// });


//q1 
// function createarray(a,b,c)
// {
//     return [a,b,c];
// }

// let result =createarray(1,2,3);
// console.log(result);

// function createArrayDynamic(...values) {
//     return values;
// }

// let output = createArrayDynamic(5, 10, 15, 20, 25);
// console.log(output);

// //q2

// function stringOnly(...items) {
//     let arr = [];
//     for (let i = 0; i < items.length; i++) {
//         if (typeof items[i] === "string") {
//             arr.push(items[i]);
//         }
//     }
//     return arr;
// }

// console.log(stringOnly("a", 10, "hello", true, "js"));


// function square(...numbers) {
//     let squaredNumbers = [];    
//     for (let i = 0; i < numbers.length; i++) {
//         squaredNumbers.push(numbers[i] * numbers[i]);
//     }

//     return squaredNumbers;
// }           
// console.log(square(1, 2, 3, 4, 5));


// function evennumers(...numbers)
// {
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
//     }
//     return evenNumbers;
// }     
//     console.log(evennumers(1,2,3,4,5,6,7,8,9,10));


//     //q5

//     function touppercase(...strings)
//     {
//         let uppercasedStrings = [];
//         for (let i = 0; i < strings.length; i++) {
//             uppercasedStrings.push(strings[i].toUpperCase());
//         }
//         return uppercasedStrings;
//     }   
//     console.log(touppercase("hello","world","javascript"));

//     //q6

//    function makeUser(name, age, city)
//    {
//     return {
//         name: name,
//         age: age,
//         city: city
//     };  

//    }
//     console.log(makeUser("Alice", 30, "New York"));

//      //q7 

//      function addten(...numbers)
//      {
//         let addedNumbers = [];
//         for (let i = 0; i < numbers.length; i++) {
//             addedNumbers.push(numbers[i] + 10);
//         }
//         return addedNumbers;    
//      }
//         console.log(addten(1,2,3,4,5));

//         //q8
    
//         function fruitarray(...fruits)
//         {
//             if(fruits.length==0)
//             {
//                 return ["Apple","Banana",];
//             }
//             else{
//                 return fruits;

//             }
//         }
//         console.log(fruitarray());
//         console.log(fruitarray("Mango","Orange"));  




        //reduce method for the truthy values
//filter methdo for otr convdnien


        let a=[0,1,2,,3,,4,5,,6,7,8,9];
        let b=a.filter((value,index)=>
        {
            return index %2===1;
        });
        console.log(b);

//reduce return a single value 

  let c= a.reduce((acc,el,index)=>
  {
    console.log(acc,el);
    return acc+el;
  },200)
  console.log(c);