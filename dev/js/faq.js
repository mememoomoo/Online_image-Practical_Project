
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
