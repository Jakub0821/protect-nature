document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona Zielone Zakupy załadowana');

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
        text.textContent = image.nextElementSibling.textContent + ' Dodatkowe informacje na temat zielonych zakupów...';
        
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
        'title_tips': 'Zielone Zakupy',
        'home': 'Strona Główna',
        'recycling': 'Recykling',
        'energy_saving': 'Oszczędzanie Energii',
        'water_conservation': 'Ochrona Wody',
        'eco_transport': 'Eko-Transport',
        'rights': '© 2024 Porady Ekologiczne. Wszelkie prawa zastrzeżone.',
        'product_1': 'Wybieraj produkty z certyfikatem ekologicznym.',
        'product_2': 'Torby wielokrotnego użytku pomagają zmniejszyć ilość odpadów plastikowych.',
        'product_3': 'Naucz się rozpoznawać certyfikaty ekologiczne na produktach.',
        'product_4': 'Wspieraj lokalnych producentów kupując na targach.',
        'product_5': 'Ekologiczne rolnictwo wspiera zrównoważony rozwój.',
        'product_6': 'Zakupy na lokalnym rynku wspierają lokalnych producentów.'
    },
    'en': {
        'title_tips': 'Green Shopping',
        'home': 'Home',
        'recycling': 'Recycling',
        'energy_saving': 'Energy Saving',
        'water_conservation': 'Water Conservation',
        'eco_transport': 'Eco-Transport',
        'rights': '© 2024 Eco Tips. All rights reserved.',
        'product_1': 'Choose products with an organic certification.',
        'product_2': 'Reusable bags help reduce plastic waste.',
        'product_3': 'Learn to recognize eco-labels on products.',
        'product_4': 'Support local producers by shopping at markets.',
        'product_5': 'Organic farming supports sustainable development.',
        'product_6': 'Shopping at local markets supports local producers.'
    },
    'de': {
        'title_tips': 'Grünes Einkaufen',
        'home': 'Startseite',
        'recycling': 'Recycling',
        'energy_saving': 'Energiesparen',
        'water_conservation': 'Wasserschutz',
        'eco_transport': 'Öko-Transport',
        'rights': '© 2024 Öko-Tipps. Alle Rechte vorbehalten.',
        'product_1': 'Wählen Sie Produkte mit einem Bio-Zertifikat.',
        'product_2': 'Wiederverwendbare Taschen helfen, Plastikmüll zu reduzieren.',
        'product_3': 'Lernen Sie, Öko-Labels auf Produkten zu erkennen.',
        'product_4': 'Unterstützen Sie lokale Produzenten, indem Sie auf Märkten einkaufen.',
        'product_5': 'Biologische Landwirtschaft unterstützt die nachhaltige Entwicklung.',
        'product_6': 'Einkaufen auf lokalen Märkten unterstützt lokale Produzenten.'
    },
    'es': {
        'title_tips': 'Compras Verdes',
        'home': 'Inicio',
        'recycling': 'Reciclaje',
        'energy_saving': 'Ahorro de Energía',
        'water_conservation': 'Conservación del Agua',
        'eco_transport': 'Eco-Transporte',
        'rights': '© 2024 Consejos Ecológicos. Todos los derechos reservados.',
        'product_1': 'Elija productos con certificación ecológica.',
        'product_2': 'Las bolsas reutilizables ayudan a reducir los residuos plásticos.',
        'product_3': 'Aprenda a reconocer las etiquetas ecológicas en los productos.',
        'product_4': 'Apoye a los productores locales comprando en mercados.',
        'product_5': 'La agricultura ecológica apoya el desarrollo sostenible.',
        'product_6': 'Las compras en mercados locales apoyan a los productores locales.'
    }
};

// Uruchomienie funkcji zmiany języka po załadowaniu strony
changeLanguage(getSavedLanguage()
)});
