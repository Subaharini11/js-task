var colors = generateColors(3);
var correctColorIndex = Math.floor(Math.random() * 3);
var correctColor = colors[correctColorIndex];
var resultElement = document.getElementById("result");

displayColorBox();

function generateColors(numColors) {
	var colorArray = [];
	for (var i = 0; i < numColors; i++) {
		colorArray.push(generateColor());
	}
	return colorArray;
}

function generateColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function displayColorBox() {
	document.getElementById("color-box").style.backgroundColor = correctColor;
	for (var i = 0; i < colors.length; i++) {
		document.getElementById("btn" + i).style.backgroundColor = colors[i];
	}
}

function checkColor(index) {
	if (index === correctColorIndex) {
		resultElement.innerHTML = "Correct!";
		resultElement.style.color = "#4CAF50";
	} else {
		resultElement.innerHTML = "Wrong, try again!";
		resultElement.style.color = "#f44336";
	}
}

function newGame() {
	colors = generateColors(3);
	correctColorIndex = Math.floor(Math.random() * 3);
	correctColor = colors[correctColorIndex];
	displayColorBox();
	resultElement.innerHTML = "";
}