const firebaseConfig = {
    apiKey: "AIzaSyD4mXN8BZ3OMzl35vtEbNGA9BUuHPgoqQU",
    authDomain: "mit-sistemi.firebaseapp.com",
    databaseURL: "https://mit-sistemi-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mit-sistemi",
    storageBucket: "mit-sistemi.firebasestorage.app",
    messagingSenderId: "195453377116",
    appId: "1:195453377116:web:85067f5070ecf983bb6499"
};

// Uygulamayı Başlat
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
