/**
 * Point d'entrée principal de l'application
 * Initialise tous les modules
 */

import { initThemeToggle } from './theme.js';
import { initMobileMenu, initHeaderScroll } from './menu.js';
import { initContactForm } from './firebase-handler.js';

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser le thème
    initThemeToggle();

    // Initialiser le menu mobile
    initMobileMenu();

    // Initialiser l'effet de scroll sur le header
    initHeaderScroll();

    // Initialiser le formulaire de contact
    initContactForm();
});
