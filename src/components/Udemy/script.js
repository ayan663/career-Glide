function toggleSteps(card) {
    card.classList.toggle('active');
  }
  
function searchRoadmap() {
    const searchInput = document.querySelector('input[type="text"]').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const summary = card.querySelector('.card-summary').textContent.toLowerCase();
  
      if (title.includes(searchInput) || summary.includes(searchInput)) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none'; 
      }
    });
  }
  
  document.querySelector('input[type="text"]').addEventListener('input', searchRoadmap);