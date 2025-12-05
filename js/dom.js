// // // tag selector

// // let t = document.getElementsByTagName("p");
// // console.log(t);

// // // class selector
// // let c = document.getElementsByClassName("a");
// // console.log(c);

// // // id selector  
// // let i = document.getElementById("b");
// // console.log(i); 
// // // query selector
// // let q = document.querySelector(".a");
// // console.log(q); 

// // // query selector all   

// // let qa = document.querySelectorAll("p");
// // console.log(qa);    

// // read and write opertaions 

// let head = document.querySelector("p");
// console.log(head.innerText);  // read operation
// head.textContent = "Hello World"; // write operation

// let div = document.querySelector("div");
// div.innerHTML = "<h1>This is heading</h1>";
// console.log(div.innerHTML);
// div.textContent = "<h1>This is heading with text comteny]</h1>";
// console.log(div.textContent);



let head  = document.querySelector("h1");
console.log(head);

head.classList.add("Color");
head.classList.remove("border");
head.classList.toggle("backgroundcolor");


//styling 

let p = document.querySelector("p");
p.style.color = "red";
p.style.backgroundColor = "yellow";
p.style.border = "2px solid black";
p.style.padding = "10px";   
p.style.fontSize = "20px";

let ul = document.createElement("ul");

let lii = document.createElement("li");   // FIXED
lii.textContent = "Item 1";
let liii = document.createElement("li");
liii.textContent = "Item 2";

ul.appendChild(liii);
ul.appendChild(lii);   // FIXED (li1 was undefined)

document.body.appendChild(ul);

let arr = ["apple", "banana", "grapes", "mango"];

arr.forEach((element) => {
    let lo = document.createElement("li");
    lo.textContent = element;
    ul.appendChild(lo);
});

