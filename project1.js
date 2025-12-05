
// 1. GET ALL ELEMENT REFERENCES

let text = document.querySelector("#text");
let box = document.querySelector("#box");
let itemInput = document.querySelector("#itemInput");
let list = document.querySelector("#list");

// Buttons
let btnText = document.querySelector("#btnText");
let btnColor = document.querySelector("#btnColor");
let btnHide = document.querySelector("#btnHide");
let btnShow = document.querySelector("#btnShow");
let btnAdd = document.querySelector("#btnAdd");

// 2. BUTTON FUNCTIONALITIES USING addEventListener


// 2.1 Change Text
btnText.addEventListener("click", () => {
    text.textContent = "Text has been changed!";
});


// 2.2 Change Box Background Color
btnColor.addEventListener("click", () => {
    let randomColor = "#" + Math.floor(Math.random() * 1000000);
    box.style.backgroundColor = randomColor;
});


// 2.3 Hide Box
btnHide.addEventListener("click", () => {
    box.style.display = "none";
});


// 2.4 Show Box
btnShow.addEventListener("click", () => {
    box.style.display = "flex";
});


// 2.5 Add Item to List + save to localStorage
btnAdd.addEventListener("click", () => {
    let value = itemInput.value;

    if (!value) {
        alert("Please enter an item");
        return;
    }

    let li = document.createElement("li");
    li.textContent = value;

    list.appendChild(li);

    saveItems();   // store list permanently
    itemInput.value = "";
});



// 3. Save List Items to localStorage

let saveItems = () => {
    let items = [];

    for (let i = 0; i < list.children.length; i++) {
        items.push(list.children[i].textContent);
    }

    localStorage.setItem("myItems", JSON.stringify(items));
};



// 4. Load items when page opens

window.addEventListener("load", () => {
    let saved = localStorage.getItem("myItems");

    if (saved) {
        let items = JSON.parse(saved);

        for (let i = 0; i < items.length; i++) {
            let li = document.createElement("li");
            li.textContent = items[i];
            list.appendChild(li);
        }
    }
});
