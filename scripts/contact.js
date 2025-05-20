'use strict';

function contactFunction() {
  let contact = document.getElementById('contact'); // span anchor
  let showContact = document.getElementById('more__contact'); // #more {display: none;}
  let contactBtnText = document.getElementById('contactBtn'); // button id

  if (
    contact.style.display === 'none' ||
    contactBtnText.innerHTML === 'Contact Us!'
  ) {
    contact.style.display = 'inline'; // switch on #contact {display: inline;} style
    contactBtnText.innerHTML = '<b>Contact Us!</b>';
    showContact.style.display = 'none'; // close #more - {display: none;}
    window.scrollTo(0, 0); // scroll to the top of the webpage
  } else {
    contact.style.display = 'none'; // switch off #contact {display: inline;} style
    contactBtnText.innerHTML = 'Contact Us!';
    showContact.style.display = 'inline'; // open #more span - {display: inline;}
    window.scrollTo(0, document.body.scrollHeight); // scroll to bottom
  }
}
