// firebase.js (LOAD ONCE)

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCOSeK0RonTva_lazfZV_H22sFAzd685iY",
    authDomain: "goatfarmmanagement-d7b89.firebaseapp.com",
    projectId: "goatfarmmanagement-d7b89",
    storageBucket: "goatfarmmanagement-d7b89.appspot.com"
  });
}

var db = firebase.firestore();
var storage = firebase.storage();
