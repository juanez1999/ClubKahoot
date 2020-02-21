

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var room = db.collection('rooms').doc('4848');

function listenForStudents(){
    var container = document.querySelector('.students');
    room.collection('students').onSnapshot(function(querySnapshot) {
        container.innerHTML= '';
         querySnapshot.forEach(function(doc) {
            var student = document.createElement('div');
            student.classList.add('student');
            student.innerText = doc.data().name;
            container.append(student);
            console.log(doc.data().name);
         });
     });
 }