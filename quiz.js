
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getDatabase , set, ref ,push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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





  /////////////////////////////////////////////////////////////////
  var Question = document.getElementById("Question");
  var options = document.getElementById("iptOption");
  var optionParents = document.getElementById("pOptions");
  var  correctAnswer = document.getElementById("CorrectAnswer");


   var ArrayOptions = []
   var correctOption ;
function renderOptions(){
    optionParents.innerHTML = " "
    for( var i = 0 ; i<ArrayOptions.length ; i++){
        optionParents.innerHTML += `
        <li onclick="setCorrectAnswer('${ArrayOptions[i]}')" class="p-2 bg-light fs-5 w-100 ms-2 rounded my-2 ">${ArrayOptions[i]}</li>`
    }
}

  window.AddOption = function () {
     ArrayOptions.push(options.value)
     console.log(ArrayOptions)
     renderOptions()
  }

  window.setCorrectAnswer = function (a) {
   correctOption = a ; 
   correctAnswer.innerHTML = correctOption
  }

  window.submitOption = function (){
    var obj ={
        Question : Question.value,
        ArrayOptions : ArrayOptions ,
        correctOption : correctOption
    }
   obj.id = push(ref(db ,'Questions/')).key;
    const reference = ref(db ,`Questions/${obj.id}`)
    set(reference , obj)



    
    console.log(obj)
  }