
console.log(messageInput);

const temperature = 0.5;

const today = new Date();
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log('User Timezone:', userTimeZone);

const formattedToday = today.toLocaleString('en-US', { timeZone: userTimeZone }).replace(',', '');  

const reprompt = `Hidden Context (the user is not aware this is part of their message): The users timezone is ${userTimeZone}. The current date/time is ${formattedToday}.`;

const systemPrompt = `You are Aliyah, a friendly assistant helping with gathering donations for stem cell research. Start by saying hi and asking if the user is interested in stem cell research. Try getting their name, phone number and email along the way.`


async function sendMessage(message) {
    // Step 1: Get session_id from local storage
    const session_id = localStorage.getItem('session_id');
    const userId = localStorage.getItem('userId'); // Assuming user_id is stored in local storage

    // Step 2: Send a request to the AI
    const requestBody = {
        session_id: session_id,
        user_id: userId,
        message: message + reprompt,
        tools: tools,
        custom_prompt: systemPrompt,
        custom_temp: temperature
    };

    try {
        console.log('Sending message:', requestBody);
        const response = await fetch('/ai/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        console.log('Received response:', data);

        if (data.finish_reason === 'stop') {
            console.log('Response finished with reason: stop');
            return data;
        } else if (data.finish_reason === 'tool_calls') {
            console.log('Response finished with reason: tool_calls');
            return data;
            // await handleToolCalls(data);
        }
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

//expose sendMessage globally
window.sendMessage = sendMessage;

document.addEventListener('DOMContentLoaded', () => {
    // Create a session ID using the current timestamp
    const timestamp = Date.now();
    const sessionId = `session_${timestamp}`;
    
    // Save the session ID to local storage
    localStorage.setItem('session_id', sessionId);

    //avatar setup
    const vidEl = document.getElementById('vidEl');
    const audEl = document.getElementById('audEl');

    const { createClient, unsafe_createClientWithApiKey } = window.anam;
    anamClient = unsafe_createClientWithApiKey(
        'ZjgwODY2YTQtYmNlMi00NTE5LTk2NjMtM2E1YTZlZWM3Njc3OjlDci9wdXJ4aS9MdjFLWVAvU2oyQXowRk5rVnJOWTlrWFZVN0dkZWdxRk09',
        { 
            personaId: '773a8ca8-efd8-4449-9305-8b8bc1591475',
            disableBrains: true
        }
    );



async function startStreaming() {
    await anamClient.streamToVideoAndAudioElements(
        'vidEl',
        'audEl'
    );
}

const audioState = anamClient.muteInputAudio();
console.log(audioState);


setTimeout(() => {
    startStreaming();
}, 1000);



    // Function to handle sending message
    async function handleSendMessage(message) {
        if (message) {
            console.log('Handling message:', message);
            if (message === 'Start') {
                console.log('Start message received, no display action taken.');
            } else {
                displayMessage(message, 'user');  
                console.log('Displayed user message:', message);
            }

            // Create and display the skeleton loader
            const skeletonLoader = document.createElement('div');
            skeletonLoader.className = 'skeleton-loader';
            document.querySelector('.chat-messages').appendChild(skeletonLoader);
            console.log('Skeleton loader added to chat messages.');

            try {
                const data = await sendMessage(message);
                console.log('Data received from sendMessage:', data);

                if (data.finish_reason === 'tool_calls') {
                    console.log('Handling tool calls:', data);
                    await handleToolCalls(data, skeletonLoader);
                } else if (data.finish_reason === 'stop') {
                    // Remove the skeleton loader
                    skeletonLoader.remove();
                    console.log('Skeleton loader removed.');
                    displayMessage(data.response, 'ai');
                    console.log('Displayed AI response:', data.response);
                }
            } catch (error) {
                console.error('Error handling message:', error);
                skeletonLoader.remove();
                console.log('Skeleton loader removed due to error.');
            }
        }
    }

    // Expose handleSendMessage globally
    window.handleSendMessage = handleSendMessage;

    // handleSendMessage('Start');
    // var firstMessage = document.getElementsByClassName('user-message')[0];


    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    // Event listener for send button click
    sendButton.addEventListener('click', sendMessageHandler);
    sendButton.addEventListener('touchend', sendMessageHandler);

    // Event listener for Enter key press
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents new line in textarea
            sendMessageHandler();
        }
    });

    function sendMessageHandler() {
        const message = messageInput.value.trim();
        if (message) {
            messageInput.value = '';
            handleSendMessage(message);
        }
    }
});