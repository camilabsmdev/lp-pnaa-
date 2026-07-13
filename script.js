/* 
   script.js - Paz e Negreiros Advogados
   Handles FAQ accordion toggle and Team bios modal
*/

document.addEventListener('DOMContentLoaded', () => {
  // --- FAQ ACCORDION LOGIC ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon-toggle i');

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items for a clean accordion effect
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon-toggle i');
          
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.style.maxHeight = null;
          if (otherIcon) {
            otherIcon.className = 'fa-solid fa-plus';
          }
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
        if (icon) {
          icon.className = 'fa-solid fa-plus';
        }
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        // Set dynamic max-height based on scroll height
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) {
          icon.className = 'fa-solid fa-xmark';
        }
      }
    });
  });


  // --- TEAM MODAL LOGIC ---
  const aboutCtaBtn = document.getElementById('about-cta-btn');
  const teamModal = document.getElementById('team-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (aboutCtaBtn && teamModal) {
    // Open Modal
    aboutCtaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      teamModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    });

    // Close Modal via close button
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        teamModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close Modal via clicking outside content
    teamModal.addEventListener('click', (e) => {
      if (e.target === teamModal) {
        teamModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close Modal via ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && teamModal.classList.contains('active')) {
        teamModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
