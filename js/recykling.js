document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona Recykling załadowana');

    function showPopup(image) {
        console.log('Pokazano popup dla obrazka:', image.src);
        const popup = document.createElement('div');
        popup.classList.add('popup');
        
        const content = document.createElement('div');
        content.classList.add('popup-content');
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        
        const text = document.createElement('p');
        text.textContent = image.nextElementSibling.textContent + ' Dodatkowe informacje na temat recyklingu tego materiału...';
        
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Zamknij';
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(popup);
        });

        content.appendChild(img);
        content.appendChild(text);
        content.appendChild(closeBtn);
        popup.appendChild(content);
        document.body.appendChild(popup);
    }

    const images = document.querySelectorAll('.image-item img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            console.log('Kliknięto obrazek:', this.src);
            showPopup(this);
        });
    });

    // Initialize language
    const savedLanguage = localStorage.getItem('language') || 'pl';
    changeLanguage(savedLanguage);

    // Language selection event
    document.querySelectorAll('.language-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const language = icon.getAttribute('data-lang');
            changeLanguage(language);
            localStorage.setItem('language', language);
        });
    });
});

function changeLanguage(language) {
    fetch(`translations/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[key]) {
                    element.textContent = translations[key];
                }
            });
        });
}
// Nowe funkcje do obsługi zmiany języka
function getSavedLanguage() {
    // Pobieranie zapisanej wersji językowej (domyślnie 'pl')
    return localStorage.getItem('preferredLanguage') || 'pl';
}

function changeLanguage(language) {
    // Logika zmiany języka na stronie
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[language][key];
    });
}


// Uruchomienie funkcji zmiany języka po załadowaniu strony
changeLanguage(getSavedLanguage()
);

function toggleMenu() {
    console.log("Hamburger clicked"); // Sprawdź, czy funkcja jest wywoływana
    var nav = document.getElementById("desktop-nav");
    console.log("Nav element found:", nav); // Sprawdź, czy element nawigacji jest znaleziony
    nav.classList.toggle("show");
}
