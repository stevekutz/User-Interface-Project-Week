// JS goes here


///////////////////////////////////////////////////////////////////////////////////
//  the following dynamically modifies tagline text to resize with window and
//  maintain positioning

const slogan = document.querySelectorAll('#tagline');
const jumboIMG = document.querySelectorAll('.homeJumboIMG');


const IMG_size = document.querySelector('.IMG_size');
const h1_size = document.querySelector('.h1_size');
const h1_fontSize = document.querySelector('.h1_fontSize');
const h1_lh = document.querySelector('.h1_lh');

window.addEventListener('resize', () =>   {

  const img_height = jumboIMG[0].height;
  const slogan_fontSize = (img_height * .096).toString() + 'px';

  slogan[0].style.fontSize = slogan_fontSize;
  slogan[0].style.lineHeight = slogan_fontSize;

/*    THIS IS FOR DEBUGGING, will make values show up on main page on resize
  IMG_size.textContent = `jumboIMG height is ${jumboIMG[0].height}`;
  h1_size.textContent = `slogan height is ${slogan[0].clientHeight}`;
  h1_fontSize.textContent = `slogan font size is ${slogan[0].style.fontSize.toString()}`;
  h1_lh.textContent = `slogan line height is ${slogan[0].style.lineHeight}`;
*/

});

///////////////////////////////////////////////////////////////////////////////////
//

