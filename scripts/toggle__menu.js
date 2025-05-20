'use strict';

const nav = document.querySelector('.toggle__menu-btns'); // hidden menu
const navMenu = document.querySelector('.toggle__menu'); // span switch on/off
const links = nav.querySelectorAll('toggle__menu-link'); // menu button
// listen click on menu
navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('toggle'); // span animation
  nav.classList.toggle('nav__open'); // transform: translateX(-100%);
});
// listen click on button
links.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.toggle('toggle'); // span animation
    nav.classList.toggle('nav__open'); // transform: translateX(-100%);
  });
});

///////////////////////////////////////////////
// Click whole button area
function logoBtn() {
  const footer = document.querySelector('.footer');
  const header = document.querySelector('.header');

  footer.querySelector('.logo').addEventListener(
    'click',
    function () {
      document.getElementById('logoBtn').click();
      // navMenu.classList.toggle('toggle'); // span animation
      // nav.classList.toggle('nav__open'); // transform: translateX(-100%);
    },
    false
  );
}
console.log(logoBtn());

///////////////////////////////////////////////
// Contact button on toggle menu
function contactToggleMenu() {
  let contact = document.getElementById('contact'); // span anchor
  let showContact = document.getElementById('more__contact'); // #more {display: none;}
  let contactBtnText = document.getElementById('contactBtn');

  if (
    contact.style.display === 'none' ||
    contactBtnText.innerHTML === 'Contact Us!'
  ) {
    contact.style.display = 'inline'; // switch on #contact {display: inline;} style
    contactBtnText.innerHTML = '<b>Contact Us!</b>';
    showContact.style.display = 'none'; // close #more - {display: none;}
    window.scrollTo(0, 0); // scroll to the top
  } else {
    contact.style.display = 'none'; // switch off #contact {display: inline;} style
    contactBtnText.innerHTML = 'Contact Us!';
    showContact.style.display = 'inline'; // open #more span - {display: inline;}
    window.scrollTo(0, document.body.scrollHeight); // scroll to bottom
  }
}
