document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('back-to-top');
  const brochureBtn = document.getElementById('brochure-btn');
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  function scrollHeader() {
    if (window.scrollY >= 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  function showBackToTop() {
    if (window.scrollY >= 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }

  function toggleMenu() {
    navMenu.classList.toggle('show');
  }

  function closeMenu() {
    navMenu.classList.remove('show');
  }

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        closeMenu();
      }
    }
  }

  function handleBrochureRequest() {
    alert('Thank you for your interest! Please contact us at +91 7448829972 or urschoicemadurai@gmail.com to receive our property brochure.');
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      location: formData.get('location'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(data.phone)) {
      showFormMessage('Please enter a valid 10-digit phone number.', 'error');
      return;
    }

    try {
      contactForm.querySelector('button[type="submit"]').disabled = true;
      contactForm.querySelector('button[type="submit"]').textContent = 'Sending...';

      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form submission:', data);

      showFormMessage('Thank you for your interest! We will contact you shortly.', 'success');
      contactForm.reset();

      setTimeout(() => {
        window.location.href = `tel:+917448828872`;
      }, 2000);

    } catch (error) {
      console.error('Form submission error:', error);
      showFormMessage('Something went wrong. Please call us at +91 7448829972.', 'error');
    } finally {
      contactForm.querySelector('button[type="submit"]').disabled = false;
      contactForm.querySelector('button[type="submit"]').textContent = 'Request Callback';
    }
  }

  function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 5000);
  }

  function observeElements() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.property-card, .benefit-card, .vision-card, .value-item');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  }

  window.addEventListener('scroll', function () {
    scrollHeader();
    showBackToTop();
  });

  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }

  if (navClose) {
    navClose.addEventListener('click', closeMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (brochureBtn) {
    brochureBtn.addEventListener('click', handleBrochureRequest);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  observeElements();

  scrollHeader();
  showBackToTop();
});
