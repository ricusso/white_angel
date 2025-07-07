
document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });


  const menuButton = document.querySelector(".menu-button");
  const headerNav = document.querySelector(".header-nav");

  if (menuButton && headerNav) {
    menuButton.addEventListener("click", function () {
      headerNav.classList.toggle("active");
    });
  }

  const reviewsScroll = document.querySelector(".reviews-scroll");
  const reviewDots = document.querySelectorAll(".dot");

  if (reviewDots.length > 0) {
    reviewDots.forEach((dot, index) => {
      dot.addEventListener("click", function () {

        reviewDots.forEach((d) => d.classList.remove("active"));

        this.classList.add("active");

 
        if (reviewsScroll) {
          const scrollAmount = index * (672 + 24); 
          reviewsScroll.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      });
    });
  }


  const serviceItems = document.querySelectorAll(".service-item");

  serviceItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all items
      serviceItems.forEach((i) => i.classList.remove("active"));
      // Add active class to clicked item
      this.classList.add("active");

      // Here you would typically update the service showcase content
      // For now, we'll just update the visual state
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe sections for fade-in animation
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // Form submission handlers for CTA buttons
  const ctaButtons = document.querySelectorAll(
    '[class*="cta-button"], .service-cta',
  );

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Simple booking modal or redirect logic
      if (
        confirm(
          "Хотите записаться на услугу? Мы перенаправим вас на страницу записи.",
        )
      ) {
        // Here you would implement actual booking logic
        // For now, we'll just show an alert
        alert(
          "Функция записи будет доступна в ближайшее время. Позвоните нам: +7 (962) 559-28-89",
        );
      }
    });
  });

  // Phone number formatting
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Analytics tracking for phone calls could be added here
      console.log("Phone call initiated:", this.href);
    });
  });

  // Email link tracking
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Analytics tracking for email opens could be added here
      console.log("Email opened:", this.href);
    });
  });

  // Social media link tracking
  const socialLinks = document.querySelectorAll(
    ".social-links a, .contact-social a, .footer-social a",
  );
  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Analytics tracking for social media clicks
      console.log(
        "Social media link clicked:",
        this.getAttribute("aria-label"),
      );

      // Show message about social media
      alert(
        "Следите за нами в социальных сетях для получения актуальной информации об акциях и новостях салона!",
      );
    });
  });

  // Header scroll effect
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
  });

  // Add transition to header
  header.style.transition = "transform 0.3s ease";

  // Portfolio gallery modal (basic implementation)
  const portfolioImages = document.querySelectorAll(
    ".portfolio-gallery-left img, .portfolio-gallery-right img, .portfolio-main",
  );

  portfolioImages.forEach((img) => {
    img.addEventListener("click", function () {
      // Create simple modal overlay
      const modal = document.createElement("div");
      modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                cursor: pointer;
            `;

      const modalImg = document.createElement("img");
      modalImg.src = this.src;
      modalImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 16px;
            `;

      modal.appendChild(modalImg);
      document.body.appendChild(modal);

      // Close modal on click
      modal.addEventListener("click", function () {
        document.body.removeChild(modal);
      });

      // Close modal on Escape key
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && document.body.contains(modal)) {
          document.body.removeChild(modal);
        }
      });
    });
  });

  // Service gallery interaction
  const serviceGalleryImages = document.querySelectorAll(
    ".service-gallery img",
  );

  serviceGalleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      // Similar modal implementation for service images
      const modal = document.createElement("div");
      modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                cursor: pointer;
            `;

      const modalImg = document.createElement("img");
      modalImg.src = this.src;
      modalImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 16px;
            `;

      modal.appendChild(modalImg);
      document.body.appendChild(modal);

      modal.addEventListener("click", function () {
        document.body.removeChild(modal);
      });
    });
  });

  // Add loading state to buttons
  function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = "Загрузка...";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  }

  // Statistics counter animation
  const statNumbers = document.querySelectorAll(".stat-number");

  function animateCounter(element) {
    const target = element.textContent;
    const isNumeric = /^\d+/.test(target);

    if (isNumeric) {
      const finalNumber = parseInt(target.replace(/\D/g, ""));
      const duration = 2000;
      const increment = finalNumber / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= finalNumber) {
          current = finalNumber;
          clearInterval(timer);
        }

        if (target.includes("000")) {
          element.textContent = Math.floor(current / 1000) + " 000";
        } else {
          element.textContent = Math.floor(current);
        }
      }, 16);
    }
  }

  // Trigger counter animation when stats section is visible
  const statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll(".stat-number");
          statNumbers.forEach(animateCounter);
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  const aboutSection = document.querySelector(".about");
  if (aboutSection) {
    statsObserver.observe(aboutSection);
  }

  // Lazy loading for images
  const images = document.querySelectorAll("img");
  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = "0";
        img.style.transition = "opacity 0.3s ease";

        const loadImage = new Image();
        loadImage.onload = function () {
          img.style.opacity = "1";
        };
        loadImage.src = img.src;

        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    imageObserver.observe(img);
  });

  console.log("Белый Ангел website loaded successfully!");
});

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Resize handler
window.addEventListener(
  "resize",
  debounce(function () {
    // Handle responsive adjustments
    const width = window.innerWidth;

    if (width <= 768) {
      // Mobile adjustments
      const serviceCards = document.querySelectorAll(".service-card");
      serviceCards.forEach((card) => {
        card.style.height = "200px";
      });
    } else {
      // Desktop adjustments
      const serviceCards = document.querySelectorAll(".service-card");
      serviceCards.forEach((card) => {
        card.style.height = "236px";
      });
    }
  }, 250),
);
