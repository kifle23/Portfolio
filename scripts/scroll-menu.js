document.addEventListener('DOMContentLoaded', () => {
  let currentTarget = null;

  function scrollToTarget(target) {
    const portfolioSection = document.querySelector('#resent-works');
    const aboutSection = document.querySelector('#about-section');
    const contactSection = document.querySelector('#contact-detail');

    if (target === currentTarget) {
      return;
    }

    if (target === '#resent-works') {
      portfolioSection.classList.add('slide-in', 'active');
      aboutSection.classList.add('slide-out');
      contactSection.classList.add('slide-out');

      setTimeout(() => {
        portfolioSection.classList.remove('slide-in');
        aboutSection.classList.remove('slide-out');
        contactSection.classList.remove('slide-out');
      }, 2000);
    } else if (target === '#about-section') {
      portfolioSection.classList.add('slide-out');
      aboutSection.classList.add('slide-in', 'active');
      contactSection.classList.add('slide-out');

      setTimeout(() => {
        portfolioSection.classList.remove('slide-out');
        aboutSection.classList.remove('slide-in');
        contactSection.classList.remove('slide-out');
      }, 2000);
    } else if (target === '#contact-detail') {
      portfolioSection.classList.add('slide-out');
      aboutSection.classList.add('slide-out');
      contactSection.classList.add('slide-in', 'active');

      setTimeout(() => {
        portfolioSection.classList.remove('slide-out');
        aboutSection.classList.remove('slide-out');
        contactSection.classList.remove('slide-in');
      }, 2000);
    }

    currentTarget = target;

    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  function handleMenuClick(event) {
    const { target } = event.target.dataset;
    if (target) {
      scrollToTarget(target);
    }
  }

  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', handleMenuClick);
  });
});
