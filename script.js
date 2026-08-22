// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================================
// TYPING ANIMATION
// =========================================

// =========================================
// TYPING ANIMATION
// =========================================

const typingText = document.getElementById("typing-text");

const words = [
    "Varun Reddy",
    "Python Developer",
    "Full Stack Developer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 60 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================================
// SCROLL REVEAL
// =========================================

const sections = document.querySelectorAll(".section");

const revealSections = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealSections);

revealSections();


// =========================================
// ACTIVE NAVIGATION
// =========================================

const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    allSections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Thank you for contacting me! I will get back to you soon.");

    contactForm.reset();

});