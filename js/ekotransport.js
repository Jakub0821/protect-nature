document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona Eko-Transport załadowana');

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
        text.textContent = image.nextElementSibling.textContent + ' Dodatkowe informacje na temat eko-transportu...';
        
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
            'title_tips': 'Eko-Transport',
            'home': 'Strona Główna',
            'recycling': 'Recykling',
            'energy_saving': 'Oszczędzanie Energii',
            'water_conservation': 'Ochrona Wody',
            'green_shopping': 'Zielone Zakupy',
            'rights': '© 2024 Porady Ekologiczne. Wszelkie prawa zastrzeżone.',
            'transport_1': 'Jazda na rowerze to ekologiczny sposób poruszania się po mieście.',
            'transport_2': 'Samochody elektryczne to przyszłość ekologicznego transportu.',
            'transport_3': 'Transport publiczny z niską emisją CO2.',
            'transport_4': 'Wspólne przejazdy samochodem zmniejszają ilość emisji.',
            'transport_5': 'Samochody hybrydowe łączą zalety silników spalinowych i elektrycznych.',
            'transport_6': 'Rozwijanie sieci transportu publicznego zmniejsza zanieczyszczenie powietrza.'
        },
        'en': {
            'title_tips': 'Eco-Transport',
            'home': 'Home',
            'recycling': 'Recycling',
            'energy_saving': 'Energy Saving',
            'water_conservation': 'Water Conservation',
            'green_shopping': 'Green Shopping',
            'rights': '© 2024 Eco Tips. All rights reserved.',
            'transport_1': 'Cycling is an eco-friendly way to get around the city.',
            'transport_2': 'Electric cars are the future of eco-friendly transport.',
            'transport_3': 'Low-emission public transport.',
            'transport_4': 'Carpooling reduces emissions.',
            'transport_5': 'Hybrid cars combine the advantages of combustion and electric engines.',
            'transport_6': 'Expanding public transport networks reduces air pollution.'
        },
        'de': {
            'title_tips': 'Öko-Transport',
            'home': 'Startseite',
            'recycling': 'Recycling',
            'energy_saving': 'Energiesparen',
            'water_conservation': 'Wasserschutz',
            'green_shopping': 'Umweltfreundliches Einkaufen',
            'rights': '© 2024 Öko-Tipps. Alle Rechte vorbehalten.',
            'transport_1': 'Radfahren ist eine umweltfreundliche Art, sich in der Stadt fortzubewegen.',
            'transport_2': 'Elektroautos sind die Zukunft des umweltfreundlichen Transports.',
            'transport_3': 'Emissionsarmer öffentlicher Nahverkehr.',
            'transport_4': 'Fahrgemeinschaften reduzieren Emissionen.',
            'transport_5': 'Hybridautos vereinen die Vorteile von Verbrennungs- und Elektromotoren.',
            'transport_6': 'Der Ausbau des öffentlichen Nahverkehrs reduziert die Luftverschmutzung.'
        },
        'es': {
            'title_tips': 'Eco-Transporte',
            'home': 'Inicio',
            'recycling': 'Reciclaje',
            'energy_saving': 'Ahorro de Energía',
            'water_conservation': 'Conservación del Agua',
            'green_shopping': 'Compras Ecológicas',
            'rights': '© 2024 Consejos Ecológicos. Todos los derechos reservados.',
            'transport_1': 'Andar en bicicleta es una forma ecológica de moverse por la ciudad.',
            'transport_2': 'Los coches eléctricos son el futuro del transporte ecológico.',
            'transport_3': 'Transporte público de bajas emisiones.',
            'transport_4': 'Compartir coche reduce las emisiones.',
            'transport_5': 'Los coches híbridos combinan las ventajas de los motores de combustión y eléctricos.',
            'transport_6': 'La expansión de las redes de transporte público reduce la contaminación del aire.'
        }
    };
    

        // Uruchomienie funkcji zmiany języka po załadowaniu strony
    changeLanguage(getSavedLanguage());
});
