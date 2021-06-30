var firebaseConfig = {
    apiKey: "AIzaSyDfQZbfRPbv2TMnB6AU3UFFtfOnZDgB8xs",
    databaseURL: "https://let-s-chat-399e2-default-rtdb.firebaseio.com",
    authDomain: "let-s-chat-399e2.firebaseapp.com",
    projectId: "let-s-chat-399e2",
    storageBucket: "let-s-chat-399e2.appspot.com",
    messagingSenderId: "104123899068",
    appId: "1:104123899068:web:6cceca3c80577a68ae84b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function log_out(){
      localStorage.removeItem("name");
      localStorage.removeItem("Room");
      window.location="index.html";
}
var user_name=localStorage.getItem("name");
var room_name=localStorage.getItem("Room");
function send(){
      var msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg,
            like:0
      });
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();