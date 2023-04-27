var quiz = [	{		question: "What is the capital city of France?",	
	answers: ["Paris", "Berlin", "London", "Madrid"],
		correctAnswerIndex: 0
	},
	{
		question: "What is the highest mountain in the world?",
		answers: ["Mount Everest", "K2", "Kilimanjaro", "Matterhorn"],
		correctAnswerIndex: 0
	},
	{
		question: "What is the smallest country in the world?",
		answers: ["Vatican City", "Monaco", "Nauru", "San Marino"],
		correctAnswerIndex: 0
	}
];

var currentQuestionIndex = 0;
var resultElement = document.getElementById("result");

displayQuestion();

document.getElementById("quiz-form").addEventListener("submit", function(event) {
	event.preventDefault();
	checkAnswer();
});

function displayQuestion() {
	document.getElementById("question-box").innerHTML = quiz[currentQuestionIndex].question;
	var answerBox = document.getElementById("answer-box");
	answerBox.innerHTML = "";
	for (var i = 0; i < quiz[currentQuestionIndex].answers.length; i++) {
		var answer = quiz[currentQuestionIndex].answers[i];
		var label = document.createElement("label");
		var input = document.createElement("input");
		input.type = "radio";
		input.name = "answer";
		input.value = i;
		label.appendChild(input);
		label.appendChild(document.createTextNode(answer));
		answerBox.appendChild(label);
	}
}

function checkAnswer() {
	var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
	if (selectedAnswer == quiz[currentQuestionIndex].correctAnswerIndex) {
		resultElement.innerHTML = "Correct!";
		resultElement.style.color = "#4CAF50";
	} else {
		resultElement.innerHTML = "Wrong, the correct answer was: " + quiz[currentQuestionIndex].answers[quiz[currentQuestionIndex].correctAnswerIndex];
		resultElement.style.color = "#f44336";
	}
	currentQuestionIndex++;
	if (currentQuestionIndex < quiz.length) {
		displayQuestion();
	} else {
		document.getElementById("quiz-form").style.display = "none";
		document.getElementById("result").style.display = "none";
		document.getElementsByTagName("button")[0].style.display = "none";
		document.getElementById("question-box").innerHTML = "Quiz complete!";
	}
}

function newGame() {
	currentQuestionIndex = 0;
	document.getElementById("quiz-form").style.display = "block";
	document.getElementById("result").style.display = "block";
	document.getElementsByTagName("button")[0].style.display = "block";
	displayQuestion();
	resultElement.innerHTML = "";
}