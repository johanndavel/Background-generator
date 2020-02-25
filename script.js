var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonR = document.getElementById("buttonR");





function displayBackText(){
	css.textContent = body.style.background + ";";


}

function colorRandom(){
	var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	color1.value = randomColor;
	console.log(color1.value);

	var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = randomColor;
	console.log(color2.value);
	setGradient()

}

buttonR.addEventListener("click", colorRandom);



function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value  
	+ ", " 
	+ color2.value 
	+ ")";
	displayBackText();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

window.addEventListener('load', (event) => {
  colorRandom();
 

});

