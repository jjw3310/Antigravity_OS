document.addEventListener('DOMContentLoaded', () => {
    console.log('Antigravity OS Dashboard Initialized');

    // Add subtle hover sound or effect if wanted
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Future interaction logic
        });
    });

    // Terminal typing effect
    const terminalText = document.querySelector('.typing');
    const messages = [
        "Awaiting next instruction...",
        "Scanning project guidelines...",
        "Optimizing behavioral OS...",
        "Premium UI active.",
        "Engineering discipline at 100%."
    ];
    let msgIndex = 0;

    setInterval(() => {
        msgIndex = (msgIndex + 1) % messages.length;
        terminalText.style.opacity = 0;
        setTimeout(() => {
            terminalText.textContent = messages[msgIndex];
            terminalText.style.opacity = 1;
        }, 500);
    }, 4000);
});
