import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";


import { getDatabase, ref, child, get, set, update, remove, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";


const firebaseConfig = {
   apiKey: "AIzaSyD42hbsilqnTdo0eWK2RQunX--QOmiXdwQ",
   authDomain: "bon-bon-voyage.firebaseapp.com",
   databaseURL: "https://bon-bon-voyage-default-rtdb.firebaseio.com",
   projectId: "bon-bon-voyage",
   storageBucket: "bon-bon-voyage.appspot.com",
   messagingSenderId: "598252152657",
   appId: "1:598252152657:web:ae7f27d80575a885091570"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getDatabase();


export {
   set,
   ref,
   get,
   child,
   push,
   onValue,
}


