/* ================================
   HAMBURGER MENU TOGGLE
   ================================ */
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Tutup menu otomatis saat link diklik
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    });
});

/* ================================
   DARK MODE TOGGLE
   ================================ */
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeToggle = document.querySelector('.theme-toggle');
    // Ubah icon sesuai mode
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
            
    // Simpan preferensi user di browser
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Load tema yang tersimpan saat halaman dibuka
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-toggle').textContent = '☀️';
    }
});

/* ================================
   SMOOTH SCROLL NAVBAR
   ================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ================================
   NAVBAR AUTO ACTIVE (SCROLL)
   ================================ */
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

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
   SCROLL REVEAL ANIMATION
   ================================ */
// Intersection Observer untuk deteksi element masuk viewport
const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.15 // Trigger ketika 15% element terlihat
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tambahkan class 'active' untuk trigger animasi
            entry.target.classList.add('active');
            
            // Optional: Uncomment baris di bawah jika ingin animasi hanya sekali
            // observer.unobserve(entry.target);
        } else {
            // Optional: Uncomment untuk animasi berulang setiap scroll
            // entry.target.classList.remove('active');
        }
    });
};

// Buat observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe semua element dengan class scroll-reveal
const revealElements = document.querySelectorAll(
    '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
);

revealElements.forEach(element => {
    observer.observe(element);
});

/* ================================
   FIX MOBILE VIEWPORT HEIGHT
   ================================ */
window.addEventListener('load', function() {
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
});

/* ================================
   PREVENT DEFAULT ZOOM
   ================================ */
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

/* ================================
   CONSOLE INFO (Optional)
   ================================ */
console.log('%c🎨 Portfolio Keisha Nazwa Effendi', 'color: #EC7FA9; font-size: 20px; font-weight: bold;');
console.log('%c✨ Scroll Reveal Animation Aktif!', 'color: #FDCEDF; font-size: 14px;');
console.log('%cJumlah elemen dengan animasi:', 'color: #666;', revealElements.length);



/* ================================
     FADE-UP ANIMATION ON SCROLL
   ================================ */
/*const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(el => fadeObserver.observe(el));*/

/* ================================
    CURSOR STRAWBERRY (FAKE CURSOR)
   ================================ */
/*document.addEventListener("mousemove", function (e) {

    const cursor = document.getElementById("fake-cursor");
    if (!cursor) return;

    // Offset supaya ujung strawberry pas ke mouse
    const offsetX = 6;
    const offsetY = 6;

    cursor.style.left = (e.clientX - offsetX) + "px";
    cursor.style.top  = (e.clientY - offsetY) + "px";

});*/
