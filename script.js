const quizData = [
  {
    question: "What is the largest mammal on Earth?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yuan", "Euro", "Dollar", "Yen"],
    correctAnswer: "Yen"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    choices: ["Venus", "Mars", "Neptune", "Mercury"],
    correctAnswer: "Mars"
  }
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = "";

  for (const choice of currentQuestion.choices) {
    const radioBtn = document.createElement("input");
    radioBtn.type = "radio";
    radioBtn.name = "choice";
    radioBtn.value = choice;
    choicesElement.appendChild(radioBtn);

    const label = document.createElement("label");
    label.textContent = choice;
    choicesElement.appendChild(label);
    choicesElement.appendChild(document.createElement("br"));
  }
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="choice"]:checked');

  if (selectedAnswer) {
    const userAnswer = selectedAnswer.value;
    const currentQuestion = quizData[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
      score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
}

function showScore() {
  questionElement.textContent = "Quiz Completed!";
  choicesElement.innerHTML = "";
  submitButton.style.display = "none";
  scoreElement.textContent = `Your Score: ${score}/${quizData.length}`;
}

submitButton.addEventListener("click", checkAnswer);

// Load the first question on page load
loadQuestion();
