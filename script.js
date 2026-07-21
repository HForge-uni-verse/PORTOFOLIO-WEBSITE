// Reveal sections on scroll
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2,
});

hiddenElements.forEach((el) => observer.observe(el));


// Active navbar link
const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`header nav a[href="#${id}"]`);

        if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));
            if (navLink) navLink.classList.add("active");
        }
    });
}, {
    threshold: 0.5,
});

sections.forEach((section) => sectionObserver.observe(section));


// Contact form
const contactForm = document.querySelector(".contact form");
const feedbackMessage = document.querySelector(".feedback-message");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        if (!name || !email || !message) {
            feedbackMessage.textContent = "Please complete all fields.";
            feedbackMessage.classList.add("visible");
            return;
        }

        contactForm.reset();

        feedbackMessage.textContent =
            `Thanks, ${name}! Your message has been received.`;

        feedbackMessage.classList.add("visible");

        setTimeout(() => {
            feedbackMessage.classList.remove("visible");
        }, 5000);
    });
}


// Mouse glow
const glow = document.querySelector(".cursor-glow");

if (glow) {
    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}