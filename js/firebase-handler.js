/**
 * Gestion Firebase et EmailJS pour le formulaire de contact
 * NOTE: Ce fichier contient des clés API qui devraient être déplacées
 * vers des variables d'environnement via Netlify Functions
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ⚠️ TODO: Déplacer ces credentials vers Netlify Environment Variables
const firebaseConfig = {
    apiKey: "AIzaSyCXS5iv36-mu-qsKeU8R1lLkeutqI9qPgo",
    authDomain: "patpatouche-f728f.firebaseapp.com",
    projectId: "patpatouche-f728f",
    storageBucket: "patpatouche-f728f.firebasestorage.app",
    messagingSenderId: "81686257988",
    appId: "1:81686257988:web:de3da6193290a053cbf711"
};

const EMAILJS_PUBLIC_KEY = "7qFu3BHzgXhlsbSaZ";
const EMAILJS_SERVICE_ID = "service_8ysygbo";
const EMAILJS_TEMPLATE_ID = "template_imm34hv";

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialiser EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Gérer la soumission du formulaire de contact
 */
export function initContactForm() {
    const form = document.querySelector('form[name="contact-avospapattes"]');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // État de chargement
        submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;

        try {
            // Collecter les données
            const formData = {
                name: form.querySelector('#name').value,
                email: form.querySelector('#email').value,
                phone: form.querySelector('#phone').value || '',
                animal: form.querySelector('#animal').value,
                service: form.querySelector('#service').value,
                message: form.querySelector('#message').value || '',
                createdAt: serverTimestamp(),
                status: 'nouveau'
            };

            // 1. Envoyer à Firebase
            await addDoc(collection(db, "demandes"), formData);

            // 2. Envoyer notification email via EmailJS
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                name: formData.name,
                email: formData.email,
                phone: formData.phone || 'Non renseigné',
                animal: formData.animal,
                service: formData.service,
                message: formData.message || 'Aucun message'
            });

            // Message de succès
            form.innerHTML = `
                <div style="text-align: center; padding: 40px 20px;">
                    <div style="font-size: 4rem; margin-bottom: 20px;">🐾</div>
                    <h3 style="color: var(--primary); margin-bottom: 15px;">Merci ${formData.name} !</h3>
                    <p style="color: var(--text-gray);">Votre demande a bien été envoyée.<br>Je vous recontacterai sous 24h.</p>
                </div>
            `;

        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Gestion des erreurs améliorée
            let errorMessage = "Une erreur est survenue. ";

            if (error.code === 'unavailable') {
                errorMessage += 'Problème de connexion. Veuillez réessayer dans quelques instants.';
            } else if (error.code === 'permission-denied') {
                errorMessage += 'Erreur de permission. Contactez-nous par téléphone au 06 15 42 29 50.';
            } else {
                errorMessage += 'Veuillez réessayer ou nous appeler au 06 15 42 29 50.';
            }

            alert(errorMessage);
        }
    });
}
