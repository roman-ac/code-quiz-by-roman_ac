var quizh1 = document.body.h1;
var para = document.body.p;
var quizbutton = document.body.button;

var quizheadEl = document.querySelector (".quizhead");
var description = document.querySelector("#description");
var buttonsq = document.querySelector (".startquiz");

quizheadEl.textContent = "JS Code Quiz Challenge";
description.textContent = "Try to answer the follwing question within the time given. Please keep in mind wrong answer is penalized by deducting 10 secs of your score time.";
buttonsq.textContent = "Start Quiz";


var timeEl = document.querySelector ("#count");
var scoresEl = document.querySelector ("#highScores");
var startquizEl = document.querySelector (".startquiz");
var question01El = document.querySelector (".question1");
var question02El = document.querySelector (".question2");
var answers01El = document.querySelector (".answers1");
var answers02El = document.querySelector (".answers2");


var firstQuestion = [
    {
        question01 : "Who's the founder of JavaScript?",
        answers01 : ["Roman_Ac", "Brendan_Smith", "David_Impey", "Brendan_Eich"],
        correct01 : 4,
    }
]

var secondQuestion = [
    {
        question02 : "What does NaN stands for?",
        answers02 : ["Not available Now", "Not a Number", "Not a Noun", "Name after Name"],
        correct02 : 2,
    }
]



var timeLeft = 30;

startQuiz();

function startQuiz () {

startquizEl.addEventListener ("click", function () {
    
ShowQuestion();

var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      
}
}, 1000);
})
}


function ShowQuestion() {

  


}



