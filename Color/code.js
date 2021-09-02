inputBgColor = document.getElementById("bgColor");
inputTextColor = document.getElementById("textColor");
myDiv = document.getElementById("myDiv");

function changeBackgroundColor() {
  console.log("changeBackgroundColor");
  myDiv.style.backgroundColor = inputBgColor.value;
}

function changeTextColor() {
  console.log("changeTextgroundColor");
  myDiv.style.color = inputTextColor.value;
}

// inputBgColor.addEventListener("change", changeBackgroundColor);
inputBgColor.addEventListener("input", changeBackgroundColor);
inputTextColor.addEventListener("input", changeTextColor);