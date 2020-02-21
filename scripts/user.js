

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var room = null;

//var rooms = db.collection('rooms');
//rooms.doc('4848').set({name: 'test'});


var roomNumberCont = document.querySelector('.roomNumberCont');
var userNameCont = document.querySelector('.userNameCont');
var messageCont = document.querySelector('.messageCont');

var roomNumberPanel = roomNumberCont.querySelector('.panel');
function handleRoomNumberPanelSubmit (event) {
    event.preventDefault();
    var roomNumberInput = roomNumberCont.querySelector('input');
    var roomNumber = roomNumberInput.value;
    
    
    room = db.collection('rooms').doc(roomNumber);
    
    room.get().then(function(doc) {
        if(doc.exists){
            //mostramos el panel actual
            roomNumberCont.classList.add('hidden');
            //mostramos el panel siguiente
            userNameCont.classList.remove('hidden');
            console.log("Document data:", doc.data());
            //mostramos nombre del aula en el siguiente panel
            userNameCont.querySelector('.roomName').innerText = doc.data().name;            
        } else{
            //mostrar error si no existe
            roomNumberCont.querySelector('.error').classList.remove('hidden');
        }
    });
    
    
    console.log('test', roomNumber);
}
roomNumberPanel.addEventListener('submit', handleRoomNumberPanelSubmit);

var userNamePanel = userNameCont.querySelector('.panel');

function handleUserNamePanelSubmit () {
    event.preventDefault();
    var userName = userNamePanel.querySelector('input').value;

    room.collection('students').add({
        name: userName,
    });

    userNameCont.classList.add('hidden');
    messageCont.classList.remove('hidden');
    
    listenForStudents();
    
}

userNamePanel.addEventListener('submit',handleUserNamePanelSubmit);

function listenForStudents(){

}