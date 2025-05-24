document.addEventListener('DOMContentLoaded', function() {
    const titleText = document.title;
    const pageName = titleText.split(' |')[0];
    const currentPage = document.getElementById('currentPage');

    if (currentPage) {
        currentPage.textContent = pageName;
    }
});
