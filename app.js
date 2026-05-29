const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

if(hamburger){
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

/* SAFE PAGE TRANSITION */

const links = document.querySelectorAll('a[href$=".html"]');

links.forEach(link => {

  link.addEventListener('click', function(e){

    const target = this.getAttribute('href');

    if(!target) return;

    e.preventDefault();

    document.body.style.opacity = '0';

    setTimeout(() => {
      window.location.href = target;
    }, 350);

  });

});

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

/* CHANGING TEXT */

const words = [
  'SZIRAKI',
  'FESTÉS-MÁZOLÁS',
  'GARANCIÁVAL',
  'GYORS HATÁRIDŐRE'
];

let wordIndex = 0;

const changingText = document.getElementById('changing-text');

if(changingText){

  setInterval(() => {

    wordIndex++;

    if(wordIndex >= words.length){
      wordIndex = 0;
    }

    changingText.style.opacity = 0;

    setTimeout(() => {

      changingText.textContent = words[wordIndex];

      changingText.style.opacity = 1;

    }, 300);

  }, 2500);

}
