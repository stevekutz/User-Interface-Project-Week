// JS goes here


const slogan = document.querySelectorAll('#tagline');
const jumboIMG = document.querySelectorAll('.homeJumboIMG');


const IMG_size = document.querySelector('.IMG_size');
const h1_size = document.querySelector('.h1_size');


window.addEventListener('resize', () => {

  IMG_size.textContent = `jumboIMG height is ${jumboIMG[0].height}`;
  h1_size.textContent = `slogan height is ${slogan[0].clientHeight}`;

});