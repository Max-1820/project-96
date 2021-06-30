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
user_name=localStorage.getItem("name");
document.getElementById("welcome_username").innerHTML="Welcome "+user_name+"!";

function addRoom(){
  var roomName=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomName).update({
    pupose:"addRoom"
  });
  localStorage.setItem("Room",roomName);
  window.location="let's_chat.html"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
  console.log(Room_names);
 var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
      });});}
getData()
function redirectToRoom(name){
  localStorage.setItem("Room",name);
  window.location="let's_chat.html"
}
function logout(){
  localStorage.removeItem("name");
  localStorage.removeItem("Room");
  window.location="index.html";
}