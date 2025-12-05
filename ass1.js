function changeText() {
    var text = document.getElementById("text");
    text.textContent = "Text has been changed!";

}

function changeColor() {
    var box = document.getElementById("box");
    var randomColor = "#" + Math.floor(Math.random() * 1000000);
    box.style.backgroundColor = randomColor;
}

function hideBox() {
    var box = document.getElementById("box");
    box.style.display = "none";
}

function showBox() {
    var box = document.getElementById("box");
    box.style.display = "flex";
}

function addItem() {
    var input = document.getElementById("itemInput");
    var value = input.value;

    if (value === "") {
        return;
    }

    var li = document.createElement("li");
    li.textContent = value;

    var list = document.getElementById("list");
    list.appendChild(li);

    input.value = "";
}
