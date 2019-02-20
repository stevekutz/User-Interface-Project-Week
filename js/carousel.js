class Carousel {
  constructor( carouselElement ) {
      console.log('###########  inside Carousel constructor');
    this.carouselElement = carouselElement;
      console.log('carouselElement is ', this.carouselElement);

    this.carouselImages = carouselElement.querySelectorAll('img');
      console.log('this carousel images  ', this.carouselImages);
      console.log('length of this.carouseImages is ', this.carouselImages.length);

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

    // debugging stuff
    this.radio_Status = document.querySelectorAll('.carousel_nav');
      console.log('>>>>>> radio_Status is ', this.radio_Status);

  }

  left() {
    this.currentIndex === 0
      ? this.currentIndex = this.maxIndex
      : this.currentIndex = this.currentIndex - 1;

      console.log('inside of left, currentIndex changed to ', this.currentIndex);

    this.showImage();

  }

  right() {
    this.currentIndex === this.maxIndex
      ? this.currentIndex = 0
      : this.currentIndex = this.currentIndex + 1;

      console.log('inside of right, currentIndex changed to ', this.currentIndex);

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