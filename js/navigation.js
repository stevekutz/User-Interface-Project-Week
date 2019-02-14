class Modal {
  constructor(menuAttr) {
    this.modal = menuAttr; // just in case


    this.menu = document.querySelector('.menu-content');


    this.openBtn = document.querySelector('.burger');

    this.closeBtn = document.querySelector('.Xchar');


    this.openBtn.addEventListener('click', () => this.toggleMenu() );
    this.closeBtn.addEventListener('click', () => this.toggleMenu());

  }

  toggleMenu() {
    this.openBtn.classList.toggle('closed');
    this.closeBtn.classList.toggle('closed');
    this.menu.classList.toggle('hidden');
  }

}

const modals = document.querySelectorAll('.menu-content');
console.log('modals is ', modals);

[...modals].forEach(modalItem => new Modal(modalItem) );











