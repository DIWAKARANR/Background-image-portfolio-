document.addEventListener('DOMContentLoaded', function() {
    createSnowflakes();

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
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random() * 0.5 + 0.5; // Increased opacity
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
        snowflake.innerHTML = '❄';
        snowfallContainer.appendChild(snowflake);
    }
}
