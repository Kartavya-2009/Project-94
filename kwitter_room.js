var firebaseConfig = {
    apiKey: "AIzaSyBoS-y-QVqXql2rZ4PxZATCvgI8LBvRJ1Y",
    authDomain: "kwitter-6a73d.firebaseapp.com",
    databaseURL: "https://kwitter-6a73d-default-rtdb.firebaseio.com",
    projectId: "kwitter-6a73d",
    storageBucket: "kwitter-6a73d.appspot.com",
    messagingSenderId: "1086185591559",
    appId: "1:1086185591559:web:7a0d869853b60cc5632ba2"
  };

  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class = 'room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location =replace("index.html");
}