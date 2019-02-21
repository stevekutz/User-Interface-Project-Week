

///////////////////////////////////////////////////////////////////////////////////
//  the following dynamically modifies tagline text to resize with window and
//  maintain

const resizeFloatText = () => {
  const text = document.querySelector('#overText');
//    console.log('text gives  ', text);

  const IMG = document.querySelector('.projectsJumboIMG');
  const img_height = IMG.height;

  const text_fontSize = (img_height * .23).toString() + 'px';

  text.style.fontSize = text_fontSize;
  text.style.lineHeight = text_fontSize;
  text.style.display = 'block';

};

window.addEventListener('resize', () => resizeFloatText() );
window.addEventListener('load', () =>  resizeFloatText() );


///////////////////////////////////////////////////////////////////////////////////
//

