document.addEventListener('DOMContentLoaded', function() {
    createSnowflakes();
    addHoverEffects();

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function createSnowflakes() {
    const snowfallContainer = document.querySelector('.snowfall');
    const snowflakeCount = 100;

    for (let i = 0; i < snowflakeCount; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random() * 0.5 + 0.5;
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
        snowflake.innerHTML = '❄';
        snowfallContainer.appendChild(snowflake);
    }
}

function addHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });
}

// Add a subtle parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.body.style.backgroundPositionY = `-${scrolled * 0.5}px`;
});

// Add a typing effect to the header
const header = document.querySelector('h1');
const text = header.textContent;
header.textContent = '';
let i = 0;
function typeWriter() {
    if (i < text.length) {
        header.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();
