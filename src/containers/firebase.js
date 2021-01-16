import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDS9JCBTW70q_MqQPyZemmT9n4P5zhKlbE",
    authDomain: "datingo-fa0b6.firebaseapp.com",
    databaseURL: "https://datingo-fa0b6.firebaseio.com",
    projectId: "datingo-fa0b6",
    storageBucket: "datingo-fa0b6.appspot.com",
    messagingSenderId: "625390510142",
    appId: "1:625390510142:web:bf7c40da4b81de700a716f",
    measurementId: "G-DRL4R1LQF1"
};
firebase.initializeApp(firebaseConfig);
export default firebase