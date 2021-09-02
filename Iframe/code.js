myIframe = document.getElementById("myIframe");

value = document.getElementById("cars");

console.log(value.value);

function changeSrc() {
  myIframe.src = value.value;
}
