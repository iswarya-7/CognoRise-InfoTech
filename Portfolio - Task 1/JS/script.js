// Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

// Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Scroll to Top Button
const scrollToTop = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
    scrollToTop.classList.toggle("active", window.scrollY > 500);
})

scrollToTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Navigation menu items (header items color change on scroll down)active on page scroll
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});












// Scroll reveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

// Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', {delay: 400, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info a ', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 500, origin: 'left' ,interval:200 });
ScrollReveal().reveal('.home .img, .about-img', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.about .about-info', {delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.skills-description, .service-description, .contact-left h2', {delay: 700, origin: 'left'});
ScrollReveal().reveal('.projects .description-project p ', {delay: 600, origin: 'left'});
ScrollReveal().reveal('.projects .project-info .card-list', {delay: 600, origin: 'bottom' });

ScrollReveal().reveal('.education', {delay: 800, origin: 'bottom', interval:200});
ScrollReveal().reveal('footer .footer-container ,.copyrights', {delay: 500, origin: 'top', interval:200});



