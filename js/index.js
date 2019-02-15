// JS goes here


///////////////////////////////////////////////////////////////////////////////////
//  the following dynamically modifies tagline text to resize with window and
//  maintain positioning

const slogan = document.querySelectorAll('#tagline');
const jumboIMG = document.querySelectorAll('.homeJumboIMG');

window.addEventListener('resize', () =>   {

  console.log('RESIZING');
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

