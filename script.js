var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); //can select a class like this
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// input is the event that reports every time a value changes

function setGradient(){
    body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")"; 
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);