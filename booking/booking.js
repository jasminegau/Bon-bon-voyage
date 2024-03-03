import {db, auth, set, ref, push, onValue, get, child} from '../firebase.js'

const searchResults = [];

function bookingSearch() {
    console.log('yoyoyoyo');

    const StartLoc = document.getElementById('start').value;
    const DestLoc = document.getElementById('dest').value;
    const Date = document.getElementById('date').value;
    const Time = document.getElementById('time').value;
    const NumPass = document.getElementById('num-passengers').value;

    const newResult = {
        StartLoc: StartLoc,
        DestLoc: DestLoc,
        Date: Date,
        Time: Time,
        NumPass: NumPass
    };

    searchResults.push(newResult);

    push(ref(db, 'trips'), {
        StartLoc: StartLoc,
        DestLoc: DestLoc,
        Date: Date,
        Time: Time,
        NumPass: NumPass
    });

    displaySearchResults(searchResults);
 
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

 function displaySearchResults(results){
    console.log("displaying search results", results);
    const resultsContainer = document.getElementById("results-container");

    // Check if there are any results
    if (results.length > 0) {
        // Make the results container visible
        resultsContainer.style.display = "block";

        results.forEach(result => {
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
        });
    } else {
        // If there are no results, keep the container invisible
        resultsContainer.style.display = "none";
    }
 }
 
 function loaded(){
    const userId = "-Ns14WSA_TyTZXMtA_mL"; // Replace with the actual user ID
    const userRef = ref(db, 'users/' + userId);
 
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