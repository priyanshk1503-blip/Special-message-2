document.addEventListener('DOMContentLoaded', function() {
    // Get all the different screens
    const loadingScreen = document.getElementById('loading-screen');
    const envelopeScreen = document.getElementById('envelope-screen');
    const letterContent = document.getElementById('letter-content');
    const envelope = document.getElementById('envelope');

    // --- SEQUENCE START ---

    // 1. After 3 seconds, hide the loading screen and show the envelope
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        envelopeScreen.classList.remove('hidden');
    }, 3000); // 3000 milliseconds = 3 seconds

    // 2. When the envelope is clicked...
    envelope.addEventListener('click', () => {
        // Add the 'open' animation to the envelope
        envelope.classList.add('envelope-open');

        // After the envelope animation finishes (1 second), hide the envelope screen and show the letter
        setTimeout(() => {
            envelopeScreen.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Allow scrolling now
            
            letterContent.classList.remove('hidden');
            letterContent.classList.add('visible'); // Special class to slide it in
        }, 1000); // 1000 milliseconds = 1 second
    });
});
