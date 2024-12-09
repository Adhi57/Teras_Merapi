/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}


function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Full Stack Web Developer", "UI/UX Designer", "Data Engineer", "?"],
  loop: true,
  typeSpeed: 10,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  distance: '50px',  // Distance of the reveal from the original position
  duration: 1000,    // Animation duration in ms
  delay: 200,        // Delay before the animation starts
  easing: 'ease-in-out', // Easing function for the animation
  opacity: 0,        // Initial opacity before animation starts
  reset: true,       // Whether to reset the animation when it goes out of view
  origin: 'bottom',  // Where the element should appear from (can be top, right, bottom, left)
});

// Applying ScrollReveal to each section
sr.reveal('main-text', { delay: 100 });
sr.reveal('feature-box-images', { delay: 200 });
sr.reveal('feature-text', { delay: 200 });
sr.reveal('did-you-know-box', { delay: 300 });
sr.reveal('did-you-know-title', { delay: 400 });
sr.reveal('did-you-know-desc', { delay: 500 });

sr.reveal('.gallery-container', { delay: 300 });
sr.reveal('gallery-button', { delay: 500 });
sr.reveal('feature-maps', { delay: 200 });
sr.reveal('maps', { delay: 300 });
sr.reveal('title-header', { delay: 400 });
sr.reveal('contacts-text', { delay: 500 });

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

// Left Reveal for 'About Us' and 'Contact Us'
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// Right Reveal for Skills and Form Box
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*="' + sectionId + '"]')
        .classList.add("active-link");
    } else {
      document
        .querySelector('.nav-menu a[href*="' + sectionId + '"]')
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
