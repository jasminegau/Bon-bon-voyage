import {db, set, ref, push, onValue, get, child} from '../firebase.js'


function toggleEditProfile() {
   var editProfileSection = document.getElementById("edit-profile");
   if (editProfileSection.style.display === "none") {
       editProfileSection.style.display = "block";
   } else {
       editProfileSection.style.display = "none";
   }
}


// function save(){
//     let name = document.getElementById("name").value;


//     console.log("clicked", name, db)
// }






function save() {
   console.log('sdf', db);
   set(ref(db, 'users/-Ns14WSA_TyTZXMtA_mL'), {
       Name: document.getElementById('name').value,
       Email: document.getElementById('email').value,
       Phone: document.getElementById('phone').value,
       Location: document.getElementById('location').value
     });


   // document.getElementById('display').innerHTML = "";




   // RETRRIVEING DATA
   // const tripRef = ref(db, 'trips');
   // onValue(tripRef, (snapshot) => {
   //     const data = snapshot.val();
   //     console.log('data', data);




   //     document.getElementById('display').innerHTML += `
   //         <div>${JSON.stringify(data)}</div>
   //     `;
   // });








   // PUSHING WITH RANDOM ID


   //   push(ref(db, 'trips'), {
   //     destination: "idaho",
   //     from: "tenessee",
   //     date: "12 May, 2024"
   //   });
}


function loaded(){


   const userId = `-Ns14WSA_TyTZXMtA_mL`; // Replace with the actual user ID
   const userRef = ref(db, 'users/' + userId);


   // Fetch user information from Firestore
   get(userRef).then((snapshot) => {
       if (snapshot.exists()) {
           const user = snapshot.val();
           document.getElementById('name-display').innerHTML = "<strong>Name:</strong> " + user.Name;
           document.getElementById('email-display').innerHTML = "<strong>Email:</strong> " + user.Email;
           document.getElementById('phone-display').innerHTML = "<strong>Phone:</strong> " + user.Phone;
           document.getElementById('location-display').innerHTML = "<strong>Location:</strong> " + user.Location;
       } else {
           console.log("No data available");
       }
   }).catch((error) => {
       console.error(error);
   });

   function toggleHamburgerMenu() {
    var menu = document.getElementById('hamburger-dropdown');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
 }
 console.log( document.getElementById('hamburger-menu'), 'sdfsdf')
 document.getElementById('hamburger-menu').addEventListener('click', toggleHamburgerMenu);

   // console.log('hey l]apge is loaded');
   // get(child(ref(db, 'users'), `-Ns14WSA_TyTZXMtA_mL`)).then((snapshot) => {
   //     if (snapshot.exists()) {
   //       console.log(snapshot.val());
   //       document.getElementById('name-display').innerHTML = "<strong>Name:</strong> " + snapshot.val().name
      
   //     } else {
   //       console.log("No data available");
   //     }
   //   }).catch((error) => {
   //     console.error(error);
   //   });


}


document.getElementById('save').addEventListener('click', save);


document.getElementById('edit-profile-btn').addEventListener('click', toggleEditProfile);


// document.getElementById('save').addEventListener('load', ssdf);
window.onload = loaded;


