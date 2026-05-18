document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize the Hamburger Menu functionality
    initializeHamburgerMenu();

    // 2. Initialize the Navbar Sizing (CSS variable setting)
    initializeNavbarSizing(); 
});

function initializeHamburgerMenu() {
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }
}

function initializeNavbarSizing() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const resizeObserver = new ResizeObserver(entries => {
            const navbarHeight = entries[0].contentRect.height;
            document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
        });
        resizeObserver.observe(navbar);
    }
}