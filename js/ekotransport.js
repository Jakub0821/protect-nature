document.addEventListener("DOMContentLoaded", function() {
    // Example: Show an alert when clicking on an image
    const images = document.querySelectorAll('.transport-item img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            alert('Kliknięto na zdjęcie!');
        });
    });
});
