function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active'); // Tambah/hapus class 'active'
    hamburger.classList.toggle('active');
}

 // Tutup menu otomatis saat link diklik
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    });
});

// Fungsi untuk toggle dark mode
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
    const navLinks = document.querySelectorAll(".nav-menu a"); // PERBAIKAN DI SINI

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
