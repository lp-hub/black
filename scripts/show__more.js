'use strict';

function myFunction() {
  let dots = document.getElementById('dots'); // span for ... only
  let moreText = document.getElementById('more'); // #more {display: none;}
  let btnText = document.getElementById('myBtn'); // Show more... button text
  // #dots works as anchor for positioning #more span with content
  if (dots.style.display === 'none') {
    dots.style.display = 'inline'; // switch on #dots {display: inline;} style
    btnText.innerHTML = 'Show more...';
    moreText.style.display = 'none'; // close #more - {display: none;}
    window.scrollTo(0, document.body.scrollTop);
  } else {
    dots.style.display = 'none'; // switch off #dots {display: inline;} style
    btnText.innerHTML = 'Show less...';
    moreText.style.display = 'inline'; // open #more span - {display: inline;}
    window.scrollTo(0, 780); // (x - horizontally, y - vertically)
  }
}

///////////////////////////////////////////////
// Set current year in footer__copy
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // e.preventDefault(); // disables ordinary HTML links !!!
    const href = link.getAttribute('href');
    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
