document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const diseaseCards = document.querySelectorAll('.disease-card');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        diseaseCards.forEach(card => {
            const cardTitle = card.querySelector('h4').textContent.toLowerCase();
            const cardText = card.querySelector('p').textContent.toLowerCase();

            if (cardTitle.includes(searchTerm) || cardText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
