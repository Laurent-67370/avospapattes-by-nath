/**
 * Point d'entrée principal de l'application
 * Initialise tous les modules
 */

import { initThemeToggle } from './theme.js';
import { initMobileMenu, initHeaderScroll } from './menu.js';
import { initContactForm } from './firebase-handler.js';
import { initMap } from './map.js';
import { initGallery } from './gallery.js';

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

    // Initialiser la galerie photos avec lightbox
    initGallery();

    // Initialiser la carte (après un petit délai pour assurer que Leaflet est chargé)
    setTimeout(() => {
        initMap();
    }, 100);
});
