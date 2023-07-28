
const container = document.querySelector('.container');
const questionBox = document.querySelector('.question-text');
const optionsBox= document.querySelector('.option');
const nextbtn = document.querySelector('.next-btn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');

const quiz = [ 
    
     {

        
           question:"What command do you use to output data to the screen?",
           options : [ "A. Cin" ,
           "B. Cout" ,
           "C. Output",
           "D. Input" ,],
           answer:"B. Cout",
        

     },
     {

      
            question:"Which of the following is used in EBCDIC?",
            options:[ "A. Super Computers" ,
           "B. Mainframes" ,
           "C. Machine Code",
           "D. Programming" ,],
            answer:"B. Mainframes",
            
        

     },
     {

        
        question:"Which of the following can access the server?",
        options : [ "A. Web Client" ,
          "B. User" ,
          "C. Web Browser",
          "D. Web Server" ,],
        answer:"A. Web  Client",
            
        

     },
     {

     
        question:"Which of the following is used to read HTML page & render it?",
        options : [ "A. Web server" ,
         "B. Web network" ,
         "C. Web browser",
         "D. Web matrix" ,],
        answer:"C. Web browser",
            
    

     },
     {

       
        question:" Which of the following is not javascript data types?",
        options : [ "A. Null type" ,
         "B. Undefined type" ,
         "C. Number type",
        "D. All of the mentioned" ,],
        answer:"D. All of the mentioned",
            
        

     },
];

let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;

const showQuestions = () =>{
          
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;
    console.log(questionDetails);
    
    optionsBox.textContent= "";
    for(let i=0; i<questionDetails.options.length; i++)
    {
        const currentChoice = questionDetails.options[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        optionsBox.appendChild(choiceDiv);


        choiceDiv.addEventListener('click', ()=>{
          if(choiceDiv.classList.contains('selected')){
            choiceDiv.classList.remove('selected');
          }
          else{
            choiceDiv.classList.add('selected');
          }
        })
    }

}

const checkAnswer = () =>{

          const selectedChoice = document.querySelector('.choice.selected');
          if(selectedChoice.textContent === quiz[currentQuestionIndex].answer){
            displayAlert("Correct Answer!");
            score++;
          }
          else{
            displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
          }
          currentQuestionIndex++;
          if(currentQuestionIndex < quiz.length){
            showQuestions();
          }
          else{
            showScore();
          }


}

const showScore = () =>{
  questionBox.textContent = "";
  optionsBox.textContent = "";
  scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
  displayAlert("You have completed this Quiz!");
  nextbtn.textContent = "Play Again";
  quizOver = true;
}

const displayAlert = (msg) =>{

  alert.style.display = "block";
  alert.textContent = msg;
  setTimeout(()=>{
  alert.style.display = "none";
},1000)
}

showQuestions();



nextbtn.addEventListener('click', ()=>{
  const selectedChoice = document.querySelector('.choice.selected');
  if(!selectedChoice && nextbtn.textContent === "Next"){
        displayAlert("Select your answer first");
    return;
  }
  if(quizOver)
  {
      nextbtn.textContent = "Next";
      scoreCard.textContent = "";
      currentQuestionIndex=0;
      showQuestions();
      quizOver = false;
      score = 0;
  }
  else{
  checkAnswer();
  }

});