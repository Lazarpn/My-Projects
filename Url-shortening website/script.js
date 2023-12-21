'use stict';

const linksContainer = document.querySelector('.home__links');
const btnShorten = document.querySelector('.btn__form');
const urlInput = document.querySelector('.form__shorten__input');
const nav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const btnSignUpAll = document.querySelectorAll('.btn--sign-up');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

// IMPLEMENTING LINKS
const getShorterURL = async function (url) {
  try {
    const result = await fetch(url);
    const data = await result.json();
    const shortenURL = data.result.full_short_link;
    return shortenURL;
  } catch (err) {
    console.log(err);
  }
};

const addLink = function (url, shortenURL) {
  if (!shortenURL) return;
  const html = `
  <div class="home__link">
    <span class="link__full">${url}</span>
    <span class="link__shortened">${shortenURL}</span>
    <butotn class="btn btn__copy btn--edge">Copy</button>
  </div>
  `;
  linksContainer.insertAdjacentHTML('beforeend', html);
};

btnShorten.addEventListener('click', function () {
  const url = urlInput.value;
  if (!url) return;
  getShorterURL(url).then(shortenURL => addLink(url, shortenURL));
});

linksContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn__copy')) return;
  e.target.textContent = 'Copied!';
  e.target.style.backgroundColor = 'var(--color-neutral-dark-violet)';
  navigator.clipboard.writeText(urlInput.value);
});

// Implementing sticky nav

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().x}px`,
};
const headerObserver = new IntersectionObserver(function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}, options);
headerObserver.observe(header);

// modal

btnSignUpAll.forEach(btn =>
  btn.addEventListener('click', function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  })
);
