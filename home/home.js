import {db, set, ref, push, onValue, get, child} from '../firebase.js'

function updateHomePageWithRides() {
    const matchesRef = ref(db, 'matches');  // Adjust 'rides' to the path where your data is stored

    onValue(matchesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const leftside = document.getElementById('left-side');
            // Assuming 'data' is an object where keys are ride IDs and values are ride details
            Object.keys(data).forEach(tripId => {
                const ride = data[tripId];
                // Create HTML for each ride
                const rideElement = `
                    <div class="flight-ticket">
                        <div class="flight-info">
                            <span class="date">Flight Date: ${ride.date}</span>
                            <span class="time">Time: ${ride.time}</span>
                            <span class="companions">Riding with: ${ride.companions}</span>
                            <span class="destination">Destination: ${ride.destination}</span>
                        </div>
                    </div>
                `;

                // Append this to your left-side or right-side div as needed
                leftside.innerHTML += rideElement;
            });
        } else {
            // Handle the case where no data is available
            leftside.innerHTML = '<p>No upcoming matched rides.</p>';
        }
    });
}

// Call the function to update the page
updateHomePageWithRides();