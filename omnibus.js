let container = document.getElementById("container");
let dropdown = document.getElementById("dropdown");
let items = dropdown.querySelectorAll(".option");

container.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
});

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        container.textContent = e.target.textContent;
        items.forEach((item) => {
            item.classList.remove("selected");
        })
        item.classList.add("selected");
        dropdown.classList.toggle("hidden");
    })
})

document.addEventListener("click", (e) => {
    if(e.target !== container && e.target !== dropdown) {
        dropdown.classList.add("hidden");
    }
})