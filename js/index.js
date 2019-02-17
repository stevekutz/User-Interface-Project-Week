// JS goes here


  // THIS IS FOR DEBUGGING - variables are for resizing
  //                       - will display value in debugging
/*
  const IMG_size = document.querySelector('.IMG_size');
  const h1_size = document.querySelector('.h1_size');
  const h1_fontSize = document.querySelector('.h1_fontSize');
  const h1_lh = document.querySelector('.h1_lh');
*/
   // THIS IS FOR DEBUGGING - put inside function !!!
   //                       - will show up content
/*
  IMG_size.textContent = `jumboIMG height is ${IMG[0].height}`;
  h1_size.textContent = `slogan height is ${text[0].clientHeight}`;
  h1_fontSize.textContent = `slogan font size is ${text[0].style.fontSize.toString()}`;
  h1_lh.textContent = `slogan line height is ${text[0].style.lineHeight}
*/



///////////////////////////////////////////////////////////////////////////////////
//  the following dynamically modifies tagline text to resize with window and
//  maintain positioning


const resizeFloatText = () => {

  const text = document.querySelectorAll('#tagline');
  const IMG = document.querySelectorAll('.homeJumboIMG');

  const img_height = IMG[0].height;
  const text_fontSize = (img_height * .096).toString() + 'px';

  text[0].style.fontSize = text_fontSize;
  text[0].style.lineHeight = text_fontSize;
  text[0].style.display = 'block';

};

window.addEventListener('resize', () => resizeFloatText() );

window.addEventListener('load', () =>  resizeFloatText() );