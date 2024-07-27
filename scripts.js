// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([-8.047562, -34.877], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});
