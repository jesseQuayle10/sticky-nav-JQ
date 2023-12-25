'use strict';

/////////////
// 1. Grab Els
// 2. C/Back FN - Adds/Rem .sticky
//.. (= .main-nav.sticky)
// 3. Setup IntersectionObserver -
// a. Pass it the C/Back FN
// b. Setup its Props VALs
// 4. Call IntersectionObserver w/ its .observe(header) MTHD

//// Els
// Intersecting El (to be Observed)
const header = document.querySelector('header');

// El - to add .sticky to - when "header" is Intersecting "root" El
const mainNav = document.querySelector('.main-nav');

// for rootMargin
const mainNavHeight = mainNav.getBoundingClientRect().height;

// C/Back FN - Called when Oberved El Intersects "root" El
// Add/Rem. ".sticky" to mainNav when Header is/isnt Intersecting V/Port
const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) mainNav.classList.add('sticky');
  else mainNav.classList.remove('sticky');
};

// Observe when "header" is Intersecting V/Port
// Pass C/Back FN - to be Exec & Observer Props
const headerObserver = new IntersectionObserver(stickyNav, {
  // null = V/Port
  root: null,

  // when 0% of header is Intersecting V/Port
  threshold: 0,

  // Make Nav = Sticky 90px BEFORE Threshold
  rootMargin: `-${mainNavHeight}px`,
});

// Call I/Observer - tell it to Observe "header"
headerObserver.observe(header);
