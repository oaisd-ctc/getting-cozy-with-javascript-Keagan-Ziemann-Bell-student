
function HideParagraph() {
    document.getElementById("2ndpg").style.visibility = "hidden";
}
function ShowParagraph() {
    document.getElementById("2ndpg").style.visibility = "visible";
}
function ChangeColor() {
    document.getElementById("3rdpg").style.color = document.getElementById("txt-color").value;
}
let shape = document.getElementById("shapes");
document.getElementById("dropdown").addEventListener("change", () => {
    if (document.getElementById("dropdown").value == "Circle") {
        shape.style.borderRadius = "1000px";
        shape.style.border = "unset";
        shape.style.border = " 3px solid";
        shape.style.width = "300px";
        shape.style.height = "300px";
    }
    if (document.getElementById("dropdown").value == "Square") {
        shape.style.border = "unset";
        shape.style.border = " 3px solid";
        shape.style.width = "300px";
        shape.style.height = "300px";
        shape.style.borderRadius = "0px";
    }
    if (document.getElementById("dropdown").value == "Triangle") {
        shape.style.border = "unset";
        shape.style.borderRadius = "0px";
        shape.style.width = "0px";
        shape.style.height = "0px";
        shape.style.borderLeft = "150px solid transparent"
        shape.style.borderRight = "150px solid transparent"
        shape.style.borderBottom = "150px solid red"
        shape.style.margin = "2rem";
    }
});

document.getElementById("btn-hide").addEventListener("click", HideParagraph);
document.getElementById('btn-show').addEventListener('click', ShowParagraph);
document.getElementById("btn-change-color").addEventListener("click", ChangeColor);