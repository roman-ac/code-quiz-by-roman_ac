

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
        question : "What doe 123 stands for?",
        answer1 : "123",
        answer2 : "456",
        answer3 :"768",
        answer4 :"Name",
        correct : "123",   
    }
    
]

var questionEl = document.querySelector (".question");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var answerC = document.querySelector("#C");
var answerD = document.querySelector("#D");



var currentquestion = 0;
var lastquestion = Questionaire.length;
console.log (lastquestion);
var score = 0;
var timer;


function ShowQuestion () {

    questionEl.innerHTML = Questionaire[currentquestion].question;
    answerA.innerHTML = Questionaire[currentquestion].answer1;
    answerB.innerHTML = Questionaire[currentquestion].answer2;
    answerC.innerHTML = Questionaire[currentquestion].answer3;
    answerD.innerHTML = Questionaire[currentquestion].answer4;    


    descriptionEl.setAttribute("style", "display:none;");
    startquizEl.setAttribute("style", "display:none;");
    allanswersEl.setAttribute("style", "display:inline-block");

    CheckAnswer();
    
    }


startquizEl.addEventListener ("click", startQuiz);

var timeLeft = 30;

function startQuiz () {
    
ShowQuestion ();

var timerInterval = setInterval (function () {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      
}
}, 1000);
}

 

var answer;
    
 function CheckAnswer () {

    allanswersEl.addEventListener ('click', function(event){

        answer = event.target.textContent;
        console.log (answer);

       if (answer == Questionaire[currentquestion].correct) {
           score++;

       } else {
            timeLeft -= 10;
    } 

    currentquestion++;
    

      if (currentquestion < lastquestion) {
        
        ShowQuestion();
      } else {
        clearInterval(timer);

    }

        })
        }

function scoreRender () {

}     
    
    







