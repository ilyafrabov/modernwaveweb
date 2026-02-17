const waveOne = document.querySelector('.wave-one');
const waveTwo = document.querySelector('.wave-two');

const animateWaves = () => {
  const y = window.scrollY;
  if (waveOne) waveOne.style.transform = `translateY(${y * 0.08}px)`;
  if (waveTwo) waveTwo.style.transform = `translateY(${y * 0.14}px)`;
};

window.addEventListener('scroll', animateWaves, { passive: true });
animateWaves();

const modal = document.getElementById('contact-modal');
const openButtons = document.querySelectorAll('[data-open-contact]');
const closeButton = document.querySelector('[data-close-contact]');

const openModal = () => {
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
};

openButtons.forEach((button) => button.addEventListener('click', openModal));
if (closeButton) closeButton.addEventListener('click', closeModal);

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
}

const callbackForm = document.querySelector('.callback-form');
if (callbackForm) {
  callbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = document.querySelector('.form-note');
    if (note) note.textContent = 'Спасибо! Заявка принята — мы свяжемся с вами в ближайшее время.';
    callbackForm.reset();
  });
}
