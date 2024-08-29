document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona Ochrona Wody załadowana');

    // Funkcja do pokazywania wyskakujących okienek z dodatkowymi informacjami
    function showPopup(image) {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        
        const content = document.createElement('div');
        content.classList.add('popup-content');
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        
        const text = document.createElement('p');
        text.textContent = image.nextElementSibling.textContent + ' Dodatkowe informacje na temat ochrony wody...';
        
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

    // Przypisanie funkcji showPopup do obrazków
    const images = document.querySelectorAll('.image-item img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            showPopup(this);
        });
    });

    // Funkcja do dynamicznego ładowania dodatkowych informacji
    function loadMoreInfo() {
        const moreInfo = [
            
        ];

        const gallery = document.querySelector('.gallery');
        moreInfo.forEach(info => {
            const item = document.createElement('div');
            item.classList.add('image-item');

            const img = document.createElement('img');
            img.src = info.imgSrc;
            img.alt = info.alt;

            const text = document.createElement('p');
            text.textContent = info.text;

            item.appendChild(img);
            item.appendChild(text);
            gallery.appendChild(item);

            img.addEventListener('click', function() {
                showPopup(this);
            });
        });
    }

    // Załaduj dodatkowe informacje po 5 sekundach
    setTimeout(loadMoreInfo, 5000);
});

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

const translations = {
    'pl': {
        'water_protection_title': 'Ochrona Wody',
        'home': 'Strona Główna',
        'recycling': 'Recykling',
        'energy_saving': 'Oszczędzanie Energii',
        'eco_transport': 'Eko-Transport',
        'green_shopping': 'Zielone Zakupy',
        'rights': '© 2024 Porady Ekologiczne. Wszelkie prawa zastrzeżone.',
        'water_saving_taps': 'Używanie perlatorów w kranach pomaga zmniejszyć zużycie wody.',
        'rainwater_collection': 'Zbieranie deszczówki do podlewania ogrodu.',
        'protect_water_resource': 'Woda jest cennym zasobem, który należy chronić.',
        'sewage_treatment': 'Nowoczesne technologie oczyszczania ścieków.',
        'modern_technologies': 'Nowoczesne technologie pomagają w oszczędzaniu wody.',
        'water_saving_tips': 'Proste sposoby na oszczędzanie wody w domu.'
    },
    'en': {
        'water_protection_title': 'Water Conservation',
        'home': 'Home',
        'recycling': 'Recycling',
        'energy_saving': 'Energy Saving',
        'eco_transport': 'Eco-Transport',
        'green_shopping': 'Green Shopping',
        'rights': '© 2024 Eco Tips. All rights reserved.',
        'water_saving_taps': 'Using aerators in taps helps reduce water usage.',
        'rainwater_collection': 'Collecting rainwater for garden irrigation.',
        'protect_water_resource': 'Water is a valuable resource that must be protected.',
        'sewage_treatment': 'Modern sewage treatment technologies.',
        'modern_technologies': 'Modern technologies help in water conservation.',
        'water_saving_tips': 'Simple ways to save water at home.'
    },
    'de': {
        'water_protection_title': 'Wasserschutz',
        'home': 'Startseite',
        'recycling': 'Recycling',
        'energy_saving': 'Energiesparen',
        'eco_transport': 'Öko-Transport',
        'green_shopping': 'Umweltfreundliches Einkaufen',
        'rights': '© 2024 Öko-Tipps. Alle Rechte vorbehalten.',
        'water_saving_taps': 'Die Verwendung von Belüftern in Wasserhähnen hilft, den Wasserverbrauch zu reduzieren.',
        'rainwater_collection': 'Regenwasser sammeln für die Gartenbewässerung.',
        'protect_water_resource': 'Wasser ist eine wertvolle Ressource, die geschützt werden muss.',
        'sewage_treatment': 'Moderne Abwasserreinigungstechnologien.',
        'modern_technologies': 'Moderne Technologien helfen beim Wasserschutz.',
        'water_saving_tips': 'Einfache Möglichkeiten, zu Hause Wasser zu sparen.'
    },
    'es': {
        'water_protection_title': 'Conservación del Agua',
        'home': 'Inicio',
        'recycling': 'Reciclaje',
        'energy_saving': 'Ahorro de Energía',
        'eco_transport': 'Eco-Transporte',
        'green_shopping': 'Compras Ecológicas',
        'rights': '© 2024 Consejos Ecológicos. Todos los derechos reservados.',
        'water_saving_taps': 'El uso de aireadores en los grifos ayuda a reducir el consumo de agua.',
        'rainwater_collection': 'Recolección de agua de lluvia para riego de jardines.',
        'protect_water_resource': 'El agua es un recurso valioso que debe ser protegido.',
        'sewage_treatment': 'Tecnologías modernas de tratamiento de aguas residuales.',
        'modern_technologies': 'Las tecnologías modernas ayudan en la conservación del agua.',
        'water_saving_tips': 'Formas sencillas de ahorrar agua en casa.'
    }
};

// Uruchomienie funkcji zmiany języka po załadowaniu strony
changeLanguage(getSavedLanguage()
);

function toggleMenu() {
    console.log("Hamburger clicked"); // Sprawdź, czy funkcja jest wywoływana
    var nav = document.getElementById("desktop-nav");
    console.log("Nav element found:", nav); // Sprawdź, czy element nawigacji jest znaleziony
    nav.classList.toggle("show");
}
