

///////////////////////////////////////////////////////////////////////////////////
//  the following dynamically modifies tagline text to resize with window and
//  maintain

/*
/// THIS IS FOR DEBUGGING -variables for resizing
const IMG_size = document.querySelector('.IMG_size');
const h1_size = document.querySelector('.h1_size');
const h1_fontSize = document.querySelector('.h1_fontSize');
const h1_lh = document.querySelector('.h1_lh');
*/

const text = document.querySelectorAll('#overText');
const IMG = document.querySelectorAll('.servicesJumboIMG');
console.log('IMG is ', IMG );

window.addEventListener('resize', () =>   {

  const img_height = IMG[0].height;
  const text_fontSize = (img_height * .23).toString() + 'px';

  text[0].style.fontSize = text_fontSize;
  text[0].style.lineHeight = text_fontSize;
/*
//   THIS IS FOR DEBUGGING, will make values show up on main page on resize
    IMG_size.textContent = `jumboIMG height is ${IMG[0].height}`;
    h1_size.textContent = `slogan height is ${text[0].clientHeight}`;
    h1_fontSize.textContent = `slogan font size is ${text[0].style.fontSize.toString()}`;
    h1_lh.textContent = `slogan line height is ${text[0].style.lineHeight}`;
*/

});

///////////////////////////////////////////////////////////////////////////////////
//    tab navigation system


// step 3) class for each tabName item

class Button{
  constructor(tabBTN_attr) {

    this.BTN = tabBTN_attr;  // entire .tab_BTN div
      // console.log('+++++ Button created with attr of ', this.BTN);

    // get dataset attribute  (e.g. pre-construction, ...)
    this.BTN_dataset = this.BTN.dataset.tab;
       // console.log('data-tab value is ', this.BTN_dataset);

    // get the entire .tab-info div that matches BTN_dataset value
    this.BTN_content = document
      .querySelector(`.tab-info[data-tab = '${this.BTN_dataset}']`);
       // console.log('this.BTN_content div is ', this.BTN_content);

    // create component class to handle all data content of BTN_content
    this.BTN_content = new ButtonInfo(this.BTN_content);

    this.BTN.addEventListener('click', () => this.selectBTN() );


  }

  selectBTN() {
    const buttons = document.querySelectorAll('.tab_BTN');
        console.log('buttons QSA inside selectBTN() is ', buttons);

    this.BTN.classList.toggle('active');

    this.BTN_content.toggleActiveBTN();

  }



}


class ButtonInfo {
  constructor(buttonData) {
  console.log('++++++++  ButtonContent  created ', buttonData);

  this.buttonInfo = buttonData;

  }


  toggleActiveBTN() {

    const info = document.querySelectorAll('.tab-info');
      console.log('inside of toggleActive(), info QSA is ', info);

     [...info].forEach( item => item.classList.remove('active') );
       console.log('elements AFTER removal are ', info);



     this.buttonInfo.classList.toggle('active');


  }

}














// Step 1)     get reference to all tab-BTN sections
const tabBTN_names = document.querySelectorAll('.tab_BTN');
  console.log('QSA is for tab_BTN gives the NodeList', tabBTN_names);


// Step 2) crete class for each NodeList Item
[...tabBTN_names].forEach(item => new Button(item));


