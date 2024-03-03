import {db, set, ref, push, onValue, get, child} from '../firebase.js'
let isNewBookingDisplayed = false; // Flag variable

function bookingSearch() {
    console.log('yoyoyoyo');

    const StartLoc = document.getElementById('start').value;
    const DestLoc = document.getElementById('dest').value;
    const Date = document.getElementById('date').value;
    const Time = document.getElementById('time').value;


    // const newResult = {
    //     StartLoc: StartLoc,
    //     DestLoc: DestLoc,
    //     Date: Date,
    //     Time: Time,
    //     NumPass: NumPass
    // };

    // displaySearchResults(searchResults);
 
    // PUSHING WITH RANDOM ID
 
 
    //   push(ref(db, 'trips'), {
    //     destination: "idaho",
    //     from: "tenessee",
    //     date: "12 May, 2024"
    //   });

    // RETRRIVEING DATA
    const tripRef = ref(db, 'trips');
    onValue(tripRef, (snapshot) => {
        const data = snapshot.val();
        if (data){
            let count = 0;
            const resultsContainer = document.getElementById("results-container");
            resultsContainer.innerHTML = ""; // clear it all

            Object.keys(data).forEach(tripId => {
                const tripData = data[tripId];
                if(tripData.StartLoc === StartLoc && tripData.DestLoc === DestLoc && tripData.Date === Date && tripData.Time <= Time){
                    displaySearchResults(tripData);
                    count += 1;
                }
                // isNewBookingDisplayed = true;
                console.log("COUNT RN", count);
                console.log(tripId);
                console.log(tripData);
            });
            
            console.log("COUNT AFTER", count);

            if (count === 0 && !isNewBookingDisplayed){
                displayNewBooking();
                isNewBookingDisplayed = true;
            }
        }
        // console.log('data', data);
        // document.getElementById('display').innerHTML += `
        //     <div>${JSON.stringify(data)}</div>
        // `;
    });
}
 

 function displaySearchResults(result){

    console.log("displaying search result", result);
    const resultsContainer = document.getElementById("results-container");

    // // Check if there are any results
    // if (results.length > 0) {
    //     // Make the results container visible
        resultsContainer.style.display = "block";

    //     results.forEach(result => {
            // Create a div element for the result
            const resultElement = document.createElement("div");
            resultElement.classList.add("result-item");

            const startingPointElement = document.createElement("p");
            startingPointElement.textContent = "Starting Point: " + result.StartLoc;
            resultElement.appendChild(startingPointElement);
    
            const destinationElement = document.createElement("p");
            destinationElement.textContent = "Destination: " + result.DestLoc;
            resultElement.appendChild(destinationElement);
    
            const dateElement = document.createElement("p");
            dateElement.textContent = "Date: " + result.Date;
            resultElement.appendChild(dateElement);
    
            const timeElement = document.createElement("p");
            timeElement.textContent = "Time: " + result.Time;
            resultElement.appendChild(timeElement);
    
            const numPassElement = document.createElement("p");
            numPassElement.textContent = "Number of People: " + result.NumPass;
            resultElement.appendChild(numPassElement);

            const reqJoinElement = document.createElement("button");
            reqJoinElement.className = "request-btn";
            reqJoinElement.type = "button";
            reqJoinElement.textContent = "Request to Join";
            resultElement.appendChild(reqJoinElement);
    
            // Append the result element to the results container
            resultsContainer.appendChild(resultElement);
    //     });
    // } else {
    //     // If there are no results, keep the container invisible
    //     resultsContainer.style.display = "none";
    // }
 }

 function displayNewBooking(){
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.style.display = "block";

    const resultElement = document.createElement("div");
    resultElement.classList.add("no-results-item");

    const noResultMsg = document.createElement("h4");
    noResultMsg.textContent = "No results! Click below to create a new booking for others to join:";
    resultElement.appendChild(noResultMsg);

    const newBookButton = document.createElement("button");
    newBookButton.className = "newbook-btn";
    newBookButton.type = "submit";
    newBookButton.textContent = "Create New Booking";
    resultElement.appendChild(newBookButton);

    resultsContainer.appendChild(resultElement);
    
    newBookButton.addEventListener('click', newBooking);
    
    isNewBookingDisplayed = true;
    // isNewBookingDisplayed = false;

 }

 function newBooking(){
    const StartLoc = document.getElementById('start').value;
    const DestLoc = document.getElementById('dest').value;
    const Date = document.getElementById('date').value;
    const Time = document.getElementById('time').value;
    const NumPass = document.getElementById('num-passengers').value;

    push(ref(db, 'trips'), {
        StartLoc: StartLoc,
        DestLoc: DestLoc,
        Date: Date,
        Time: Time,
        NumPass: NumPass
    });
    isNewBookingDisplayed = false;
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.style.display = "none";

    document.getElementById('start').value = ''; // or set to default value
    document.getElementById('dest').value = ''; // or set to default value
    document.getElementById('date').value = ''; // or set to default value
    document.getElementById('time').value = ''; // or set to default value
    document.getElementById('num-passengers').value = ''; // or set to default value
}
 
 function loaded(){
    const userId = "-Ns14WSA_TyTZXMtA_mL"; // Replace with the actual user ID
    const userRef = ref(db, 'users/' + userId);
    isNewBookingDisplayed = false;
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.style.display = "none";

    // Fetch user information from Firestore
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            console.log("user found");
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

 }

document.getElementById('search').addEventListener('click', bookingSearch);

window.onload = loaded;