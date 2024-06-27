var input = document.getElementById("inp-box")
var listContainer = document.getElementById("list-container")

function addTask(){
    if(input.value === ""){
        alert("Please write Something")
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        li.querySelector("span").addEventListener("click" , remove);
        function remove() {
            li.remove();
        }
    }
    input.value = "";
}