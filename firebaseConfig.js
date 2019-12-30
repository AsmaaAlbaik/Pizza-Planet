import Firebase from 'firebase'
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCzx_28aE1Mi3Gp6aekTrxXKhGbpQAQr4M",
    authDomain: "pizza-planet-dafe9.firebaseapp.com",
    databaseURL: "https://pizza-planet-dafe9.firebaseio.com",
    projectId: "pizza-planet-dafe9",
    storageBucket: "pizza-planet-dafe9.appspot.com",
    messagingSenderId: "1094318375706",
    appId: "1:1094318375706:web:3f8b215ea4f477d11f62a3"
  };
  // Initialize Firebase
  const firebaseApp = Firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.database();
  export const dbMenuRef = db.ref('menu');
