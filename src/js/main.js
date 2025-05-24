document.addEventListener('DOMContentLoaded', function() {
    const titleText = document.title;
    const pageName = titleText.split(' |')[0];
    const currentPage = document.getElementById('currentPage');

    if (currentPage) {
        currentPage.textContent = pageName;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-item__question').forEach(item => {
        item.addEventListener('click', function() {
            const answerId = item.getAttribute('aria-controls');
            const answer = document.getElementById(answerId);
            let gateState = item.getAttribute('aria-expanded');
            
            if (answer && gateState === 'false') {
                answer.hidden = false;
                item.setAttribute('aria-expanded', 'true');
                item.setAttribute('aria-label', 'Click to collapse the answer.');
            } else if (answer && gateState === 'true') {
                answer.hidden = true;
                item.setAttribute('aria-expanded', 'false');
                item.setAttribute('aria-label', 'Click to expand the answer.');
            }

            setTimeout(() => {
                item.blur();
            }, 600);
        });
    });
});

const heroCtaButton = document.getElementById('hero-cta-button');
const heroCtaContainer = document.getElementById('heroCtaContainer');

heroCtaButton.addEventListener('click', () => {
    heroCtaContainer.classList.toggle('closed');
    setTimeout(() => {
        heroCtaContainer.remove();
    }, 600);
});

document.addEventListener('DOMContentLoaded', function () {
    const showMoreSection = document.getElementById('showMoreSection');
    const showMoreButton = document.getElementById('showMoreButton');

    if (!showMoreSection || !showMoreButton) return;

    const paragraphs = Array.from(showMoreSection.querySelectorAll('.paragraph'));
    const showCount = parseInt(showMoreSection.getAttribute('data-show-paragraphs'), 10) || paragraphs.length;

    // Measure the height needed for the visible paragraphs
    let totalHeight = 0;
    for (let i = 0; i < paragraphs.length; i++) {
        if (i < showCount) {
            paragraphs[i].style.display = '';
            totalHeight += paragraphs[i].offsetHeight;
        } else {
            paragraphs[i].style.display = 'none';
        }
    }

    // Set the height to fit only the visible paragraphs
    showMoreSection.style.height = totalHeight + 'px';

    showMoreButton.addEventListener('click', function () {
        const paragraphs = showMoreSection.querySelectorAll('.paragraph');
        let gateState = showMoreButton.getAttribute('data-gate');

        // Check open/closed state and adjust container height,
        // button text, gate state, and paragraph visibility
        if (gateState === 'closed') {
            paragraphs.forEach(paragraph => {
                paragraph.style.display = '';
            });

            showMoreSection.style.height = 'fit-content';
            showMoreButton.innerHTML = '<p>Show Less</p>';
            showMoreButton.setAttribute('data-gate', 'open');
            showMoreButton.setAttribute('aria-label', 'Click to show less of the above content.');
        } else if (gateState === 'open') {
            for (let i = 0; i < paragraphs.length; i++) {
                if (i < showCount) {
                    paragraphs[i].style.display = '';
                    totalHeight += paragraphs[i].offsetHeight;
                } else {
                    paragraphs[i].style.display = 'none';
                }
            }

            showMoreButton.innerHTML = '<p>Show More</p>';
            showMoreButton.setAttribute('data-gate', 'closed');
            showMoreButton.setAttribute('aria-label', 'Click to show more of the above content.');
        }

        // Remove focus from button after click
        setTimeout(() => {
            showMoreButton.blur();
        }, 600);
    });

    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            for (let i = 0; i < paragraphs.length; i++) {
                if (i < showCount) {
                    paragraphs[i].style.display = '';
                    totalHeight += paragraphs[i].offsetHeight;
                } else {
                    paragraphs[i].style.display = 'none';
                }
            }
        }, 150);
    });
});