

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

  const text = document.querySelectorAll('#overText');
  const IMG = document.querySelectorAll('.servicesJumboIMG');

  const img_height = IMG[0].height;
  const text_fontSize = (img_height * .23).toString() + 'px';

  text[0].style.fontSize = text_fontSize;
  text[0].style.lineHeight = text_fontSize;
  text[0].style.display = 'block';

};

window.addEventListener('resize', () => resizeFloatText() );
window.addEventListener('load', () =>  resizeFloatText() );


///////////////////////////////////////////////////////////////////////////////////
//    tab navigation system


// step 3) class for each tabName item

class Button{
  constructor(tabBTN_attr) {

    // for FUN
    this.button_val =

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
    // create  NodeList reference to every tab_BTN div
    const buttons = document.querySelectorAll('.tab_BTN');
        console.log('!!!!! BUTTON CLICKED, buttons QSA inside selectBTN() is ', buttons);

    // !!!!!!!!   REFACTORED - not needed!
    //this.BTN.classList.toggle('active');
    //  console.log('!!!!! tab_BTN div toggled to active ', this.BTN);

    console.log('!!!!! this.BTN is ', this.BTN);

    this.BTN_content.toggleActiveBTN();

  }

}


class ButtonInfo {
  constructor(buttonData) {
    // entire tab-info div passed in as ButtonData
  console.log('++++++++  ButtonContent  created ', buttonData);

  // reference created
  this.buttonInfo = buttonData;

  }

  toggleActiveBTN() {

     //  click on BTN --> selectBTN() carries this.buttonInfo to --> toggleActiveButton()\
     //  NodeList of tab-info shows all tab-info and which is active
    const info = document.querySelectorAll('.tab-info');
      console.log('++++ inside of toggleActive(), info QSA is ', info);


     // IF WE COMMENT THIS OUT, each tab-info section will toggle on/off by itself
      // EVERY combination of tab-info can be displayed (e.g. none, construction & design built, ...)
    // LEAVING in in allows only 1 tab-info section to be shown
    [...info].forEach( item => item.classList.remove('active') );


       this.buttonInfo.classList.toggle('active');

  }

}

// Step 1)     get reference to all tab-BTN sections
const tabBTN_names = document.querySelectorAll('.tab_BTN');
  console.log('QSA is for tab_BTN gives the NodeList', tabBTN_names);


// Step 2) crete class for each NodeList Item
[...tabBTN_names].forEach(item => new Button(item));


