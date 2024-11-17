// button
const button = document.getElementById("btn-alert");
button.addEventListener("click", () => {
    alert("Hello, world!");
})
button.addEventListener("mouseover", () => {
    document.getElementById("btn-alert").textContent="Nice to meet you!";
})
button.addEventListener("mouseout", () => {
    document.getElementById("btn-alert").textContent="Hello!";
})

// Loop

let list = document.getElementById("numbers");
for (let i = 1; i <= 12; i = i + 1) {
    let listItem = document.createElement("li");
    if (i % 2 === 0) {
        listItem.textContent = "even";
    } else {
        listItem.textContent = "odd";
    }
    list.appendChild(listItem);
}

// Footer 

const d = new Date();
console.log (d.getFullYear());
const footeryear = document.getElementById("footeryear");
footeryear.textContent = d.getFullYear();
