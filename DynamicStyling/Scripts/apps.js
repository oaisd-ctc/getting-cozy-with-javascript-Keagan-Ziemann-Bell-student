let text = document.getElementById("text");
document.getElementById("dropdown").addEventListener("change", () => {
    if (document.getElementById("dropdown").value == "blue") {
        text.classList.toggle("blue");
        text.classList.remove("red");
        text.classList.remove("green");
    }
    if (document.getElementById("dropdown").value == "green") {
        text.classList.toggle("green");
        text.classList.remove("red");
        text.classList.remove("blue");
    }
    if (document.getElementById("dropdown").value == "red") {
        text.classList.toggle("red");
        text.classList.remove("blue");
        text.classList.remove("green");
    }
});