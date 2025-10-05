document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-btn');
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');

    openBtn.addEventListener('click', function() {
        // Hide the envelope
        envelope.style.display = 'none';

        // Show the letter
        letter.classList.remove('hidden');
    });
});
