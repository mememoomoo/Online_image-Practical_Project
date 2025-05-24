
const heroCtaButton = document.getElementById('hero-cta-button');
const heroCtaContainer = document.getElementById('heroCtaContainer');

heroCtaButton.addEventListener('click', () => {
    heroCtaContainer.classList.toggle('closed');
    setTimeout(() => {
        heroCtaContainer.remove();
    }, 600);
});
