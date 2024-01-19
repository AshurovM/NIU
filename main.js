const paragraph = document.querySelectorAll(".item>p")
const text = document.querySelectorAll(".items>.item")
const items = document.querySelectorAll(".items>.desc")
const minus = document.querySelectorAll(".item>.minus")
const plus = document.querySelectorAll(".item>.plus")
paragraph.forEach((p, i) => {
    const span = document.createElement("span");
    span.textContent = i + 1 + '. '
    p.prepend(span)
})
text.forEach((item, i) => {
    item.addEventListener("click", () => {
        plus[i].classList.toggle("hidden");
        minus[i].classList.toggle("hidden");
        items[i].classList.toggle("active");
    });
})