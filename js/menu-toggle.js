document.addEventListener('DOMContentLoaded', function() {
    var tipsElement = document.querySelector('a[data-key="tips"]');
    if (tipsElement) {
        tipsElement.addEventListener('click', function(e) {
            e.preventDefault();
            var dropdownContent = tipsElement.nextElementSibling;
            if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
                dropdownContent.classList.toggle('hidden');
            }
        });
    }
});

function toggleMenu() {
    console.log("Hamburger clicked"); // Sprawdź, czy funkcja jest wywoływana
    var nav = document.getElementById("desktop-nav");
    console.log("Nav element found:", nav); // Sprawdź, czy element nawigacji jest znaleziony
    nav.classList.toggle("show");
}
