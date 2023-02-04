function addItem() {
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById('box').value;
    newItem.onclick = removeItem;
    document.getElementById('list').appendChild(newItem);
    save();
}
function removeItem() {
    document.getElementById("list").removeChild(this);
    save();
}
function load() {
    document.getElementById('list').innerHTML = localStorage.saveList;
    for(var i=0; i< FileList.children.length; i++) {
        list.children[i].onclick = removeItem;
    }
}
function save() {
    localStorage.saveList = document.getElementById('list').innerHTML;
}
function deleteItems() {
    localStorage.box = "";
}
