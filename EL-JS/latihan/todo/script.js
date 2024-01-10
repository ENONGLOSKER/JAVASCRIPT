let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container"); 

function addTask() {
    if (inputBox.value === '') {
        alert("Input task tidak boleh kosong!");
    } else {
        // add and read
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // tombol hapus
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else{
        if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}nm 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();