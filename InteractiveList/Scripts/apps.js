let list = document.getElementById("list");
let deleteButton = document.getElementById("deleteButton");
document.getElementById("addItem").addEventListener('click', AddItem)
deleteButton.style.visibility = "hidden";
let hasRun = false
function AddItem() {
    deleteButton.style.visibility = "visible";
    let text = document.getElementById("text").value;
    let li = document.createElement("li");
    let newDeleteButton = deleteButton.cloneNode(true);
    if(hasRun == false) {
        deleteButton.remove();
    }
    li.textContent = text;
    list.appendChild(li);
    list.appendChild(newDeleteButton);
    hasRun = true;
    newDeleteButton.addEventListener('click', () => {
        newDeleteButton.remove();
        li.remove();
    })
}