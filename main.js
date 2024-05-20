// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAHE65C0XXMZzdc0A8Gxa3q23WsmzI9g8g",
    authDomain: "test-connection-d5e3c.firebaseapp.com",
    databaseURL: "https://test-connection-d5e3c-default-rtdb.firebaseio.com",
    projectId: "test-connection-d5e3c",
    storageBucket: "test-connection-d5e3c.appspot.com",
    messagingSenderId: "820341911832",
    appId: "1:820341911832:web:e583350c6c90a2695f2e6d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function fetchTemperature() {
    var tempRef = database.ref('temperature');
    tempRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById('temperature').innerText = data.temperature.toFixed(2);
    });
}

function sendCommand(action) {
    database.ref('command').set({
        action: action
    });
}

fetchTemperature();
