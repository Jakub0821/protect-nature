const translations = {
    "pl": {
        "title": "Ochrona środowiska",
        "home": "Strona Główna",
        "about": "O Nas",
        "news": "Aktualności",
        "tips": "Porady Ekologiczne",
        "contact": "Kontakt",
        "welcome": "Witamy na stronie poświęconej ochronie środowiska!",
        "welcome_text": "Tutaj znajdziesz informacje i porady, jak dbać o naszą planetę.",
        "news_section": "Aktualności",
        "news_text": "Śledź najnowsze wiadomości i wydarzenia dotyczące ochrony środowiska.",
        "tips_section": "Porady Ekologiczne",
        "tips_text": "Praktyczne porady, które pomogą Ci w codziennym dbaniu o środowisko.",
        "rights": "© 2024 Ochrona Środowiska. Wszelkie prawa zastrzeżone."
    },
    "en": {
        "title": "Environmental Protection",
        "home": "Home",
        "about": "About Us",
        "news": "News",
        "tips": "Eco Tips",
        "contact": "Contact",
        "welcome": "Welcome to the Environmental Protection page!",
        "welcome_text": "Here you will find information and tips on how to take care of our planet.",
        "news_section": "News",
        "news_text": "Follow the latest news and events on environmental protection.",
        "tips_section": "Eco Tips",
        "tips_text": "Practical tips to help you take care of the environment every day.",
        "rights": "© 2024 Environmental Protection. All rights reserved."
    },
    "de": {
        "title": "Umweltschutz",
        "home": "Startseite",
        "about": "Über Uns",
        "news": "Nachrichten",
        "tips": "Umwelt Tipps",
        "contact": "Kontakt",
        "welcome": "Willkommen auf der Seite zum Umweltschutz!",
        "welcome_text": "Hier finden Sie Informationen und Tipps, wie Sie sich um unseren Planeten kümmern können.",
        "news_section": "Nachrichten",
        "news_text": "Verfolgen Sie die neuesten Nachrichten und Veranstaltungen zum Umweltschutz.",
        "tips_section": "Umwelt Tipps",
        "tips_text": "Praktische Tipps, die Ihnen helfen, sich jeden Tag um die Umwelt zu kümmern.",
        "rights": "© 2024 Umweltschutz. Alle Rechte vorbehalten."
    },
    "esp": {
        "title": "Protección Ambiental",
        "home": "Inicio",
        "about": "Sobre Nosotros",
        "news": "Noticias",
        "tips": "Consejos Ecológicos",
        "contact": "Contacto",
        "welcome": "¡Bienvenido a la página de Protección Ambiental!",
        "welcome_text": "Aquí encontrarás información y consejos sobre cómo cuidar nuestro planeta.",
        "news_section": "Noticias",
        "news_text": "Sigue las últimas noticias y eventos sobre la protección ambiental.",
        "tips_section": "Consejos Ecológicos",
        "tips_text": "Consejos prácticos para ayudarte a cuidar el medio ambiente todos los días.",
        "rights": "© 2024 Protección Ambiental. Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageIcons = document.querySelectorAll('.language-icon');
    languageIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            const lang = event.target.dataset.lang;
            translatePage(lang);
        });
    });

    function translatePage(lang) {
        const translation = translations[lang];
        if (translation) {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translation[key]) {
                    element.textContent = translation[key];
                }
            });
        } else {
            console.error('Translation not found for language:', lang);
        }
    }

    // Default language
    translatePage('pl');
});
