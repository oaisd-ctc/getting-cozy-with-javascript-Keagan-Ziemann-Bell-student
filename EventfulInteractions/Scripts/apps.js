
function HideParagraph() {
    document.getElementById("2ndpg").style.visibility = "hidden";
}
function ShowParagraph() {
    document.getElementById("2ndpg").style.visibility = "visible";
}
function ChangeColor() {
    document.getElementById("3rdpg").style.color = document.getElementById("txt-color").value;
}
document.getElementById("btn-hide").addEventListener("click", HideParagraph);
document.getElementById('btn-show').addEventListener('click', ShowParagraph);
document.getElementById("btn-change-color").addEventListener("click", ChangeColor);