
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getDatabase , set, ref , push ,onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCT53_RvKFTUZBORC9MowN4Gp1uKDVm7Iw",
    authDomain: "quiz-application-database.firebaseapp.com",
    projectId: "quiz-application-database",
    storageBucket: "quiz-application-database.appspot.com",
    messagingSenderId: "644107031546",
    appId: "1:644107031546:web:44a8e0dd7a97a5d3934a43"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase()



function getDatafromDatabase(){
    const reference =ref(db ,'Questions/');
    onChildAdded(reference , function (data){
    console.log(data.val());
    Questions.push(data.val());
    renderData()
    }) 
}
getDatafromDatabase()



var Questions =[
    {
        question :'Which of the following is a storage device?',
        options : ['Hard Disk', 'USB Disk','Floppy Disk','All of the above'],
        correctOption : 'All Of the above'
    },
    {
        question :' Which of the following software is used to view web pages?',
        options : ['Web Browser','page Browser','Internet Browser','All of the above'],
        correctOption : 'Web Browser'
    },
    {
        question :'Speedometer is an example of ____________ computers.',
        options : ['Hybrid','Digital','Analog','None of them'],
        correctOption : 'Analog'
    },
    {
        question :' Vacuum tubes was used in ___________________ generation.',
        options : ['First','Second','Third','Fourth'],
        correctOption : 'First'
    },
    {
        question :' Collection of 1024 Bytes:',
        options : ['1MB','1GB','1KB','1TB'],
        correctOption : '1KB'
    },
    {
        question :' A Bit Stands for:',
        options : ['Binary Digit','Binary Data','Binary Deci','None of them'],
        correctOption : 'Binary Digit'
    },
    {
        question :'________ is used to communicate from one city to another.',
        options : ['LAN','MAN','WAN','None of them'],
        correctOption : 'WAN'
    },
    {
        question :'Which of the following performs arithmetic and logical operations?',
        options : ['Control Unit','Arithmetic Logic Unit','I/O Unit','Registers'],
        correctOption : 'Arithmetic Logic Unit'
    },
     {
        question :'WWW stands for:',
        options : ['World Worm Web','World Wide Web','World Word Web','None of the above'],
        correctOption : 'World Wide Web'
    },
]


var currentQuestion = document.getElementById("currentQ");
var totalQuestion = document.getElementById("totalQ");
var showQuestion = document.getElementById("shownQ");
var parentOfAnswers = document.getElementById("parentOfAnswers");

var score = 0
var indexNum = 0 ;

function renderData(){
    currentQuestion.innerHTML = indexNum + 1;
    totalQuestion.innerHTML =  Questions.length;
    var object = Questions[indexNum];
    showQuestion.innerHTML =  object.question;


    parentOfAnswers.innerHTML = " " ;   
      
    for(var i = 0 ; i < object.options.length ; i++)
    { parentOfAnswers.innerHTML += 
        `<div class="col-md-6">
        <div class=" text-center py-2">
          <button onclick="checkQuestion('${object.options[i]}','${object.correctOption}')" class="btn btn-danger py-2 fs-5 rounded-4 w-100">
          ${object.options[i]}
          </button>
        </div>
      </div>`

}
}
renderData() 


window.checkQuestion = function (x,y){
    if (x == y){
        score++
        console.log(score)
    }
    nextQuestion()
}


window.nextQuestion = function () {
    if(indexNum + 1 == Questions.length ){
        alert("Your score is" + score)
    }
    else {
    indexNum++
    renderData()
}
}