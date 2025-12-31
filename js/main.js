/* ================================
   MAIN.JS – PORTFOLIO STATIC
   ================================ */

/* ================================
   1. DARK / LIGHT MODE
   ================================ */
document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;

    // Load theme dari localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.innerText = "☀️";
    } else {
        toggleBtn.innerText = "🌙";
    }

    // Toggle saat tombol diklik
    toggleBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerText = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.innerText = "🌙";
        }

    });
});


/* ================================
   2. CURSOR STRAWBERRY (FAKE CURSOR)
   ================================ */
document.addEventListener("mousemove", function (e) {

    const cursor = document.getElementById("fake-cursor");
    if (!cursor) return;

    // Offset supaya ujung strawberry pas ke mouse
    const offsetX = 6;
    const offsetY = 6;

    cursor.style.left = (e.clientX - offsetX) + "px";
    cursor.style.top  = (e.clientY - offsetY) + "px";

});


/* ================================
   3. SMOOTH SCROLL NAVBAR
   ================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});


/* ================================
   4. NAVBAR AUTO ACTIVE (SCROLL)
   ================================ */
window.addEventListener("scroll", function () {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


/* ================================
   5. FADE-UP ANIMATION ON SCROLL
   ================================ */
const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(el => fadeObserver.observe(el));
