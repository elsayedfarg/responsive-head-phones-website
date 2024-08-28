/*=============== HANDLE MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*=============== MENU SHOW ===============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

/*=============== MENU HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll(".nav__link");

function clickedLinkAction() {
  // When you click any link, the menu will disappear automatically.
  navMenu.classList.remove("show__menu");
}

navLink.forEach((link) => link.addEventListener("click", clickedLinkAction));

/*=============== CHANGE HEADER BACKGROUND ===============*/
function blurHeader() {
  const header = document.getElementById("header");

  // The function checks the current vertical scroll position using (this.scrollY). The scrollY property returns the number of pixels
  // that the document is currently scrolled vertically. It compares (this.scrollY) to 50, meaning that if the page is scrolled down 50 pixels or more
  // ,it will execute the first part of the conditional.
  this.scrollY >= 50
    ? header.classList.add("blur__header")
    : header.classList.remove("blur__header");
}

// the (this) keyword is used within the blurHeader function.
// Here, this refers to the window object, because the blurHeader function is called as an event handler for the scroll event on the window.
window.addEventListener("scroll", blurHeader);

/*=============== FAVORITES SWIPER ===============*/
let swiperFavorite = new Swiper(".favorite__swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
function scollUp() {
  const scrollUpBtn = document.getElementById("scroll-up");

  // this.scrollY >= 350: This condition checks if the page has been scrolled down by at least 350 pixels.
  this.scrollY >= 350
    ? scrollUpBtn.classList.add("show-scroll")
    : scrollUpBtn.classList.remove("show-scroll");
}

window.addEventListener("scroll", scollUp);

/*=============== SCROLL SECTION ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]"); // Corrected bracket here

function scrollActive() {
  // scrollDown: Captures the number of pixels the document has already been scrolled vertically from the top.
  const scrollDown = window.scrollY;
  sections.forEach((currentSection) => {
    const sectionHeight = currentSection.offsetHeight;
    // sectionTop: Calculates the top position of the current section relative to the top of the document, adjusting by 58 pixels (possibly for accounting for a fixed header).
    const sectionTop = currentSection.offsetTop - 58;
    const sectionId = currentSection.getAttribute("id");
    const sectionsLinks = document.querySelectorAll(
      // If you use href*="section2", it will match any of the following:
      // href="#section2"
      // href="#top-section2"
      // href="#section2-details"
      `.nav__menu a[href*="${sectionId}"]`
    );

    sectionsLinks.forEach((link) => {
      // Loop through each link
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    });
  });
}

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

// this code is using the ScrollReveal library, which is a JavaScript library for easily animating elements
// as they come into view when the user scrolls down the page

// The const sr = ScrollReveal({ ... }) part of the code is creating an instance of the ScrollReveal library
// and configuring it with a set of default options. This instance (sr) can then be used to apply scroll animations to various elements on the page
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
  // reset: "true",repeat the animation
});

// This line tells ScrollReveal to animate the elements with the specified class names using the default settings.
sr.reveal(`.home__social,.favorite__container,.sponsor__container,.footer`);

// These lines apply custom settings to specific elements:
sr.reveal(".home__title span:nth-child(1)", { origin: "left", opacity: 1 });
sr.reveal(".home__title span:nth-child(3)", { origin: "right", opacity: 1 });
sr.reveal(".home__toolip,.home__button,.model__button", { origin: "bottom" });
sr.reveal(".about__data", { origin: "left" });
sr.reveal(".about__img,.model__tooltip", { origin: "right" });
