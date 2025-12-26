/**
 * Gestion du menu mobile (burger menu)
 */

export function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links a');

    if (!menuBtn || !navLinks) return;

    // Toggle du menu burger
    menuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');

        // Mettre à jour aria-expanded pour l'accessibilité
        menuBtn.setAttribute('aria-expanded', isOpen);
        menuBtn.setAttribute('aria-label', isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation');

        // Change l'icône du burger
        const icon = menuBtn.querySelector('i');
        if (isOpen) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Fermer le menu mobile lors du clic sur un lien
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');

            // Mettre à jour aria-expanded
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.setAttribute('aria-label', 'Ouvrir le menu de navigation');

            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}

/**
 * Effet de scroll sur le header
 */
export function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
        }
    });
}
