/**
 * Gestion du thème clair/sombre
 * Réutilisable sur plusieurs pages
 */

// Charger le thème sauvegardé
export function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
}

// Mettre à jour l'icône du bouton
export function updateToggleIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.setAttribute('aria-label', 'Activer le mode clair');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.setAttribute('aria-label', 'Activer le mode sombre');
    }
}

// Basculer le thème
export function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
}

// Initialiser le theme toggle
export function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    loadTheme();
}
