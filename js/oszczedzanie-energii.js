document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona Oszczędzanie Energii załadowana');

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
        text.textContent = image.nextElementSibling.textContent + ' Dodatkowe informacje na temat oszczędzania energii...';
        
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
        'energy_title': 'Oszczędzanie Energii',
        'home': 'Strona Główna',
        'recycling': 'Recykling',
        'water_conservation': 'Ochrona Wody',
        'eco_transport': 'Eko-Transport',
        'green_shopping': 'Zielone Zakupy',
        'rights': '© 2024 Porady Ekologiczne. Wszelkie prawa zastrzeżone.',
        'led_bulbs': 'Żarówki LED zużywają mniej energii niż tradycyjne żarówki.',
        'thermostat': 'Programowalny termostat pomaga w oszczędzaniu energii.',
        'solar_energy': 'Panele słoneczne jako odnawialne źródło energii.',
        'building_insulation': 'Dobra izolacja może znacząco zmniejszyć straty ciepła.',
        'energy_efficient_devices': 'Energooszczędne urządzenia pomagają zmniejszyć zużycie energii.',
        'home_insulation': 'Ocieplenie domu może znacznie obniżyć koszty ogrzewania.'
    },
    'en': {
        'energy_title': 'Energy Saving',
        'home': 'Home',
        'recycling': 'Recycling',
        'water_conservation': 'Water Conservation',
        'eco_transport': 'Eco-Transport',
        'green_shopping': 'Green Shopping',
        'rights': '© 2024 Eco Tips. All rights reserved.',
        'led_bulbs': 'LED bulbs use less energy than traditional bulbs.',
        'thermostat': 'A programmable thermostat helps save energy.',
        'solar_energy': 'Solar panels as a renewable energy source.',
        'building_insulation': 'Good insulation can significantly reduce heat loss.',
        'energy_efficient_devices': 'Energy-efficient devices help reduce energy consumption.',
        'home_insulation': 'Insulating your home can greatly reduce heating costs.'
    },
    'de': {
        'energy_title': 'Energiesparen',
        'home': 'Startseite',
        'recycling': 'Recycling',
        'water_conservation': 'Wasserschutz',
        'eco_transport': 'Öko-Transport',
        'green_shopping': 'Umweltfreundliches Einkaufen',
        'rights': '© 2024 Öko-Tipps. Alle Rechte vorbehalten.',
        'led_bulbs': 'LED-Lampen verbrauchen weniger Energie als herkömmliche Lampen.',
        'thermostat': 'Ein programmierbarer Thermostat hilft beim Energiesparen.',
        'solar_energy': 'Solarzellen als erneuerbare Energiequelle.',
        'building_insulation': 'Gute Isolierung kann den Wärmeverlust erheblich reduzieren.',
        'energy_efficient_devices': 'Energieeffiziente Geräte helfen, den Energieverbrauch zu senken.',
        'home_insulation': 'Die Isolierung Ihres Hauses kann die Heizkosten erheblich senken.'
    },
    'es': {
        'energy_title': 'Ahorro de Energía',
        'home': 'Inicio',
        'recycling': 'Reciclaje',
        'water_conservation': 'Conservación del Agua',
        'eco_transport': 'Eco-Transporte',
        'green_shopping': 'Compras Ecológicas',
        'rights': '© 2024 Consejos Ecológicos. Todos los derechos reservados.',
        'led_bulbs': 'Las bombillas LED consumen menos energía que las bombillas tradicionales.',
        'thermostat': 'Un termostato programable ayuda a ahorrar energía.',
        'solar_energy': 'Paneles solares como fuente de energía renovable.',
        'building_insulation': 'Una buena aislamiento puede reducir significativamente la pérdida de calor.',
        'energy_efficient_devices': 'Los dispositivos energéticamente eficientes ayudan a reducir el consumo de energía.',
        'home_insulation': 'Aislar su hogar puede reducir significativamente los costos de calefacción.'
    }
};
// Uruchomienie funkcji zmiany języka po załadowaniu strony
changeLanguage(getSavedLanguage()
);