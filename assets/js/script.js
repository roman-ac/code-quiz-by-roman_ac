

var timeEl = document.querySelector ("#count");
var scoresEl = document.querySelector (".scores");
var startquizEl = document.querySelector (".startquiz");
var descriptionEl = document.querySelector(".description");
var startquizEl = document.querySelector(".startquiz");
var allanswersEl = document.querySelector(".allanswers");
var answersEl = document.querySelector(".answer");
var restartEl = document.querySelector(".restart");
var scorebtnEl = document.querySelector(".scorebtn");





var Questionaire = [
    {
        question : "Who's the founder of JavaScript?",
        answer1 : "Roman_Ac",
        answer2 : "Brendan_Smith",
        answer3 : "David_Swarbrick",
        answer4 : "Brendan_Eich",
        correct : "Brendan_Eich",
    },
    {
        question : "What does NaN stands for?",
        answer1 : "Not available Now",
        answer2 : "Not a Number",
        answer3 :"Not a Noun",
        answer4 :"Name after Name",
        correct : "Not a Number",
    },
    {
        question : "which of the following data type is not supported by JS?",
        answer1 : "Random",
        answer2 : "Number",
        answer3 :"Boolean",
        answer4 :"String",
        correct : "Random",   
    }
    
]

var questionEl = document.querySelector (".question");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var answerC = document.querySelector("#C");
var answerD = document.querySelector("#D");



var currentquestion = 0;
var lastquestion = Questionaire.length -1;
var score = 0;
var timer;

scorebtnEl.setAttribute("style", "display:none;");
restartEl.setAttribute("style", "display:none;");

function ShowQuestion () {

    questionEl.innerHTML = Questionaire[currentquestion].question;
    answerA.innerHTML = Questionaire[currentquestion].answer1;
    answerB.innerHTML = Questionaire[currentquestion].answer2;
    answerC.innerHTML = Questionaire[currentquestion].answer3;
    answerD.innerHTML = Questionaire[currentquestion].answer4;    


    descriptionEl.setAttribute("style", "display:none;");
    startquizEl.setAttribute("style", "display:none;");
    scorebtnEl.setAttribute("style", "display:none;");
    restartEl.setAttribute("style", "display:none;");
    allanswersEl.setAttribute("style", "display:inline-block");

    
    };


startquizEl.addEventListener ('click', startQuiz);

var timeLeft = 30;
var timerInterval;

function startQuiz () {

    currentquestion = 0;
    score = 0;
    timeLeft = 30;
    
ShowQuestion ();
CheckAnswer();

timerInterval = setInterval (function () {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
    
}
}, 1000);
};

 

var answer;
    
 function CheckAnswer (answer) {


    allanswersEl.addEventListener ('click', function(event){

        answer = event.target.textContent;
        console.log (answer);
        console.log(Questionaire[currentquestion].correct);

       if (answer == Questionaire[currentquestion].correct) {
           score++;
           console.log("score " + score);

       } else {
            timeLeft -= 10;
    } 
    

      if (currentquestion < lastquestion) {

        currentquestion += 1;
        ShowQuestion();
      } else {
        timeEl.textContent = '';
        clearInterval(timerInterval);
        showScore();

    }

        })
        };


function showScore () {

    var player = prompt ("please enter your name.");
    var scoreBoard = player + (" : ") + score;
    console.log(scoreBoard);

    scorebtnEl.setAttribute("style", "display:inline-block;");
    restartEl.setAttribute("style", "display:inline-block;");
    allanswersEl.setAttribute("style", "display:none;");


    questionEl.innerHTML = player + (", your score is");
    restartEl.innerHTML = ("Restart");
    scorebtnEl.innerHTML = score + (" out of 3");

    localStorage.setItem("score", scoreBoard);

    restartEl.addEventListener ('click', function() {
        startQuiz();
    })    
    

};    


scoresEl.addEventListener ('click',function() {

displayScore();
})

function displayScore() {

    var list = document.createElement("li");
    list.textContent = localStorage.getItem("score");
    
    
    var board = document.getElementById("highScores");

    board.appendChild(list);
    console.log(list);

}
    
    







