let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let div = document.querySelector("div");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength;

input.oninput = function() {
    count.innerHTML = maxLength - this.value.length;
    count.innerHTML === 0 ? count.classList.add("zero")
        : count.classList.remove("zero");
    progress.style.width = `${(this.value.length * 100) / maxLength}%`;
}

let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorParts = [];

for(let i = 0; i < 6; i++) {
    colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
}

let finalColor = `#${colorParts.join("")}`;

document.body.style.backgroundColor = finalColor;