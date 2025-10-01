 function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }

      // Scroll animations
      function handleScrollAnimations() {
        const elements = document.querySelectorAll('.fade-in-up, .fade-in, .section-border');
        
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
          }
        });
      }

      // Initialize animations on page load
      window.addEventListener('load', () => {
        // Trigger initial animations for elements in view
        handleScrollAnimations();
        
        // Add animate class to nav immediately
        const nav = document.querySelector('#desktop-nav, #hamburger-nav');
        if (nav) nav.classList.add('animate');
      });

      // Trigger animations on scroll
      window.addEventListener('scroll', handleScrollAnimations);

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });