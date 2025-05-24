
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
});