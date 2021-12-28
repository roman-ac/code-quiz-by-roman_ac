

var timeEl = document.querySelector ("#count");
var scoresEl = document.querySelector ("#highScores");
var startquizEl = document.querySelector (".startquiz");
var descriptionEl = document.querySelector(".description");
var startquizEl = document.querySelector(".startquiz");
var allanswersEl = document.querySelector(".allanswers");
var answersEl = document.querySelector(".answer");



var Questionaire = [
    {
        question : "Who's the founder of JavaScript?",
        answer1 : "Roman_Ac",
        answer2 : "Brendan_Smith",
        answer3 : "David_Swarbrick",
        answer4 : "Brendan_Eich",
        correct : 4
    },
    {
        question : "What does NaN stands for?",
        answer1 : "Not available Now",
        answer2 : "Not a Number",
        answer3 :"Not a Noun",
        answer4 :"Name after Name",
        correct : "Not a Number",
    }
]

var questionEl = document.querySelector (".question");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var answerC = document.querySelector("#C");
var answerD = document.querySelector("#D");





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

    questionEl.textContent = Questionaire[0].question;
    answerA.textContent = Questionaire[0].answer1;
    answerB.textContent = Questionaire[0].answer2;
    answerC.textContent = Questionaire[0].answer3;
    answerD.textContent = Questionaire[0].answer4;    


    descriptionEl.setAttribute("style", "display:none;");
    startquizEl.setAttribute("style", "display:none;");
    allanswersEl.setAttribute("style", "display:inline-block");
    
    }

    var score = 0;

 CheckAnswer();
    
 function CheckAnswer (answer) {

    answersEl.addEventListener ("click", function () {


        if (answer == Questionaire[0].correct) {
            score++;
        } else {
            timeLeft -= 10;
        }}
        
    )} 





