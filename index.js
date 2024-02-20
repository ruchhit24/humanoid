 
// Check if browser supports the Web Speech API
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Create SpeechRecognition instance
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    // Configure recognition parameters
    recognition.lang = 'en-US'; // Set language to English (United States)
    recognition.interimResults = false; // Only return final results
    recognition.continuous = false; // Stop recognition after the user pauses

    // Handle recognition events
    recognition.onstart = () => {
        console.log('Speech recognition started');
    };

    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        console.log('Speech recognized:', speechToText);
    };

    recognition.onend = () => {
        console.log('Speech recognition ended');
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    // Start recognition when the button is clicked
    document.getElementById('startButton').addEventListener('click', () => {
        recognition.start();
    });
} else {
    alert('Speech recognition not supported in this browser.');
}