
function HideParagraph() {
    document.getElementById("2ndpg").style.visibility = "hidden";
}
function ShowParagraph() {
    document.getElementById("2ndpg").style.visibility = "visible";
}
document.getElementById("btn-hide").addEventListener("click", HideParagraph);
document.getElementById('btn-show').addEventListener('click', ShowParagraph);