let image = document.getElementById("move-box");
var position = image.getBoundingClientRect();
document.getElementById("btn-move-left").addEventListener("click", () => {
    position = image.getBoundingClientRect();
    image.style.transform = `translateX(${position.left - 50}px)`;
})
document.getElementById("btn-move-right").addEventListener("click", () => {
    position = image.getBoundingClientRect();
    image.style.transform = `translateX(${position.left + 50}px)`;
})