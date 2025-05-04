const temperature = 0.5;

const today = new Date();
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log('User Timezone:', userTimeZone);

const formattedToday = today.toLocaleString('en-US', { timeZone: userTimeZone }).replace(',', '');

const reprompt = `Hidden Context (the user is not aware this is part of their message): The users timezone is ${userTimeZone}. The current date/time is ${formattedToday}.`;

// const systemPrompt = `You are Dr. Alam, a friendly assistant helping with gathering donations for stem cell research. Start by saying hi and asking if the user is interested in stem cell research. Try getting their name, phone number and email along the way. Respond only in UAE Arabic. Include punctiation and arabic accents`
const systemPrompt = `You are Dr. Ben, a professional and empathetic AI general physician. Your primary role is to collect medical information from users to help build an accurate health profile.

Step 1: Begin the conversation by politely introducing yourself as Dr. Al Rashid and explaining your role. Reassure the user that all information will remain confidential.

Step 2: Ask clear and simple questions to gather details about the user's:
– Presenting symptoms (duration, severity, triggers)
– Relevant medical history (past illnesses, medications, allergies)
– Lifestyle factors (diet, exercise, smoking, alcohol, sleep)
– Family medical history (if relevant)

Step 3: Once information is collected, provide a concise and well-organized summary of the user’s health profile to confirm understanding.

Step 4: Based on the information, offer a preliminary AI-powered assessment of possible conditions or concerns.

Always include this disclaimer:

⚠️ This is not a confirmed medical diagnosis. Please consult a licensed healthcare professional for a full evaluation.

You must always remain respectful, cautious, and avoid giving treatment advice unless asked, and even then, only suggest general guidance until a real doctor can be consulted.​
`

let mediaRecorder;
let audioChunks = [];
const talkButton = document.getElementById('talkButton');

// const messages = [
//     "دعني أفكر في ذلك",
//     "امممم...لحظة واحدة فقط...",
//     "أعطني ثانية...",
//     "تمام..."
// ];

const messages = [
  "Let me think about that...",
  "Hmm... just one moment...",
  "Give me a second...",
  "Okay..."
];

async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = event => {
    audioChunks.push(event.data);
  };

  mediaRecorder.start();
  // Update button to indicate recording
  talkButton.textContent = "Tap to Send";
  talkButton.style.backgroundColor = "green";
}

async function stopRecording() {
  return new Promise((resolve, reject) => {
    mediaRecorder.onstop = async () => {
      // if (chatMessages.childElementCount > 1) {
      //   const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      //   sendText(randomMessage, "repeat");
      // }

      const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Audio = reader.result.split(',')[1];
        try {
          const response = await fetch('/ai/speech-to-text', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ audioData: base64Audio })
          });
          const data = await response.json();
          resolve(data.transcription);
        } catch (error) {
          console.error('Error during transcription:', error);
          reject(error);
        }
      };
      reader.readAsDataURL(audioBlob);
    };

    mediaRecorder.stop();
  });
}

talkButton.addEventListener('click', async () => {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    // Reset button to initial state
    talkButton.textContent = "Tap to Speak";
    talkButton.style.backgroundColor = ""; // Reset to default

    const transcription = await stopRecording();
    if (transcription) {
      await handleSendMessage(transcription);
    }
  } else {
    audioChunks = [];
    await startRecording();
  }
});

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
  const sidebar = document.getElementById('sidebar');
  const container = document.querySelector('.container');
  const toggleSidebar = document.getElementById('toggleSidebar');

  // Ensure the sidebar starts collapsed
  sidebar.classList.remove('expanded');
  container.classList.remove('expanded');

  function updateSidebarState() {
    if (window.innerWidth < 600) {
      sidebar.classList.remove('expanded');
      container.classList.remove('expanded');
    }
  }

  toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
    container.classList.toggle('expanded');
  });

  window.addEventListener('resize', updateSidebarState);
  updateSidebarState(); // Initial check

  // Create a session ID using the current timestamp
  const timestamp = Date.now();
  const sessionId = `session_${timestamp}`;

  // Save the session ID to local storage
  localStorage.setItem('session_id', sessionId);

  //avatar setup
  // Configuration
  const API_CONFIG = {
    apiKey: "OTM3OGRkZThlZWI2NDA1NWE4MzgxZjEzMWMxY2M1NzYtMTczNzY0MzUzMA==",
    serverUrl: "https://api.heygen.com",
  };

  // Global variables
  let sessionInfo = null;
  let room = null;
  let mediaStream = null;
  let webSocket = null;
  let sessionToken = null;

  // DOM Elements
  const mediaElement = document.getElementById("mediaElement");

  // Get session token
  async function getSessionToken() {
    const response = await fetch(
      `${API_CONFIG.serverUrl}/v1/streaming.create_token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": API_CONFIG.apiKey,
        },
      }
    );

    const data = await response.json();
    sessionToken = data.data.token;
    console.log("Session token obtained");
  }

  // Connect WebSocket
  async function connectWebSocket(sessionId) {
    const params = new URLSearchParams({
      session_id: sessionId,
      session_token: sessionToken,
      silence_response: false,
      //   opening_text: "Hello, how can I help you?",
      // stt_language: "ar",
      // tts_language: "ar_SA"
    });

    const wsUrl = `wss://${new URL(API_CONFIG.serverUrl).hostname
      }/v1/ws/streaming.chat?${params}`;

    webSocket = new WebSocket(wsUrl);

    // Handle WebSocket events
    webSocket.addEventListener("message", (event) => {
      const eventData = JSON.parse(event.data);
      console.log("Raw WebSocket event:", eventData);
    });
  }

  // Create new session
  async function createNewSession() {
    if (!sessionToken) {
      await getSessionToken();
    }

    const response = await fetch(
      `${API_CONFIG.serverUrl}/v1/streaming.new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          quality: "high",
          avatar_name: 'Dexter_Doctor_Sitting2_public',
          voice: {
            voice_id: '7a544b76e07648849ed54617f18ea280',
            rate: 1,
          },
          version: "v2",
          video_encoding: "H264",
        }),
      }
    );

    const data = await response.json();
    sessionInfo = data.data;

    // Create LiveKit Room
    room = new LivekitClient.Room({
      adaptiveStream: true,
      dynacast: true,
      videoCaptureDefaults: {
        resolution: LivekitClient.VideoPresets.h720.resolution,
      },
    });

    // Handle room events
    room.on(LivekitClient.RoomEvent.DataReceived, (message) => {
      const data = new TextDecoder().decode(message);
      console.log("Room message:", JSON.parse(data));
    });

    // Handle media streams
    mediaStream = new MediaStream();
    room.on(LivekitClient.RoomEvent.TrackSubscribed, (track) => {
      if (track.kind === "video" || track.kind === "audio") {
        mediaStream.addTrack(track.mediaStreamTrack);
        if (
          mediaStream.getVideoTracks().length > 0 &&
          mediaStream.getAudioTracks().length > 0
        ) {
          mediaElement.srcObject = mediaStream;
          console.log("Media stream ready");
          onMediaStreamReady();
        }
      }
    });

    // Handle media stream removal
    room.on(LivekitClient.RoomEvent.TrackUnsubscribed, (track) => {
      const mediaTrack = track.mediaStreamTrack;
      if (mediaTrack) {
        mediaStream.removeTrack(mediaTrack);
      }
    });

    // Handle room connection state changes
    room.on(LivekitClient.RoomEvent.Disconnected, (reason) => {
      console.log(`Room disconnected: ${reason}`);
    });

    await room.prepareConnection(sessionInfo.url, sessionInfo.access_token);
    console.log("Connection prepared");

    // Connect WebSocket after room preparation
    await connectWebSocket(sessionInfo.session_id);

    console.log("Session created successfully");
  }

  // Start streaming session
  async function startStreamingSession() {
    const startResponse = await fetch(
      `${API_CONFIG.serverUrl}/v1/streaming.start`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          session_id: sessionInfo.session_id,
        }),
      }
    );

    // Connect to LiveKit room
    await room.connect(sessionInfo.url, sessionInfo.access_token);
    console.log("Connected to room");

    console.log("Streaming started successfully");
  }

  // Send text to avatar
  async function sendText(text, taskType = "talk") {
    if (!sessionInfo) {
      console.log("No active session");
      return;
    }

    const response = await fetch(
      `${API_CONFIG.serverUrl}/v1/streaming.task`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          session_id: sessionInfo.session_id,
          text: text,
          task_type: taskType,
        }),
      }
    );

    console.log(`Sent text (${taskType}): ${text}`);
  }

  window.sendText = sendText;

  // Close session
  async function closeSession() {
    if (!sessionInfo) {
      console.log("No active session");
      return;
    }

    const response = await fetch(
      `${API_CONFIG.serverUrl}/v1/streaming.stop`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          session_id: sessionInfo.session_id,
        }),
      }
    );

    // Close WebSocket
    if (webSocket) {
      webSocket.close();
    }
    // Disconnect from LiveKit room
    if (room) {
      room.disconnect();
    }

    mediaElement.srcObject = null;
    sessionInfo = null;
    room = null;
    mediaStream = null;
    sessionToken = null;
    // document.querySelector("#startBtn").disabled = false;

    console.log("Session closed");

  }

  window.closeSession = closeSession;

  async function init() {
    await createNewSession();
    await startStreamingSession();
  }

  window.init = init;

  // init();







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

      // Create and display the thinking bubble
      const thinkingBubble = document.createElement('div');
      thinkingBubble.className = 'thinking-bubble';
      thinkingBubble.innerHTML = `
                <div class="spinner"></div>
                <span>Samer is thinking...</span>
            `;
      document.body.appendChild(thinkingBubble);

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
      } finally {
        // Remove the thinking bubble
        thinkingBubble.remove();
        console.log('Thinking bubble removed.');
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

  const loaderOverlay = document.getElementById('loader-overlay');
  const loaderText = document.getElementById('loader-text');
  const startButton = document.getElementById('start-button');
  const sentences = [
    "Creating neural network...",
    "Synthesizing your personal avatar...",
    "Loading knowledgebase...",
    "Creating vector stores...",
    "Loading your avatar..."
  ];
  let sentenceIndex = 0;
  let sentenceInterval;

  // Initialize Lottie animation
  const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/loader2.json'
  });

  // Ensure the start button is visible initially
  startButton.style.display = 'block';
  loaderText.style.display = 'none';

  // Event listener for start button
  startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    loaderText.style.display = 'block';
    init(); // Call the init function

    // Start cycling through sentences
    sentenceInterval = setInterval(() => {
      loaderText.textContent = sentences[sentenceIndex];
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }, 1000);
  });

  // Function to handle media stream readiness
  function onMediaStreamReady() {
    console.log("Media stream ready");
    clearInterval(sentenceInterval);
    setTimeout(() => {
      loaderOverlay.style.display = 'none';
    }, 2000); // Wait 2 seconds before closing the modal
  }



  // Call setupMediaStream when appropriate in your code
  // setupMediaStream(); // Uncomment this line if setupMediaStream should be called immediately

});