
let textInput = document.getElementById("text-input");
let button = document.getElementById("my-button");
let textDisplay =
document.getElementById("text-display");


button.onclick = function(){
    let inputString = textInput.value;
    textDisplay.innerHTML = inputString;
};