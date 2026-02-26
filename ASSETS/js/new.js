const searchBtn = document.getElementById('searchBtn');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const projects = document.querySelectorAll('.testimonial-card');

// Toggle the search bar life
searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }
});

// Real-time filtering logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    projects.forEach(card => {
        // Search through the title, quote, and author text
        const content = card.innerText.toLowerCase();
        
        if (content.includes(term)) {
            card.style.display = "flex"; // Keep the flex layout
            card.style.opacity = "1";
        } else {
            card.style.display = "none";
        }
    });
});