 function editRide(button) {
    // Logic to edit the ride information
    alert('Edit ride functionality not implemented');
 }
 
 
 function deleteRide(button) {
    // Logic to delete the ride
    alert('Delete ride functionality not implemented');
 }
 
 
//  document.getElementById('booking-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     // Retrieve form data
//     var startingPoint = document.getElementById('starting-point').value;
//     var destination = document.getElementById('destination').value;
//     var time = document.getElementById('time').value;
//     // ... other form elements
 
 
//     // Search functionality (simulate with a placeholder)
//     // This should be replaced with a real search against the backend/database
//     var hasResults = false; // Change this to simulate having results
//     var resultsContainer = document.getElementById('results-container');
//     if (hasResults) {
//         resultsContainer.innerHTML = '<p>Matching rides will be displayed here...</p>';
//         // Sort and display results
//     } else {
//         resultsContainer.innerHTML = '<p>Sorry, we cannot find a matched post. Would you like to make your own?</p><button onclick="createPost()">Yes, Create Post</button>';
//     }
//  });
 
 
 function createPost() {
    // Confirm the information and upload the post
    alert('Post creation functionality not implemented');
 }
 
 
 
 
 
 
//  document.getElementById('yes-make-own').addEventListener('click', function() {
//     window.location.href = 'confirm_post.html'; // This redirects the user to the confirmation page
//  });
 
 
//  document.getElementById('confirm-and-post').addEventListener('click', function() {
//     // Here you would handle the posting of the ride
//     // This might involve collecting the details from the 'ride-details' div and sending it to the server
//     alert('Your ride has been posted!');
//  });
 
 
//  function openChat(contactName) {
//     var chatInterface = document.getElementById('chat-interface');
//     // Here you would load the chat messages with the selected contact
//     chatInterface.innerHTML = '<p>Chat with ' + contactName + '</p>';
//  }
 
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
 
 
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
 
 
  import{getDatabase, ref, onValue, child, get, set, update, remove} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
   const db = getDatabase();
 
 
//  console.log('SDFDF', db)

 function toggleHamburgerMenu() {
    console.log('ghj')
    var menu = document.getElementById('hamburger-dropdown');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
 }
 console.log( document.getElementById('hamburger-menu'), 'sdfsdf')
 document.getElementById('hamburger-menu').addEventListener('click', toggleHamburgerMenu);
