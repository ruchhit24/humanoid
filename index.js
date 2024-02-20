 // Create SpeechRecognition instance
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

// Create SpeechSynthesisUtterance instance
const synthesisUtterance = new SpeechSynthesisUtterance();

// Configure recognition parameters
recognition.lang = 'en-US'; // Set language to English (United States)
recognition.interimResults = false; // Only return final results
recognition.continuous = false; // Stop recognition after the user pauses

// Handle recognition events
recognition.onstart = () => {
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.innerText = 'Listening...';
    }
    const status = document.getElementById('status');
    if (status) {
        status.innerText = 'Status: Listening...';
    }
    console.log('Speech recognition started');
};

recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    console.log('Speech recognized:', speechToText);
    const transcript = document.getElementById('transcript');
    if (transcript) {
        transcript.innerText = 'Transcript: ' + speechToText;
    }
        // Show speak button
        const speakButton = document.getElementById('speakButton');
        if (speakButton) {
            speakButton.style.display = 'block';
        }
    
        // Set recognized text to speech synthesis utterance
        synthesisUtterance.text = speechToText;
};
 

recognition.onend = () => {
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.innerText = 'Start Speech Recognition';
    }
    const status = document.getElementById('status');
    if (status) {
        status.innerText = 'Status: Ended';
    }
    console.log('Speech recognition ended');
};

recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    const status = document.getElementById('status');
    if (status) {
        status.innerText = 'Status: Error - ' + event.error;
    }
};

// Start recognition when the button is clicked
const startButton = document.getElementById('startRecognitionButton');
if (startButton) {
    startButton.addEventListener('click', () => {
        recognition.start();
    });
} else {
    console.error('Element with id "startRecognitionButton" not found.');
}

// Speak the recognized text when the speak button is clicked
const speakButton = document.getElementById('speakButton');
if (speakButton) {
    speakButton.addEventListener('click', () => {
        window.speechSynthesis.speak(synthesisUtterance);
    });
} else {
    console.error('Element with id "speakButton" not found.');
}
