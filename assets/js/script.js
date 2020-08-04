//var addBtn = document.querySelector("#add-btn");
var startButton = document.querySelector("#start");

var quizQuestions = document.getElementById("quiz");

var resultqQuestions = document.getElementById("answers");

var submitButton= document.getElementById("submit");
var quiz=["question1","question2", "question3", "question4"];
var allAnswers= ["answers1", "answers2","answers3", "answers4"];
var correctAnswer1 = "c";
var correctAnswer2 = "a";
var correctAnswer3 = "b";
var correctAnswer4 = "b";


//playButton.addEventListener("click",countdown);
var timeLeft = 30;
    var elem = document.getElementById("some_div");
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        //doSomething();
      } else {
        elem.innerHTML = timeLeft + "  seconds remaining";
        timeLeft--;
      }
    };
    var ul = document.createElement("ul");
  
    var button = document.createElement("some_div");
    button.textContent = "Timer";

    ul.appendChild(button);
    elem.appendChild(ul);








  var allQuestions=[ 
    
 {   question1: "What is an array?",

answers1:{
    a: "Creates copies of objects in a pattern",
    b: "Is a formula that can perform multiple calculations",
    c: "Single objects that contain multiple values stored in a list",
},
correctAnswer1: "c"
 },
{
question2: "What is an string?",
answers2 :{
    a: "A line of text",
    b: "A slender cord or thick used for binding or tying",
    c: "A series of things arranged or connected in a line",
},
correctAnswer2: "a"
},
{
question3: " Which is the comparison operator for is not identical to?",
answers3:{
    a: "!*=",
    b: "!==",
    c: "!=",
},
correctAnswer3: "b"
},
{
  question4: "What is the definition of an argument" ,
answers4:{
    a: "An exchange of diverging or opposite views",
    b: "Is a local variable available within all non -arrow functions",
    c: "Is a value that must be provided to obtain the functions result",
},
correctAnswer4: "b"
},
];

function renderAllquestions(){
    renderAllquestions();
}
renderAllquestions.innerHTML = "";
  quiz.textContent = quiz.length;

  function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var quiz = JSON.parse(localStorage.getItem("quiz"));
    var allAnswers = JSON.parse(localStorage.getItem("allAnswers"));
    var correctAnswer1 = JSON.parse(localStorage.getItem("correctAnswer1"));
    var correctAnswer2 = JSON.parse(localStorage.getItem("correctAnswer2"));
    var correctAnswer3 = JSON.parse(localStorage.getItem("correctAnswer3"));
    var correctAnswer4 = JSON.parse(localStorage.getItem("correctAnswer4"));

    if (storedQuiz !== null) {
        quiz = storedQuiz;
      }
      if (storedAllanswers !== null) {
        allAnswers = storedAllanswers;
      }
      if (storedCorrectAnswer1 !== null) {
        correctAnswer1 = storedCorrecAnswer1;
      }
      if (storedCorrectAnswer2 !== null) {
        correctAnswer2 = storedCorrecAnswer2;
      }
      if (storedCorrectAnswer3 !== null) {
        correctAnswer3 = storedCorrecAnswer3;
      }
      if (storedCorrectAnswer4 !== null) {
        correctAnswer4 = storedCorrecAnswer4;
      }
      renderAllquestions();
    }



  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("quiz", JSON.stringify(quiz));
  localStorage.setItem("allAnswers", JSON.stringify(allAnswers));
  localStorage.setItem("correctAnswer1", JSON.stringify(correctAnswer1));
  localStorage.setItem("correctAnswer2", JSON.stringify(correctAnswer2));
  localStorage.setItem("correctAnswer3", JSON.stringify(correctAnswer3));
  localStorage.setItem("correctAnswer4", JSON.stringify(correctAnswer4));
  
    allAnswersForm.addEventListener("submit", function(event) {
        event.preventDefault();
      
        var allAnswersText = allAnsewrsInput.value.trim();
       


function buildQuiz(){
    
    // variable to store the HTML output
    for (var i = 0; i < allQuestions.length; i++) {
        var output = allQuestions[i];
    };

  
    // for each question...
    for (var i = 0; i < question1; i++) {
        var one = question1[i];
    };
    for (var i = 0; i < question2; i++) {
        var two = question2[i];
    };

    for (var i = 0; i < question3; i++) {
        var three = question3[i];
    };

    for (var i = 0; i < question4; i++) {
        var four = question4[i];
    };


    //allQuestions.forEach(
      //(currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        for (var i = 0; i < allAnswers.length; i++) {
            var answers = allAnswers[i];
        }
    
  
        // and for correct answer...
        for (var i = 0; i < answers1.correctAnswer1; i++) {
            var cAnswer1 = correctAnswer1[i];
        }

    for (var i = 0; i < answers2.correctAnswer2; i++) {
        var cAnswer2 = correctAnswer2[i];
    }

for (var i = 0; i < answers3.correctAnswer3; i++) {
    var cAnswer3 = correctAnswer3[i];
}

for (var i = 0; i < answers4.correctAnswer4; i++) {
    var cAnswer4 = correctAnswer4[i];
};




   // show question
   var element = document.getElementById(".quiz");
   element.innerHTML = quiz.getQuestionIndex().text;


  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${question1}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          ),
          
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("output")} </div>`
        );
    

  
    // finally combine our output list into one string of HTML and put it on the page
    quizQuestions.innerHTML = output.join("answers");
  };

  



function showResults(){

    // gather answer containers from our quiz
    var answerQuestions = quizQuestions.querySelectorAll("answers");
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    answerQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      var answerQuestions = answerQuestions[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerQuestions.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerQuestions[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerQuestions[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${allQuestions.length}`;
  };


// Event listeners
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

//var j= allQuestions
  //var li = document.createElement("li");
  //li.textContent = allQuestions;
  //li.setAttribute("data-index", j);

