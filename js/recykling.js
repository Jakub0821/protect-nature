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

const translations = {
    'pl': {
        'recycling_title': 'Recykling i Redukcja Odpadów',
        'home': 'Strona Główna',
        'energy_saving': 'Oszczędzanie Energii',
        'water_conservation': 'Ochrona Wody',
        'eco_transport': 'Eko-Transport',
        'green_shopping': 'Zielone Zakupy',
        'rights': '© 2024 Ochrona Środowiska. Wszelkie prawa zastrzeżone.',
        'recycling_glass': 'Oddzielanie szkła to kluczowy element skutecznego recyklingu.',
        'home_recycling': 'Prosty system segregacji odpadów, który można wdrożyć w każdym domu.',
        'materials_for_recycling': 'Różne rodzaje materiałów gotowych do recyklingu.',
        'recycling_facility': 'Zakład recyklingu przetwarzający odpady na surowce wtórne.',
        'recycling_paper': 'Recykling papieru pomaga zmniejszyć wycinkę lasów.',
        'recycling_plastic': 'Recykling plastiku zmniejsza zanieczyszczenie oceanów.'
    },
    'en': {
        'recycling_title': 'Recycling and Waste Reduction',
        'home': 'Home',
        'energy_saving': 'Energy Saving',
        'water_conservation': 'Water Conservation',
        'eco_transport': 'Eco-Transport',
        'green_shopping': 'Green Shopping',
        'rights': '© 2024 Environmental Protection. All rights reserved.',
        'recycling_glass': 'Separating glass is a key component of effective recycling.',
        'home_recycling': 'A simple waste sorting system that can be implemented in every home.',
        'materials_for_recycling': 'Various types of materials ready for recycling.',
        'recycling_facility': 'Recycling facility processing waste into secondary raw materials.',
        'recycling_paper': 'Paper recycling helps reduce deforestation.',
        'recycling_plastic': 'Plastic recycling reduces ocean pollution.'
    },
    'de': {
        'recycling_title': 'Recycling und Abfallreduzierung',
        'home': 'Startseite',
        'energy_saving': 'Energiesparen',
        'water_conservation': 'Wasserschutz',
        'eco_transport': 'Öko-Transport',
        'green_shopping': 'Umweltfreundliches Einkaufen',
        'rights': '© 2024 Umweltschutz. Alle Rechte vorbehalten.',
        'recycling_glass': 'Die Trennung von Glas ist ein wichtiger Bestandteil eines effektiven Recyclings.',
        'home_recycling': 'Ein einfaches Abfallsortierungssystem, das in jedem Haushalt implementiert werden kann.',
        'materials_for_recycling': 'Verschiedene Arten von Materialien, die für das Recycling bereit sind.',
        'recycling_facility': 'Recyclinganlage, die Abfälle in Sekundärrohstoffe umwandelt.',
        'recycling_paper': 'Papierrecycling hilft, die Abholzung zu verringern.',
        'recycling_plastic': 'Das Recycling von Plastik verringert die Verschmutzung der Ozeane.'
    },
    'es': {
        'recycling_title': 'Reciclaje y Reducción de Residuos',
        'home': 'Inicio',
        'energy_saving': 'Ahorro de Energía',
        'water_conservation': 'Conservación del Agua',
        'eco_transport': 'Eco-Transporte',
        'green_shopping': 'Compras Ecológicas',
        'rights': '© 2024 Protección Ambiental. Todos los derechos reservados.',
        'recycling_glass': 'La separación del vidrio es un componente clave del reciclaje efectivo.',
        'home_recycling': 'Un sistema simple de clasificación de residuos que se puede implementar en cada hogar.',
        'materials_for_recycling': 'Varios tipos de materiales listos para el reciclaje.',
        'recycling_facility': 'Instalación de reciclaje que convierte residuos en materias primas secundarias.',
        'recycling_paper': 'El reciclaje de papel ayuda a reducir la deforestación.',
        'recycling_plastic': 'El reciclaje de plástico reduce la contaminación del océano.'
    }
};
// Uruchomienie funkcji zmiany języka po załadowaniu strony
changeLanguage(getSavedLanguage()
);