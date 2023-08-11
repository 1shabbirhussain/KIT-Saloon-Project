
//Firebase:
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
    import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

  
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    const firebaseConfig = {
      apiKey: "AIzaSyBR2aNTD_d9zHl_YiBpSPvK2ZBQcmPqFZ8",
      authDomain: "saamsbeautysalon-1a6de.firebaseapp.com",
      databaseURL: "https://saamsbeautysalon-1a6de-default-rtdb.firebaseio.com",
      projectId: "saamsbeautysalon-1a6de",
      storageBucket: "saamsbeautysalon-1a6de.appspot.com",
      messagingSenderId: "866144451017",
      appId: "1:866144451017:web:c392c05b6412b570975018",
      measurementId: "G-N5KLDYBNW3"
    };
    
   // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// db init
const db = getDatabase()
//Form DAta

var username = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var subject = document.getElementById('Subject');
var textarea = document.getElementById('textarea');

window.getData=function(){
  
    if( username.value == '' || email.value == '' || phone.value == '' || subject.value == '' || textarea.value == ''){
        alert('Please fill the complete form')
    }
    else{
        var customer = {
            username: username.value,
            email: email.value,
            phone: phone.value,
            subject: subject.value,
            textarea: textarea.value

        
        }
        console.log(customer.val())


       

        username.value = '';
        email.value = '';
        phone.value = '';
        subject.value = '';
        textarea.value = '';
       
    }
  
var reference = ref(db, 'userId/');
var newRef=push(reference)
set(newRef,Object.values)
  onValue(refrence,function(NewData){
    var Data=Object.values(NewData.val())
  })

}

//Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

window.scrollFunction=function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
window.topFunction=function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}



















