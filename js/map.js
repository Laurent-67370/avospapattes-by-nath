/**
 * Initialisation de la carte interactive Leaflet
 * Affiche la zone de service de 5 km autour d'Oberhausbergen
 */

export function initMap() {
    const mapElement = document.getElementById('service-map');
    if (!mapElement) return;

    // Coordonnées d'Oberhausbergen (7 rue Pierre de Coubertin)
    const centerLat = 48.6088;
    const centerLng = 7.6981;

    // Créer la carte centrée sur Oberhausbergen
    const map = L.map('service-map').setView([centerLat, centerLng], 12);

    // Ajouter la couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Ajouter un marqueur au centre (adresse de Nath)
    const marker = L.marker([centerLat, centerLng]).addTo(map);
    marker.bindPopup(`
        <div style="text-align: center;">
            <strong>🐾 À vos papattes by Nath</strong><br>
            <span style="font-size: 0.9em;">7 rue Pierre de Coubertin<br>Oberhausbergen (67205)</span>
        </div>
    `);

    // Ajouter un cercle de 5 km de rayon
    const circle = L.circle([centerLat, centerLng], {
        color: '#2A9D8F',
        fillColor: '#2A9D8F',
        fillOpacity: 0.15,
        radius: 5000 // 5 km en mètres
    }).addTo(map);

    circle.bindPopup(`
        <div style="text-align: center;">
            <strong>Zone de service</strong><br>
            <span style="font-size: 0.9em;">Rayon de 5 km</span>
        </div>
    `);

    // Ouvrir automatiquement le popup du marqueur après un délai
    setTimeout(() => {
        marker.openPopup();
    }, 500);
}
