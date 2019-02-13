class Modal {
  constructor(menuAttr) {
    this.modal = menuAttr;
    console.log('inside Modal, we got ', this.modal);

    this.menu = document.querySelector('.menu-content');
    console.log('menu-content is', this.menu)

    this.openBtn = document.querySelector('.open');
    this.closeBtn = document.querySelector('.close');


    this.openBtn.addEventListener('click', () => this.toggleMenu());
    this.closeBtn.addEventListener('click', () => this.toggleMenu());

  }

  toggleMenu() {
      console.log('YOU don clicked here !!')



  }

}


const modals = document.querySelectorAll('.menu-content');
console.log('modals is ', modals);

[...modals].forEach(modalItem => new Modal(modalItem) );











