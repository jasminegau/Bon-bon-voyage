import{getDatabase, ref, onValue, child, get, set, update, remove} from "../firebase.js";
const db = getDatabase();

function updateHomePageWithRides() {
    const ridesRef = ref(db, 'rides');  // Adjust 'rides' to the path where your data is stored

    onValue(ridesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Assuming 'data' is an object where keys are ride IDs and values are ride details
            for (const [key, ride] of Object.entries(data)) {
                // Create HTML for each ride
                const rideElement = `
                    <div class="flight-info">
                        <span class="date">Flight Date: ${ride.date}</span>
                        <span class="time">Time: ${ride.time}</span>
                        <span class="companions">Riding with: ${ride.companions}</span>
                        <span class="destination">Destination: ${ride.destination}</span>
                    </div>
                `;
                // Append this to your left-side or right-side div as needed
                document.getElementById('left-side').innerHTML += rideElement;
            }
        } else {
            // Handle the case where no data is available
            document.getElementById('left-side').innerHTML = '<p>No upcoming matched rides.</p>';
        }
    });
}

// Call the function to update the page
updateHomePageWithRides();

// import { getFirestore, collection, getDocs, doc, onSnapshot } from "/firebase.js";

async function loadContacts() {
    const contactsList = document.getElementById('contact-list');
    // Assume you have a 'contacts' collection in your Firestore
    const querySnapshot = await getDocs(collection(db, "contacts"));
    contactsList.innerHTML = ''; // Clear existing contacts
    querySnapshot.forEach((doc) => {
        // Assuming 'name' field in your contacts documents
        const contactName = doc.data().name;
        const div = document.createElement('div');
        div.className = 'contact';
        div.textContent = contactName;
        div.onclick = () => openChat(contactName, doc.id); // Pass the document ID to openChat
        contactsList.appendChild(div);
    });
}

function openChat(contactName, contactId) {
    const chatHeader = document.getElementById('chat-header');
    const chatMessages = document.getElementById('chat-messages');
    chatHeader.innerText = `Chat with ${contactName}`;
    chatMessages.innerHTML = '';

    // Assuming you have a subcollection 'messages' under each 'contacts' document
    const messagesRef = collection(db, "contacts", contactId, "messages");
    // Listen for real-time updates
    onSnapshot(messagesRef, (querySnapshot) => {
        chatMessages.innerHTML = ''; // Clear existing messages
        querySnapshot.forEach((doc) => {
            const messageData = doc.data();
            const messageDiv = document.createElement('div');
            // Assuming 'text' field in your message documents
            messageDiv.textContent = messageData.text;
            chatMessages.appendChild(messageDiv);
        });
    });
}

// Call loadContacts on page load
loadContacts();