const allSection = document.querySelectorAll('.section');
const allLinks = document.querySelector('.nav-links');
const year = document.querySelector('.date');

allLinks.addEventListener('click', (e) => {
  const clicked = e.target;
  if (!clicked.classList.contains('link')) return;
  allSection.forEach((section) => {
    section.classList.remove('active');
  });
  document
    .querySelector(`.section-${clicked.dataset.link}`)
    .classList.add('active');
});

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: 'false',
};
const today = new Date();
const locale = navigator.language;

year.textContent = today.toLocaleDateString('en-US', options, locale);
