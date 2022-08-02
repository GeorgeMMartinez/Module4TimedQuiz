var startButton = document.getElementById('startBtn')
var introText = document.getElementById('intro')
const questionsLoad = document.getElementById('questionsLoad')
const optionsLoad = document.getElementById('optionsLoad')
const optionButton = document.getElementById('optionButton')
let scoreCount = document.getElementById('scoreCounter')
const quiz = document.getElementById('quiz')
const scoreButton = document.getElementById('saveScore')
const saveSpace = document.getElementById('saveSpace')
const saveLoad = document.getElementById('saveLoad')
const leaderboardText = document.getElementById('lolLeader')
const saveButton = document.getElementById('saveButton')
let savedName = document.getElementById('saved-name')
const saveAlert = document.getElementById('saveAlert')

startButton.addEventListener("click", startQuiz)


var timerEl = document.querySelector(".time");
let timeLeft = 60;
var timerInterval;

function setTime() {
  var timerInterval = setInterval(function () {
    if (timeLeft >= 0) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    };

    if (timeLeft <= 0) {
      timerEl.textContent = "Time: 0";
      clearInterval(timerInterval);
      quizQuestion.textContent = "Time is up!"
    }
  }, interval);
}

document.addEventListener("click", event => {
  if(event.target.classList.contains('options')) {
    if (event.target.dataset.options == event.target.dataset.answer) {
      score += 1
      currentQuestion += 1
      if(currentQuestion == questions.length) {
        quiz.classList.add('quizEnd')
        quiz.classList.remove('quiz')
        // finalScore()
      }
      // scoreLoad()
      loadQuiz()
    } else {
      time -= 10
    }
  }
})

let currentQuestion = 0
let score = 0

let questions = [
  { 
    question: 'Javascript is the same as Java',
    options: ['True', 'False'],
    answer: 'False'
  },
  {
    question: 'Javascript is a ____-side progamming language.',
    options: ['Client', 'Server', 'Both', 'None'],
    answer: 'Both'
  },
  {
    question: 'How do you declare a variable?',
    options: ['v variableName', 'var variableName', 'variable variableName',],
    answer: 'var variableName'
  },
  {
    question: 'How do you call a function named "myFunction?',
    options: ['call myFunction()','call function = myFunction()', 'myFunction()'],
    answer: 'myFunction()'
  },
  {
    question: 'How do you start a FOR loop?',
    options: ['for i=0, i<=5, i++', 'for (i=0; i<=5; i++)', 'for (i=0; i++)'],
    answer: 'for (i=0; i<=5; i++)'
  },
]

function loadQuiz() {


  questionsLoad.innerHTML = `
  <p class="question">${questions[currentQuestion].question}`

  optionsLoad.innerHTML = `
  <button id="optionButton" class="options" data-options='${questions[currentQuestion].options[0]}' data-answer='${questions[currentQuestion].answer}'>${questions[currentQuestion].options[0]}</button>
  <button id="optionButton" class="options" data-options='${questions[currentQuestion].options[1]}' data-answer='${questions[currentQuestion].answer}'>${questions[currentQuestion].options[1]}</button>
  <button id="optionButton" class="options" data-options='${questions[currentQuestion].options[2]}' data-answer='${questions[currentQuestion].answer}'>${questions[currentQuestion].options[2]}</button>
  <button id="optionButton" class="options" data-options='${questions[currentQuestion].options[3]}' data-answer='${questions[currentQuestion].answer}'>${questions[currentQuestion].options[3]}</button>
  `
}

function startQuiz() {
  startButton.removeEventListener("click", startQuiz)

  setInterval(timeCounter, 1000)

  questionsLoad.innerHTML = `
  <p class="question">${questions[currentQuestion].question}`

  optionsLoad.innerHTML = `
  <button id="optionButton" class="options" data-options='${questions[currentQuestion].options[0]}' data-answer='${questions[currentQuestion].answer}'>${questions[currentQuestion].options[0]}</button>
  <button id="optionButton" class="options" data-options='${questions[currentQuestion].options[1]}' data-answer='${questions[currentQuestion].answer}'>${questions[currentQuestion].options[1]}</button>
  <button id="optionButton" class="options" data-options='${questions[currentQuestion].options[2]}' data-answer='${questions[currentQuestion].answer}'>${questions[currentQuestion].options[2]}</button>
  <button id="optionButton" class="options" data-options='${questions[currentQuestion].options[3]}' data-answer='${questions[currentQuestion].answer}'>${questions[currentQuestion].options[3]}</button>
  `
}

const timeCounter = () => {
  timeLeft -= 1
  timeLeft.textContent = `Time Left: ${timeLeft}s`
  if (timeLeft === 0) {

    timeLeft.classList.remove('timeLeft')
    quizBox.classList.add('quizEnd')
    quizBox.classList.remove('quiz')
    lose.innerHTML = `<p class="lose">YOU LOSE!</p>
        <button onClick="window.location.reload();" class="tryAgain">Try Again?</button>`
    timeHaha.innerHTML = `<h4 class="timeOut" id="timeLeft">Time Left: 0</h4>`

  }
}
