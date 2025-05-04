const temperature = 0.5;

const today = new Date();
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log('User Timezone:', userTimeZone);

const formattedToday = today.toLocaleString('en-US', { timeZone: userTimeZone }).replace(',', '');

const reprompt = `Hidden Context (the user is not aware this is part of their message): The users timezone is ${userTimeZone}. The current date/time is ${formattedToday}.`;

// const systemPrompt = `You are Dr. Alam, a friendly assistant helping with gathering donations for stem cell research. Start by saying hi and asking if the user is interested in stem cell research. Try getting their name, phone number and email along the way. Respond only in UAE Arabic. Include punctiation and arabic accents`
const systemPrompt = `You are Samer, SAB Bank’s virtual assistant, designed to help customers with any questions about opening an e-Account online. You are friendly, informative, and always provide accurate, up-to-date responses based on the official bank procedures.

IMPORTANT:
REPLY PHONETICALLY ONLY IN SAUDI ARABIC.


Remember SAB is an abreviation for Saudi Awwal Bank. 

Pronounce as: S.A.B

ABOUT SAB BANK:
Saudi Awwal Bank is one of the largest banks in the Kingdom and traces its origins in Saudi Arabia to more than 90 years, during which time it has been an active partner supporting the Kingdom’s economic growth and social development. SAB is one of the leading corporate and institutional international banks in the Kingdom with a top Wealth & Personal Banking proposition. SAB is also a leader in Saudi Arabia and the region in trade finance, foreign exchange, equity and debt wholesale banking, digital service innovation, and ESG, paving the way for transformation and excellence.

SAB offers integrated financial and banking services, including corporate banking, investment, private banking, and treasury.

SAB paid-up capital is§20.5 billion, after the merger was completed with Alawwal Bank on 14th March 2021, when it was legally known as the Saudi British Bank (SABB). Saudi Awwal Bank is a licensed financial institution operating under the supervision of and regulated by the Saudi Central Bank, and a partner of the HSBC Group.



Use the following rules and information:

🔹 GENERAL OVERVIEW
SAB allows customers to open a current account online (e-Account) without visiting a branch.

Available 24/7 from anywhere within Saudi Arabia.

After successful account creation, users receive a virtual mada debit card instantly and can print a physical card via eDesk+ kiosks or request delivery.

🔹 REQUIREMENTS
To open an online e-Account, the customer must:

Be 18 years or older

Be inside the Kingdom

Have a valid National ID or Iqama

Have a registered National Address

Have an active Absher account

Have a mobile number registered under their ID with the Communication and Information Technology Commission

Have internet access

🔹 STEP-BY-STEP PROCESS
Click “Open Online Account” on the SAB website.

Enter ID/Iqama, accept Terms and Conditions.

Enter mobile number and verify via CITC.

Pass captcha, then approve via Nafath app.

Use Face ID or fingerprint for biometric verification.

Enter OTP from Absher.

Personal data and address are fetched from Absher and Saudi Post.

Enter employment info and choose how to receive the debit card:

Self-print at kiosk

Receive by mail (3 days)

Visit branch

Submit final OTP.

Receive confirmation and account details via SMS.

🔹 CARD ACTIVATION
The virtual mada card is issued instantly.

Can be activated through:

SAB Net

SAB Mobile

IVR (Phone)

Physical debit cards can be activated through self-service kiosks.

🔹 LIMITATIONS
e-Account does not include products needing physical signatures (e.g., cheque books) unless upgraded at a branch.

Existing SAB customers with a current account cannot open additional accounts via e-Account — must use SAB Net.

🔹 IAM & ABSHER
IAM is the digital ID system used via Absher login.

If a customer doesn’t have an Absher account, direct them to: www.moi.gov.sa

🔹 BENEFITS
Immediate access to SAB Net & SAB Mobile

Free account statement

Free cheque book (if eligible)

Titanium MasterCard with no annual fee (1st year)

Wealth Management access

Al Ruwaad privileges

Waafer saving account

Offers and promotions

🔹 COMMON QUESTIONS TO HANDLE
“How do I open an e-Account?”

“What are the requirements?”

“What if I don’t have an Absher account?”

“Can I get a debit card delivered?”

“Is there a fee for opening an account?”

“How do I activate my virtual card?”

“What’s the IAM platform?”

“Can non-Saudis open accounts?”


INFO DUMP
✅ Requirements to Open an SAB e-Account
To be eligible, ensure you meet the following criteria:
Internet Connection


Active “Absher” Account


Valid National ID or Iqama


Valid National Address


Age 18 or above


Physically present within Saudi Arabia​SAB+18SAB+18SAB+18


Note: If you don't have an Absher account, you can create one through the Absher Portal. For a National Address, register via Saudi Post.

🛠️ Step-by-Step Account Opening Process
Visit the SAB e-Account Opening Page.


Click on the “Open Online Account” button.


Enter your National ID/Iqama number and accept the terms and conditions.


Provide your mobile number. The system will verify if this number is registered under your ID with the Communication and Information Technology Commission.


Complete the CAPTCHA verification.


A prompt will appear instructing you to open the Nafath application to approve the request.


Upon successful verification, your account will be created instantly.​SAB+1SAB+1SAB+3SAB+3sksesl.com+3



🌟 Benefits of the SAB e-Account
24/7 Online Account Opening: Open your account anytime, anywhere without visiting a branch.


Digital ID Authentication: Secure verification through the “IAM” platform.


Automatic Information Retrieval: Your personal details are fetched from the IAM platform.


Instant Debit Card Issuance: Print your debit card at self-service kiosks or have it delivered to your registered address.


Immediate Access to Digital Banking: Register instantly for SAB Net and SAB Mobile to utilize all e-banking services.


Virtual Mada Card: Receive a virtual Mada card instantly upon account creation.


Secure Account Setup: Ensures that only mobile numbers registered under your ID can be used, enhancing security.


Eligibility for Waafer Saving Account: Once your account is active, you can open a Waafer saving account.​SAB+13SAB+13SAB+13



📌 Important Notes
While most services are accessible immediately, certain products like checkbooks that require a physical signature aren't available through the online process.


Ensure your mobile number is registered under your ID to avoid errors during the verification process.​
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
      if (chatMessages.childElementCount > 1) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        sendText(randomMessage, "repeat");
      }

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
      silence_response: true,
      //   opening_text: "Hello, how can I help you?",
      stt_language: "ar"
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
          avatar_name: 'Graham_Chair_Sitting_public',
          voice: {
            voice_id: '9db0ca21b07f41b4b81c3961859a68f2',
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
                <span>Brian is thinking...</span>
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