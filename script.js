// Menu burger
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => { navLinks.classList.toggle("active"); });

// Scroll Reveal
const revealElements = document.querySelectorAll(".section,.service-card,.skill-card,.project-card,.contact-item");
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) el.classList.add("active-reveal");
    });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Skill bars animation
const skillBars = document.querySelectorAll(".skill-progress");
const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) bar.style.width = bar.dataset.width;
    });
};
window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// Optional: animate each link
const navItems = document.querySelectorAll(".nav-links li");
navBtnAnimation = () => {
    navItems.forEach((item, index) => {
        if(item.style.animation){
            item.style.animation = '';
        } else {
            item.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
        }
    });
};
menuBtn.addEventListener("click", navBtnAnimation);

// Keyframes for nav links
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes navLinkFade {
    from {opacity: 0; transform: translateX(-50px);}
    to {opacity: 1; transform: translateX(0);}
}`, styleSheet.cssRules.length);
