// ==========================================
//        SCRIPT PRINCIPAL DU PORTFOLIO       
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  //   NAVIGATION FLUIDE PAR NUMÉROTATION     
  // ==========================================
  const numbers = document.querySelectorAll('.number-link');
  numbers.forEach(number => {
    number.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = number.getAttribute('href').substring(1);
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  //   RÉVÉLATION DES CARTES DE COMPÉTENCES    
  // ==========================================
  const cards = document.querySelectorAll('.competence-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('revealed');
    });
  });

  // ==========================================
  //   INITIALISATION DU SLIDE CAROUSEL AU CHARGEMENT  
  // ==========================================
  showSlide(currentSlide);
});

// ==========================================
//      FONCTION POUR RÉVÉLER UNE CARTE       
// ==========================================
function revealCard(element) {
  element.classList.add("revealed");
}

// ==========================================
//        GESTION DU CAROUSEL PROJETS         
// ==========================================
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === currentSlide) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
