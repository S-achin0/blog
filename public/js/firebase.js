let firebaseConfig = {
    apiKey: "AIzaSyAbXW8eNqUIZOTloamTHjPt9GVRok2Rhe0",
    authDomain: "blog-ca1dd.firebaseapp.com",
    projectId: "blog-ca1dd",
    storageBucket: "blog-ca1dd.appspot.com",
    messagingSenderId: "79734666040",
    appId: "1:79734666040:web:c51eb9d2d34d2f087307cd"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();