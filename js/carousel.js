class Carousel {
  constructor( carouselElement ) {
      // console.log('###########  inside Carousel constructor');
    this.carouselElement = carouselElement;
      // console.log('carouselElement is ', this.carouselElement);

    this.carouselImages = carouselElement.querySelectorAll('img');
      // console.log('this carousel images  ', this.carouselImages);
      // console.log('length of this.carouseImages is ', this.carouselImages.length);

    this.currentIndex = 0;
    this.maxIndex = this.carouselImages.length - 1;
    this.currentImage = this.carouselImages[this.currentIndex];
    this.currentImage.style.display = 'flex';


    // need reference to left & right
    this.left_btn = this.carouselElement.querySelector('.left-button');
    this.right_btn = this.carouselElement.querySelector('.right-button');

    // build event listeners for left & right button divs
    this.left_btn.addEventListener('click', () => this.left() );
    this.right_btn.addEventListener('click', () => this.right() );


  }

  left() {
    navBTNs[this.currentIndex].classList.toggle('active');
    btnInfoStatus[this.currentIndex].classList.toggle('active');

    console.log('LLLLL  inside of left, currentIndex ORIGINALLY ', this.currentIndex);
    console.log('LLL  Number(this.currentIndex) is ', Number(this.currentIndex)) ;
    console.log('LLLLL  this.maxIndex is ', this.maxIndex);


    Number(this.currentIndex) === 0
      ? this.currentIndex = this.maxIndex
      : this.currentIndex = Number(this.currentIndex) - 1;

       console.log('LLLLL inside of left, currentIndex changed to ', this.currentIndex);
       console.log('LLLLL navBTNs is ', navBTNs);

    navBTNs[this.currentIndex].classList.toggle('active');
    btnInfoStatus[this.currentIndex].classList.toggle('active');

    this.showImage();

  }

  right() {
    //  OMG this works !!
    navBTNs[this.currentIndex].classList.toggle('active');
    btnInfoStatus[this.currentIndex].classList.toggle('active');

    // had to use Number here to get indices to do wrap around with corner case
    Number(this.currentIndex) === this.maxIndex
      ? this.currentIndex = 0
      : this.currentIndex = Number(this.currentIndex) + 1;

       console.log('inside of right, currentIndex changed to ', this.currentIndex);
       console.log('navBTNs is ', navBTNs);

      //   OMG this works !!
     navBTNs[this.currentIndex].classList.toggle('active');
     btnInfoStatus[this.currentIndex].classList.toggle('active');

    this.showImage();
  }

  showImage() {
    this.currentImage.style.display = 'none';
    this.currentImage = this.carouselImages[this.currentIndex];
    this.currentImage.style.display = 'flex';

  }

}

let carouselDOM = document.querySelector('.carousel');
//console.log('~~~~~~~~~~~  carousel gives back ', carouselDOM);

let carousel = new Carousel(carouselDOM);


class NavButton {
  constructor(navBTN_attrib) {
    this.navBTN = navBTN_attrib;  // entire nav_divBTN div for each img
      console.log('++++++  navTBN created with attr of ', this.navBTN);

    // dataset attribute for navBTN  - DOMStringMap
    this.navBTN_data_img = this.navBTN.dataset.img;
         console.log('divBTN img dataset value is', this.navBTN_data_img);

    //  match BTN-info div to navBTN dataset value
    this.navBTN_content = document
      .querySelector(`.BTN-info[data-img = "${this.navBTN_data_img}"]`);
      // console.log('@@@@@@  this.navBTN.content is ', this.navBTN_content);



    this.navBTN_content = new NavInfoContent(this.navBTN_content);

    this.navBTN.addEventListener('click', () => this.selectNavBTN());


  }



  selectNavBTN() {
    this.navBTN_content.toggleActiveNavBTN();
      //console.log('!!!!! this.navBTN is ', this.navBTN);

    // toggle active nav control
    const navBTN_status = document.querySelectorAll('.nav_divBTN');
    [...navBTN_status].forEach(item => item.classList.remove('active'));
    this.navBTN.classList.toggle('active');

    // set current index to currently selected data-img value
    carousel.currentIndex = this.navBTN_data_img;
    carousel.showImage();


    console.log('######carousel current index is ', carousel.currentIndex);


  }
}


class NavInfoContent {
  constructor(navData){
    this.navInfo = navData;
  }

  toggleActiveNavBTN() {
    const btnInfo = document.querySelectorAll('.BTN-info');
    [...btnInfo].forEach( item => item.classList.remove('active') );

    this.navInfo.classList.toggle('active');
  }
}



// reference to nav_tabBTN
const navBTNs = document.querySelectorAll('.nav_divBTN');
  // console.log('navBTN QSA is ', navBTNs);


navBTNStatus = Array.from(navBTNs);
console.log('****** navBTNStatus', navBTNStatus);


[...navBTNs].forEach(item => new NavButton(item) );

const btnInfoStatus = document.querySelectorAll('.BTN-info');
