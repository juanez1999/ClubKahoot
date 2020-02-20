

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




var roomNumberCont = document.querySelector('.roomNumberCont');
var userNameCont = document.querySelector('.userNameCont');
var messageCont = document.querySelector('.messageCont');

var roomNumberPanel = roomNumberCont.querySelector('.panel');
function handleRoomNumberPanelSubmit (event) {
    event.preventDefault();
    var roomNumberInput = roomNumberCont.querySelector('input');
    var roomNumber = roomNumberInput.value;
    
    roomNumberCont.classList.add('hidden');
    userNameCont.classList.remove('hidden');
    console.log('test', roomNumber);
}
roomNumberPanel.addEventListener('submit', handleRoomNumberPanelSubmit);