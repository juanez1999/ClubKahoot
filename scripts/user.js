

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

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
    
    
    var room = db.collection('rooms').doc(roomNumber);
    
    room.get().then(function(doc) {
        if(doc.exists){
            //mostramos el panel actual
            roomNumberCont.classList.add('hidden');
            //mostramos el panel siguiente
            userNameCont.classList.remove('hidden');
        }
    });
    
    
    console.log('test', roomNumber);
}
roomNumberPanel.addEventListener('submit', handleRoomNumberPanelSubmit);