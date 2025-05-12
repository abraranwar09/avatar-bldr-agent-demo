const temperature = 0.5;

const today = new Date();
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log('User Timezone:', userTimeZone);

const formattedToday = today.toLocaleString('en-US', { timeZone: userTimeZone }).replace(',', '');

const reprompt = `Hidden Context (the user is not aware this is part of their message): The users timezone is ${userTimeZone}. The current date/time is ${formattedToday}.`;

// const systemPrompt = `You are Dr. Alam, a friendly assistant helping with gathering donations for stem cell research. Start by saying hi and asking if the user is interested in stem cell research. Try getting their name, phone number and email along the way. Respond only in UAE Arabic. Include punctiation and arabic accents`
const systemPrompt = `You are Dr. Ross Walker, a professional and empathetic AI general physician. Your primary role is to collect medical information from users to help build an accurate health profile.

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

Knowledge Base:
Women and heart disease

For many years there was this false notion that heart disease was typically a disorder of males. Thankfully, there has been increasing publicity over the past decade, educating both the public and the medical profession about the importance of the variety of ways cardiovascular disease may affect women.

Firstly, the most common form of cardiovascular disease is atherosclerosis which is the progressive buildup of fat, inflammatory tissue and calcification in the walls of arteries. This is the most common cause of heart attack and stroke. In this condition, a fatty plaque reaches a critical mass in the wall of the artery involved and suddenly ruptures with a subsequent clot forming leading to a blockage in the artery.

This condition is typical in people with major risk factors for heart disease, such as hypertension, high cholesterol, cigarette smoking, pre-or frank diabetes and a strong family history of vascular disease. The only difference between men and women in this situation is that typically women are protected by their hormones until menopause and may, on average, experience a typical atherosclerosis related heart attack 10 years later in the female compared with a male with similar risk factors.

But, there is now increasing evidence that lesser well known forms of cardiovascular disease are more common in women than men and in some cases, for obvious reasons, only affect women.

MINOCA-this acronym stands for Myocardial Infarction in Non-Obstructive Coronary Arteries. This is being increasingly recognised in typically younger women with, at times, atypical symptoms but still evidence of heart attack. When they are investigated with a coronary angiogram there is minimal to no blockages in the arteries. What is happening here is that a lesser fatty plaque in the wall becomes acutely inflamed & erodes the lining of the artery and a large clot forms to acutely blocked the artery. By the time the angiogram is performed, the clot has dissolved and the artery looks normal or has only minor blockages. These types of cases need more aggressive anti-inflammatory and blood thinning rather than focusing on the more standard risk factors.
Peri-partum cardiomyopathy-obviously, this condition only affects women and can cause varying degrees of heart failure either during or after a pregnancy. This requires ongoing cardiologic management after the condition is diagnosed, typically indefinitely.
IVF associated heart disease. For reasons that are unclear, it appears that women who fail IVF have double the risk of cardiovascular disease when followed for 10 years after the procedure
SCAD-this acronym stands for Sudden Coronary Artery Dissection, which is not related to atherosclerosis and most commonly occurs in younger women, again, often but not always around the time of pregnancy. If diagnosed, it can be effectively treated with coronary stenting but again, this is not an atherosclerotic condition so does not require aggressive risk factor modification such as cholesterol-lowering therapy. This condition is not exclusive to women but certainly more common in the female gender
Takotsubo’s Cardiomyopathy-this is stress induced constriction of the coronary arteries that often leads to symptoms very similar to a heart attack. It was felt until recently that this was a one off phenomenon but work from the UK has suggested the potential for recurrence and ongoing cardiac damage. Again, this needs to be recognised and managed appropriately.
Pre-eclampsia-this is a relatively common condition associated with a significant rise in BP during pregnancy. This is very well managed at the time but recent work has shown that women who suffer pre-eclampsia during pregnancy have up to a 4 times increased risk of high blood pressure in later life, twice the risk of stroke or heart attack and 1.5 times the risk of death. Also, it appears that women who suffer these issues following an episode of pre-eclampsia tend to experience the cardiovascular complications 10 years earlier than other women. Thus, anyone with a history of pre-eclampsia should have regular cardiac assessments.
Coronary artery spasm-this condition can affect men and women but tends to be more common in women. It may or may not be associated with the lesser degrees of blockages in the arteries. There is also an association between coronary spasm, migraine and a condition of the micro-circulation in the hands and feet known as Raynaud’s phenomena.

Clearly, cardiovascular disease is not just in the domain of men. Any symptoms referable to the heart in men and women need to be assessed immediately. A person doesn’t need to have the Hollywood heart attack i.e. Crushing central chest pain radiating to the throat and down the left arm to justify a cardiovascular workup.

The earlier these conditions are recognised; more effective treatments can be offered.

Frailty & Falls

Frailty and falls are significant concerns, particularly among older adults, as they significantly impact health outcomes and quality of life. Below the age of 70, you fall over, but over this age you “have a fall”. 

Frailty is characterized by a decrease in physiological reserve and increased vulnerability to stressors, leading to a higher risk of adverse outcomes, including falls. Research has highlighted that frailty can be identified through various physical and clinical markers, such as weakness, slow walking speed, and low physical activity levels.

There is a very useful frail scale which goes by the acronym, strangely, FRAIL. For every one yes answer you score one point and if you answer yes to 3 or more questions you are considered frail whereas 1 to 2 questions are considered pre-frail.

Frail scale

1)  Fatigue-are you tired most of the time?
2)  Resistance-can you walk up a flight of stairs unaided or without stopping and do you have difficulty getting out of a chair?
3)  Ambulation-can you walk one block without any problems?
4)  Illness-Do you have five or more illnesses? When you think about this answer it may be as simple as High blood pressure, obesity, diabetes, osteoporosis and arthritis. These are five illnesses, and this gives you one point.
5)  Loss of weight-Have you lost more than 5% of your body weight unintentionally over the past six months?

It is fact that from age 30 we lose muscle mass and bone mass. This is especially so for people who are inactive where you can lose 3 to 5% of bone and muscle mass per decade which accelerates over age 65. At age 30 we have maximum bone strength and especially after menopause, women for five years the rate of bone loss can be as much as 2 to 3% per year and then 1 % per year, thereafter. Typically, a female loses 53% of their peak bone mass by age 80.

A recent study published in the journal BMC Geriatrics examined a simple but effective method of assessing fall risk in older adults. Falls remain a significant health concern for older adults, being the second leading cause of injury-related deaths for individuals aged 65 and above, as reported by the World Health Organization (WHO). These incidents can severely impact quality of life, even without serious injuries.

 It is recommended that older adults undergo annual balance and mobility assessments during routine health visits, regardless of their overall health status. These tests are critical for early intervention and risk management.

 This study involving 153 participants aged 60 to 89 demonstrating an improved model for assessing fall risk. This research indicates that current testing protocols may not effectively predict future falls, even in those with seemingly good balance and mobility.
The Modified Balance Test requires individuals to maintain four standing positions for 30 seconds each to evaluate balance. 

The balance test is simple and only requires an older person to remain in each of the four positions
Parallel feet [bipedal], with one foot slightly in front of the other [semi-tandem],
with one foot in front of the other [tandem],
and balanced on left foot [unipedal].
and balanced on right foot [unipedal].
The study of 153 volunteers showed that the assessment can be much more effective if the individual can remain in at least two of the most challenging positions (preferably tandem and unipedal) for 30 seconds each.
The study found that for every extra second [of the 30 seconds] that the older person was able to stay in the tandem or unipedal position, the chance of falling over the next six months decreased by 5%. This makes it possible to predict the risk of falling over a six-month period, which is important because the test can be done in the clinic, quickly and without the need for equipment.
Implementing improved assessments can lead to timely interventions that may prevent falls, preserving mobility and independence in aging populations.
This comprehensive study underscores the need for regular assessment and potential adjustments in care practices for older adults to mitigate fall risks effectively.

Falls, often a consequence of frailty, pose a major risk for severe injuries, such as fractures and head trauma, which can lead to hospitalization and long-term disability. Approximately one in three older adults experiences a fall each year, emphasizing the urgent need for preventive measures. The interplay between frailty and falls is complex, as frail individuals may have diminished strength, balance, and coordination, compounding their fall risk.

Effective interventions are crucial to address these interconnected issues. Comprehensive fall prevention strategies may include physical therapy to improve strength and balance, environmental modifications to reduce hazards in the home, medication reviews to minimize side effects that can contribute to falls, and education for patients and caregivers about fall risks. 

Additionally, screening for frailty in primary care settings can help identify at-risk individuals, allowing for early interventions tailored to their specific needs.
Furthermore, promoting a culture of awareness regarding frailty and falls within healthcare settings is essential. Healthcare providers should receive ongoing training to recognize frailty and understand its implications for fall risk management. Through multidisciplinary approaches, including physiotherapists, occupational therapists, and geriatricians, it is possible to implement personalized care plans that enhance mobility, independence, and overall well-being.
In conclusion, addressing frailty and falls requires a comprehensive and proactive approach, focusing on prevention, early identification, and effective management strategies to improve health outcomes for older adults.

Hypertension

Hypertension, or high blood pressure, is a prevalent condition that can lead to serious health complications if left untreated. High blood pressure affects one in three adults. While medications remain the cornerstone of hypertension management, various non-pharmacological medical procedures have emerged as effective alternatives or adjuncts to traditional therapy.

It is my opinion that hypertension always needs to be treated regardless of vascular history because of the potential to contribute to cerebral haemorrhage, stroke, atrial fibrillation, heart failure and chronic kidney impairment. A recent trial of 9000 people followed for 3 years known as the SPRINT study targeted half the patients to a blood pressure level of 140/90 and the other half to 120/80. This study clearly showed that lowering the blood pressure to 120/80 reduced the risk for heart attack, stroke, sudden death and heart failure by around 30%.
A further sub-study from the same trial published in the Journal of the American Medical Association reviewed blood pressure control in midlife and the relationship to risk for cognitive impairment and potentially dementia later on. They collected 450 brain scans from people with an average age of 50 examining the white-matter lesions which are the connecting neurones within the brain. This study found that those people who were targeted to a blood pressure of 140/90 compared with those targeted to 120/80 had a significant increase in white-matter lesions which may be a potential marker for cognitive impairment and dementia in later life. Another study indicated aggressive management of blood pressure led to reduced cognitive impairment.

As with most significant health issues there are lifestyle factors that reduce blood pressure levels & risk
1. Get rid of that abdominal fat. A healthy waist circumference is < 95 cms for a male and < 80 cms for a female. (Sorry ladies, I don’t make the rules.)
2. 3-5 hours of moderate exercise on a weekly basis
3. Minimise sugar and salt intake
4. Reduce alcohol consumption to less than 3 standard glasses/day
5. Cultivate happiness in your life & try (as much as any of us can) to reduce stress.

There are 3 natural substances with an evidence base for blood pressure management
1. Kyolic aged garlic extract
2. Bergamot polyphenols-BJE 100 
3. 2 small pieces of dark chocolate daily, greater than 70% cocoa

The final major factor related to the generation of high blood pressure is sleep apnoea. If you are waking unrefreshed and feeling tired throughout the day, you should consider an evaluation for this condition and have this treated.
Despite addressing all of the above issues, many people need pharmaceutical treatment. The pharmaceutical management for hypertension, in my view, has been one of the major advances in medicine over the past century with a very strong evidence base and safety profile. I have a number of patients in my practice who for some reason are against using pharmaceutical therapies, but this is one area where the medical science is absolutely solid and irrefutable. 
Finally, around 5-10% of people have a secondary cause for hypertension. If your blood pressure remains high, despite lifestyle changes, natural therapies, sleep apnoea management & pills, you may need a thorough work up with a specialist hunting for one of these less common causes.

There is increasing interest in medical procedures to treat hypertension. One notable procedure is renal denervation, a minimally invasive technique that targets the renal sympathetic nerves responsible for regulating blood pressure. In this procedure, catheters are used to deliver radiofrequency energy to disrupt these nerves, leading to reduced sympathetic nervous system activity and, ultimately, lower blood pressure. Studies have shown promising results, particularly in patients with resistant hypertension, although long-term outcomes continue to be investigated.

Baroreceptor activation therapy is another innovative approach. This technique involves implanting a device that stimulates the baroreceptors in the carotid artery. The activated baroreceptors send signals to the brain to reduce sympathetic outflow, leading to decreased heart rate and lower blood pressure. Early studies have indicated significant reductions in blood pressure, with sustained effects over time.

A recent study published in the Lancet from the University of London examined the effectiveness of minimally invasive treatment to offer a quick cure for a common cause of high blood pressure.
The researchers have developed a minimally invasive procedure called Targeted Thermal Therapy (Triple T) for treating a common cause of high blood pressure.
This breakthrough treatment has the potential to address a condition that affects many individuals worldwide who are currently undiagnosed and untreated. The condition known as Primary Aldosteronism accounts for one in twenty cases of hypertension. However, fewer than 1% of affected individuals are diagnosed. This condition results from benign nodules in the adrenal glands producing excess aldosterone, a hormone that contributes to increased blood pressure. Standard blood pressure medications often fail to work for these patients, leading to higher risks of serious cardiovascular events.
The only definitive treatment until now has been surgical removal of the adrenal glands, which requires general anaesthesia, hospitalisation, and a lengthy recovery process, causing many patients to remain untreated. Removing the adrenals also means the patient may need adrenal supportive therapy.
Triple T provides a quicker and safer alternative to traditional surgery by selectively destroying the adrenal nodules while leaving the gland intact.
This minimally invasive procedure takes only about 20 minutes and utilizes advanced imaging techniques with molecular dyes to accurately identify the nodules for targeted treatment.
The treatment merges two established medical techniques: radiofrequency or microwave energy generates heat through a fine needle inserted into the nodule, and ultrasound provides real-time imaging to guide the procedure.
 An endoscopic approach allows access through the stomach, directly targeting the adrenal nodules while minimizing harm to surrounding tissues.

The study titled FABULAS, the name being an acronym for Feasibility study of radiofrequency endoscopic ABlation, with ULtrasound guidance, as a non-surgical, Adrenal Sparing treatment for aldosterone-producing adenomas.
FABULAS used Triple T in 28 patients with primary aldosteronism, whose molecular scan had pinpointed a hormone-producing nodule in the left adrenal gland. The new procedure was found to be safe and effective, with most patients having normal hormone levels six months later. Many participants were able to stop all blood pressure medications, with no recurrence of the condition.

Some experts believe that 10–20% of all hypertension may be due to curable nodules in one or both glands. 
One of the trial participants, Michelina Alfieri, related her story: "Before the study, I suffered from debilitating headaches for years despite multiple GP visits. As a full-time worker and single parent, my daily life was severely affected. This non-invasive treatment provided an immediate recovery—I was back to my normal routine straight away. I'm incredibly grateful to the team for giving me this choice."

The success of FABULAS has led to a larger randomized trial called "WAVE," which is comparing Triple T with traditional adrenal surgery. The results are expected in 2027.

The breakthrough was made possible thanks to the collaborative development of novel PET tracer molecules, which enable non-invasive diagnosis by allowing us to precisely locate and treat adrenal nodules for the first time."

If successfully tested further, Triple T could revolutionize the management of primary aldosteronism, providing a viable treatment option for millions who are currently overlooked in high blood pressure management.

 Procedures like weight loss surgeries (bariatric surgery) have demonstrated significant effectiveness in reducing blood pressure among obese individuals. 
Lastly, improving dietary habits through interventions such as the DASH (Dietary Approaches to Stop Hypertension) diet can also have profound impacts on blood pressure levels.
 
In summary, while medication remains vital in treating hypertension, these alternative and complementary procedures offer exciting avenues for managing the condition, particularly for individuals who may not respond adequately to pharmacological therapies. Ongoing research is essential to establish the long-term safety and efficacy of these methods in diverse patient populations.

As hypertension is the major cardiovascular risk factor worldwide, proper management would see the rates of all forms of vascular disease plummet. Keep the pressure down.


Preventing Cognative Decline:
A recent study highlights 13 drugs and supplements that may mitigate the effects of genes linked to accelerated brain ageing. A study from China employed a deep-learning model called 3D-ViT to analyse data from nearly 39,000 individuals in the UK Biobank, focusing on their health, genetic, and lifestyle factors.

The central core of this research is the concept of "brain age," which can differ from chronological age due to the influence of genetic factors. Seven genes were identified as key players in accelerating brain ageing, which can create a brain age gap—the difference between biological and actual age. The study found that cognitive function declined alongside increased brain age gaps, particularly in areas critical for cognition.

As the brain age gap increased, participants showed a corresponding decline in cognitive test scores, particularly due to changes in crucial brain regions involved in cognition, such as the lentiform nucleus and the posterior limb of the internal capsule.

Among the 64 genes analysed, seven stood out due to their significant impact on brain ageing: MAPT, TNFSF12, GZMB, SIRPB1, GNLY, NMB, and C1RL. Clinical trials indicated that 13 specific drugs and supplements could target these genes, potentially mitigating the risks for brain ageing. 

These include:
   - Cholecalciferol: A vitamin D supplement.
   - Dasatinib: A medication used in treating leukaemia.
   - Diclofenac: An anti-inflammatory drug.
   - Doconexent: An omega-3 fatty acid supplement.
   - Oestradiol: Commonly used in hormone replacement therapy.
   - Hydrocortisone: A steroid used to treat various conditions.
   - Mecamylamine: A drug for lowering blood pressure.
   - Nicotine: A stimulant that has shown potential neuroprotective effects.
   - Prasterone: Used for menopausal symptoms.
   - Quercetin and Resveratrol: Supplements known for their antioxidant properties.
   - Sirolimus: An immunosuppressant used post-organ transplantation.
   - Testosterone: Hormone that may play a role in cognitive health.

There is certainly no harm from taking the supplements but all the drugs mentioned have the potential for significant side effects.

In 2017, Dale Bredesen was first published “The End of Alzheimer’s: The First Program to Prevent and Reverse Cognitive Decline". In this groundbreaking book, Bredesen presents a comprehensive program aimed at preventing and reversing Alzheimer’s disease. He combines insights from his research on the underlying mechanisms of Alzheimer’s with practical lifestyle changes and dietary recommendations. The book details a multi-faceted approach that addresses various contributors to cognitive decline, such as inflammation, insulin resistance, and nutrient deficiencies. Bredesen argues that Alzheimer’s is not a singular disease but rather a collection of syndromes, advocating for personalized treatment plans to optimize brain health and functionality. The book seeks to empower readers with strategies to improve cognitive health and offers hope for those affected by this devastating disease.

Bredesen has now studied thousands of patients utilising his 4-component program demonstrating reversal of cognitive decline in many people. The program involves lifestyle changes (my 5 Keys), a variety of evidence-based supplements, brain training (i.e. Use it or lose it), along with direct cranial stimulation with an external electro-magnetic device.

Although I am not advocating that we should be taking all of the 13 drugs & supplements mentioned in the study, I am suggesting we should be doing everything possible to prevent & manage all forms of cognitive decline. 

Dale Bredesen’s work along with this recent study from China, along with numerous other similar studies suggest a promising direction for interventions that could slow down the ageing process of the brain, potentially benefiting cognitive health as individuals grow older. This evidence underscores the intricate relationship between genetics, brain health, and the potential therapeutic roles of various substances.


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
                <span>Dr.Walker is thinking...</span>
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