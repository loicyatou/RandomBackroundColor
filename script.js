var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("#random-button");

// remember becuase its a class selector we have to add the "." just like we would
// in CSS

function setGradient () {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function pageLoad () {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
	
}

function randomColor() {
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += Math.floor(Math.random() * 10);
	}

	return color;
}


function setRandomColor() {
	color1.value = randomColor()
	color2.value = randomColor()
	setGradient()
}

function number(){
	num = Math.floor(Math.random() * (500 + 1) + 500);
	console.log(num);
}

pageLoad()

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColor)

