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

    // --- Mini-Game Logic ---
    const gameArea = document.getElementById('game-area');
    const heart = document.getElementById('heart-to-catch');
    let score = 0;
    let heartPosition = -40; // The vertical position of the heart
    let heartSpeed = 2; // How fast the heart falls

    // Function to reset the heart to the top at a random horizontal position
    function resetHeart() {
        heartPosition = -40; // Reset Y position to the top
        heart.style.top = heartPosition + 'px';
        
        // Get a random horizontal position
        const randomX = Math.floor(Math.random() * (gameArea.clientWidth - 30));
        heart.style.left = randomX + 'px';
    }

    // The main game loop - this function runs every ~16 milliseconds
    function gameLoop() {
        // Move the heart down
        heartPosition += heartSpeed;
        heart.style.top = heartPosition + 'px';

        // If heart falls off the bottom of the screen, reset it
        if (heartPosition > 300) {
            resetHeart();
        }
    }

    // When you click the heart
    heart.addEventListener('click', () => {
        score++;
        console.log("Score: " + score); // For now, we just log the score
        resetHeart(); // Reset the heart to fall again
    });

    // Start the game
    resetHeart();
    setInterval(gameLoop, 16); // Run the gameLoop function roughly 60 times per second
});
