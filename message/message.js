document.addEventListener('DOMContentLoaded', () => {
    const chatHeader = document.getElementById('chat-header');
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Function to open chat window
    window.openChat = function(contactName) {
        chatHeader.textContent = `Chat with ${contactName}`;
        chatMessages.innerHTML = ''; // Clear chat messages
    };

    // Function to send a message
    window.sendMessage = function() {
        const message = messageInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement); // Append the new message div to the chat.
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll to the latest message.
            messageInput.value = ''; // Clear the input after sending a message.
        }
    };

    // Event listener for enter key in the message input
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Attach openChat to each contact
    document.querySelectorAll('.contact').forEach(contact => {
        contact.addEventListener('click', function() {
            openChat(this.textContent);
        });
    });
});