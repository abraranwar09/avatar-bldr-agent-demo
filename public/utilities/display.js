const chatMessages = document.querySelector('.chat-messages');
const messageInput = document.querySelector('.chat-input input');
const sendButton = document.getElementById('send-button');

function displayMessage(content, messageType) {
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${messageType}-message`, 'animate__animated', 'animate__fadeIn');
    messageElement.innerHTML = `<p>${content}</p>`;
    chatMessages.appendChild(messageElement);

    if (messageType === 'ai') {
    // anamClient.talk(content);
    sendText(content, "repeat");
    }

    // scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


