// staffbs Projesi Yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyDlA94GPamBHnkz-gi-JpGr0gRoPlctgw4",
  authDomain: "staffbs.firebaseapp.com",
  databaseURL: "https://staffbs-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "staffbs",
  storageBucket: "staffbs.firebasestorage.app",
  messagingSenderId: "653886716850",
  appId: "1:653886716850:web:822c14fc7f4eede14e82ab",
  measurementId: "G-TVH5EJT8CT"
};

// Uygulamayı Başlat (Compat Modu)
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
