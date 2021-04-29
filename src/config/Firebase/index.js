import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBqc1vBoID13mn15_TQ3dKhcshtwXSTUQE",
  authDomain: "moneytracker-87d51.firebaseapp.com",
  databaseURL: "https://moneytracker-87d51-default-rtdb.firebaseio.com",
  projectId: "moneytracker-87d51",
  storageBucket: "moneytracker-87d51.appspot.com",
  messagingSenderId: "391197062324",
  appId: "1:391197062324:web:0a9b8825bdabea89d413e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;