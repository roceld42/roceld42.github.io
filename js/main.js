// button
const d = new Date();
const buttondate = document.getElementById("buttondate");
buttondate.addEventListener("click", () => {
    if (d.getHours() <= 11) {
        alert("Good Morning!");
    }
    else if (d.getHours() <18) {
        alert("Good Afternoon!") 
    }
    else {
        alert("Good Evening!");
    }
})

if (d.getHours() <= 11) {
    buttondate.style.backgroundColor = "#ffff80";
}
else if (d.getHours() <18) {
    buttondate.style.backgroundColor = "#ff941a";
    buttondate.style.color = "#ffffff";
}
else {
    buttondate.style.backgroundColor = "#0050c7";
    buttondate.style.color = "#ffffff";
}

buttondate.addEventListener("mouseover", () => {
    if (d.getHours() <= 11) {
        buttondate.style.backgroundColor = "#ccc500";
    }
    else if (d.getHours() <18) {
        buttondate.style.backgroundColor = "#bd5b00";
    }
    else {
        buttondate.style.backgroundColor = "#002966";
    }
})

buttondate.addEventListener("mouseout", () => {
    if (d.getHours() <= 11) {
        buttondate.style.backgroundColor = "#ffff80";
    }
    else if (d.getHours() <18) {
        buttondate.style.backgroundColor = "#ff941a";
    }
    else {
        buttondate.style.backgroundColor = "#0050c7";
    }
})

// Footer 

console.log (d.getFullYear());
const footeryear = document.getElementById("footeryear");
footeryear.textContent = d.getFullYear();