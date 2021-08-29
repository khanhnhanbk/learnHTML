obj = document.getElementById("buttonAdd");
myDiv = document.getElementById("myDiv");

addDiv = function(){
    console.log("add");
    newDiv = document.createElement("div");
    myDiv.appendChild(newDiv);
}
obj.addEventListener("click", addDiv);