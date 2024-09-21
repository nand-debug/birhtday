document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('message').classList.remove('hidden');
    this.style.display = 'none';
    document.getElementById('cake').classList.remove('hidden');
    document.getElementById('cake').classList.add('grow');
    launchConfetti();
});

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti');
    
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confettiPiece);
    }
}
