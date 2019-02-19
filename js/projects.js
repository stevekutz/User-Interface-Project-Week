

///////////////////////////////////////////////////////////////////////////////////
//  the following dynamically modifies tagline text to resize with window and
//  maintain

/*
  // THIS IS FOR DEBUGGING - variables are for resizing
                           - will display value in debugging elements
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


const resizeFloatText = () => {
  const text = document.querySelector('#overText');
    console.log('text gives  ', text);

  const IMG = document.querySelector('.projectsJumboIMG');
  const img_height = IMG.height;

  const text_fontSize = (img_height * .23).toString() + 'px';

  text.style.fontSize = text_fontSize;
  text.style.lineHeight = text_fontSize;
  text.style.display = 'block';

};


/*
var text_ = document.querySelector('#overText');
var IMG_ = document.querySelector('.projectsJumboIMG');

//const resizer = (text_, IMG_) => {
function resizer(text_, IMG_) {
  const img_height = IMG.height;
  const text_fontSize = (img_height * .23).toString() + 'px';

  text.style.fontSize = text_fontSize;
  text.style.lineHeight = text_fontSize;
  text.style.display = 'block';

}

window.addEventListener('resize', () => resizer() );
*/


//window.addEventListener('resize', () => resizeFloatText() );
window.addEventListener('load', () =>  resizeFloatText() );