// Function to get the saved language from local storage
function getSavedLanguage() {
    return localStorage.getItem('selectedLanguage') || 'pl';
}

// Function to set the language and save it to local storage
function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    translatePage(language);
}

// Function to translate the page content
function translatePage(language) {
//    console.log(`Translating page to ${language}`);
    document.querySelectorAll('[data-key]').forEach(function (element) {
        const key = element.getAttribute('data-key');
        if (translations[language] && translations[language][key]) {
            element.innerText = translations[language][key];
            console.log(`Translated ${key} to ${translations[language][key]}`);
        } else {
//            console.log(`Translation for ${key} not found in ${language}`);
        }
    });
}

const translations = {
    "pl": {
        "title": "Ochrona Środowiska",
        "title_home": "Ochrona Środowiska",
        "title_about": "O Nas",
        "title_news": "Aktualności",
        "title_tips": "Porady Ekologiczne",
        "title_contact": "Formularz Kontaktowy",
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
        "rights": "© 2024 Ochrona Środowiska. Wszelkie prawa zastrzeżone.",
        "who_we_are": "Kim jesteśmy?",
        "our_mission": "Naszą misją jest edukacja i promowanie działań na rzecz ochrony środowiska. Jesteśmy grupą entuzjastów ekologii, którzy wierzą, że każdy z nas może przyczynić się do ratowania naszej planety.",
        "our_history": "Nasza historia",
        "history_text": "Strona została założona w 2024 roku przez grupę entuzjastów ekologii, którzy chcieli podzielić się swoją wiedzą i pasją z innymi. Od tego czasu nasza społeczność stale rośnie, a nasze projekty zdobywają coraz większe uznanie.",
        "our_values": "Nasze Wartości",
        "value_1": "Zrównoważony rozwój: Wierzymy, że zrównoważony rozwój jest kluczem do przyszłości.",
        "value_2": "Edukacja: Edukacja jest podstawą do zrozumienia i ochrony środowiska.",
        "value_3": "Współpraca: Współpraca jest niezbędna do osiągnięcia naszych celów.",
        "our_team": "Nasz Zespół",
        "founder": "Założyciel i prezes",
        "project_coordinator": "Koordynator projektów",
        "education_specialist": "Specjalista ds. edukacji",
        "our_projects": "Nasze Projekty",
        "education_programs": "Programy edukacyjne dla szkół",
        "waste_reduction": "Kampanie na rzecz redukcji odpadów",
        "water_protection": "Inicjatywy na rzecz ochrony wód",
        "renewable_energy": "Projekty związane z odnawialnymi źródłami energii",
        "latest_initiatives": "Nowe inicjatywy na rzecz ochrony środowiska",
        "upcoming_events": "Wydarzenia ekologiczne w najbliższym czasie",
        "tree_planting": "Kampania na rzecz zalesiania miast",
        "new_recycling_technologies": "Nowe technologie w recyklingu",
        "read_more": "Czytaj więcej",
        "load_more": "Wczytaj więcej",
        "all": "Wszystkie",
        "initiatives": "Inicjatywy",
        "technologies": "Technologie",
        "new_initiatives": "Nowe inicjatywy na rzecz ochrony środowiska",
        "urban_forestation": "Zalesianie miast",
        "goal": "Cel",
        "actions": "Działania",
        "achievements": "Osiągnięcia",
        "partners": "Partnerzy",
        "future_actions": "Przyszłe działania",
        "plastic_reduction_campaign": "Kampania redukcji plastiku",
        "water_protection": "Ochrona wód",
        "public_transport_promotion": "Promowanie transportu publicznego",
        "zero_waste_workshops": "Warsztaty \"Zero Waste\"",
        "renewable_energy_conference": "Konferencja \"Przyszłość Energii Odnawialnej\"",
        "world_cleanup_day": "Dzień Sprzątania Świata",
        "green_city_festival": "Festiwal \"Zielone Miasto\"",
        "run_for_the_planet_marathon": "Maraton \"Biegnij dla Planety\"",
        "city_forestation_campaign": "Kampania na rzecz zalesiania miast",
        "green_city_campaign": "Kampania \"Zielone Miasto\"",
        "trees_for_everyone_campaign": "Kampania \"Drzewa dla Każdego\"",
        "green_street_campaign": "Kampania \"Zielona Ulica\"",
        "optical_sorting_technology": "Technologia sortowania optycznego",
        "chemical_recycling_technology": "Technologia recyklingu chemicznego",
        "biodegradable_plastics": "Biodegradowalne plastiki",
        "automated_recycling": "Automatyzowany recykling",
        "form_title": "Formularz kontaktowy",
        "form_name": "Imię",
        "form_email": "Email",
        "form_message": "Wiadomość",
        "form_submit": "Wyślij",
        "recycling":"Recykling",
        "energy_saving":"Oszczędzanie Energii",
        "water_conservation":"Ochrona Wody",
        "eco_transport":"Eko-Transport",
        "green_shopping":"Zielone zakupy",
        "recycling_title": "Recykling i Redukcja Odpadów",
        "recycling_text": "Odkryj proste sposoby na zmniejszenie ilości odpadów i skuteczne recyklingowanie materiałów codziennego użytku.",
        "recycling_glass": "Oddzielanie szkła to kluczowy element skutecznego recyklingu.",
        "home_recycling": "Prosty system segregacji odpadów, który można wdrożyć w każdym domu.",
        "materials_for_recycling": "Różne rodzaje materiałów gotowych do recyklingu.",
        "recycling_facility": "Zakład recyklingu przetwarzający odpady na surowce wtórne.",
        "recycling-paper":"Recykling papieru pomaga zmniejszyć wycinkę lasów.",
        "recycling-plastic":"Recykling plastiku zmniejsza zanieczyszczenie oceanów.",
        "rights": "© 2024 Ochrona Środowiska. Wszelkie prawa zastrzeżone.",
        "energy_title": "Oszczędzanie Energii",
        "energy_text": "Dowiedz się, jak zmniejszyć zużycie energii w swoim domu i biurze, co pomoże obniżyć rachunki i chronić środowisko.",
        "water_title": "Ochrona Wody",
        "water_text": "Woda to cenny zasób. Przeczytaj nasze wskazówki, jak oszczędzać wodę i zmniejszać jej marnowanie.",
        "transport_title": "Eko-Transport",
        "transport_text": "Rozważ alternatywne środki transportu, które są przyjazne dla środowiska, takie jak jazda na rowerze, carpooling czy komunikacja publiczna.",
        "shopping_title": "Zielone Zakupy",
        "shopping_text": "Wybieraj produkty, które są ekologiczne i mają mniejszy wpływ na środowisko. Dowiedz się, na co zwracać uwagę przy zakupach."
    },
    "en": {
        "title": "Environmental Protection",
        "title_home": "Environmental Protection",
        "title_about": "About Us",
        "title_news": "News",
        "title_tips": "Eco Tips",
        "title_contact": "Contact Form",
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
        "tips_text": "Practical tips to help you take care of the environment in your daily life.",
        "rights": "© 2024 Environmental Protection. All rights reserved.",
        "who_we_are": "Who We Are",
        "our_mission": "Our mission is to educate and promote actions for environmental protection. We are a group of ecology enthusiasts who believe that each of us can contribute to saving our planet.",
        "our_history": "Our History",
        "history_text": "The page was founded in 2024 by a group of ecology enthusiasts who wanted to share their knowledge and passion with others. Since then, our community has been growing, and our projects are gaining more recognition.",
        "our_values": "Our Values",
        "value_1": "Sustainable Development: We believe that sustainable development is the key to the future.",
        "value_2": "Education: Education is the foundation for understanding and protecting the environment.",
        "value_3": "Collaboration: Collaboration is essential to achieve our goals.",
        "our_team": "Our Team",
        "founder": "Founder and President",
        "project_coordinator": "Project Coordinator",
        "education_specialist": "Education Specialist",
        "our_projects": "Our Projects",
        "education_programs": "Educational Programs for Schools",
        "waste_reduction": "Waste Reduction Campaigns",
        "water_protection": "Water Protection Initiatives",
        "renewable_energy": "Renewable Energy Projects",
        "latest_initiatives": "New Environmental Protection Initiatives",
        "upcoming_events": "Upcoming Environmental Events",
        "tree_planting": "Urban Forestation Campaign",
        "new_recycling_technologies": "New Recycling Technologies",
        "read_more": "Read More",
        "load_more": "Load More",
        "all": "All",
        "initiatives": "Initiatives",
        "technologies": "Technologies",
        "new_initiatives": "New Environmental Protection Initiatives",
        "urban_forestation": "Urban Forestation",
        "goal": "Goal",
        "actions": "Actions",
        "achievements": "Achievements",
        "partners": "Partners",
        "future_actions": "Future Actions",
        "plastic_reduction_campaign": "Plastic Reduction Campaign",
        "water_protection": "Water Protection",
        "public_transport_promotion": "Public Transport Promotion",
        "zero_waste_workshops": "Zero Waste Workshops",
        "renewable_energy_conference": "Renewable Energy Future Conference",
        "world_cleanup_day": "World Cleanup Day",
        "green_city_festival": "Green City Festival",
        "run_for_the_planet_marathon": "Run for the Planet Marathon",
        "city_forestation_campaign": "Urban Forestation Campaign",
        "green_city_campaign": "Green City Campaign",
        "trees_for_everyone_campaign": "Trees for Everyone Campaign",
        "green_street_campaign": "Green Street Campaign",
        "optical_sorting_technology": "Optical Sorting Technology",
        "chemical_recycling_technology": "Chemical Recycling Technology",
        "biodegradable_plastics": "Biodegradable Plastics",
        "automated_recycling": "Automated Recycling",
        "form_title": "Contact Form",
        "form_name": "Name",
        "form_email": "Email",
        "form_message": "Message",
        "form_submit": "Submit",
        "recycling": "Recycling",
        "energy_saving": "Energy Saving",
        "water_conservation": "Water Conservation",
        "eco_transport": "Eco Transport",
        "green_shopping": "Green Shopping",
        "recycling_title": "Recycling and Waste Reduction",
        "recycling_text": "Discover simple ways to reduce waste and effectively recycle everyday materials.",
        "recycling_title": "Recycling and Waste Reduction",
        "recycling_text": "Discover simple ways to reduce waste and effectively recycle everyday materials.",
        "recycling_glass": "Separating glass is a key element of effective recycling.",
        "home_recycling": "A simple waste segregation system that can be implemented in every home.",
        "materials_for_recycling": "Various types of materials ready for recycling.",
        "recycling_facility": "A recycling facility processing waste into secondary raw materials.",
        "recycling-paper": "Recycling paper helps reduce deforestation.",
        "recycling-plastic": "Recycling plastic reduces ocean pollution.",
        "rights": "© 2024 Environmental Protection. All rights reserved.",
        "energy_title": "Energy Saving",
        "energy_text": "Learn how to reduce energy consumption in your home and office, helping to lower bills and protect the environment.",
        "water_title": "Water Conservation",
        "water_text": "Water is a precious resource. Read our tips on how to save water and reduce its wastage.",
        "transport_title": "Eco-Transport",
        "transport_text": "Consider alternative means of transport that are environmentally friendly, such as cycling, carpooling, or public transport.",
        "shopping_title": "Green Shopping",
        "shopping_text": "Choose products that are eco-friendly and have a lower environmental impact. Learn what to look for when shopping."
    },
    "de": {
        "title": "Umweltschutz",
        "title_home": "Umweltschutz",
        "title_about": "Über uns",
        "title_news": "Nachrichten",
        "title_tips": "Umwelttipps",
        "title_contact": "Kontaktformular",
        "home": "Startseite",
        "about": "Über uns",
        "news": "Nachrichten",
        "tips": "Umwelttipps",
        "contact": "Kontakt",
        "welcome": "Willkommen auf der Umweltschutz-Seite!",
        "welcome_text": "Hier finden Sie Informationen und Tipps, wie Sie sich um unseren Planeten kümmern können.",
        "news_section": "Nachrichten",
        "news_text": "Verfolgen Sie die neuesten Nachrichten und Veranstaltungen zum Thema Umweltschutz.",
        "tips_section": "Umwelttipps",
        "tips_text": "Praktische Tipps, die Ihnen helfen, im Alltag auf die Umwelt zu achten.",
        "rights": "© 2024 Umweltschutz. Alle Rechte vorbehalten.",
        "who_we_are": "Wer wir sind",
        "our_mission": "Unsere Mission ist es, Maßnahmen zum Umweltschutz zu fördern und zu fördern. Wir sind eine Gruppe von Ökologie-Enthusiasten, die glauben, dass jeder von uns dazu beitragen kann, unseren Planeten zu retten.",
        "our_history": "Unsere Geschichte",
        "history_text": "Die Seite wurde 2024 von einer Gruppe von Ökologie-Enthusiasten gegründet, die ihr Wissen und ihre Leidenschaft mit anderen teilen wollten. Seitdem wächst unsere Gemeinschaft und unsere Projekte gewinnen immer mehr Anerkennung.",
        "our_values": "Unsere Werte",
        "value_1": "Nachhaltige Entwicklung: Wir glauben, dass nachhaltige Entwicklung der Schlüssel zur Zukunft ist.",
        "value_2": "Bildung: Bildung ist die Grundlage für das Verständnis und den Schutz der Umwelt.",
        "value_3": "Zusammenarbeit: Zusammenarbeit ist entscheidend, um unsere Ziele zu erreichen.",
        "our_team": "Unser Team",
        "founder": "Gründer und Präsident",
        "project_coordinator": "Projektkoordinator",
        "education_specialist": "Bildungsspezialist",
        "our_projects": "Unsere Projekte",
        "education_programs": "Bildungsprogramme für Schulen",
        "waste_reduction": "Abfallreduktionskampagnen",
        "water_protection": "Wasserschutzinitiativen",
        "renewable_energy": "Projekte zu erneuerbaren Energien",
        "latest_initiatives": "Neue Initiativen zum Umweltschutz",
        "upcoming_events": "Bevorstehende Umweltveranstaltungen",
        "tree_planting": "Kampagne zur Stadtaufforstung",
        "new_recycling_technologies": "Neue Recyclingtechnologien",
        "read_more": "Mehr lesen",
        "load_more": "Mehr laden",
        "all": "Alle",
        "initiatives": "Initiativen",
        "technologies": "Technologien",
        "new_initiatives": "Neue Initiativen zum Umweltschutz",
        "urban_forestation": "Stadtaufforstung",
        "goal": "Ziel",
        "actions": "Aktionen",
        "achievements": "Leistungen",
        "partners": "Partner",
        "future_actions": "Zukünftige Aktionen",
        "plastic_reduction_campaign": "Plastikreduktionskampagne",
        "water_protection": "Wasserschutz",
        "public_transport_promotion": "Förderung des öffentlichen Verkehrs",
        "zero_waste_workshops": "\"Zero Waste\"-Workshops",
        "renewable_energy_conference": "Konferenz zur Zukunft erneuerbarer Energien",
        "world_cleanup_day": "World Cleanup Day",
        "green_city_festival": "Green City Festival",
        "run_for_the_planet_marathon": "Marathon \"Run for the Planet\"",
        "city_forestation_campaign": "Kampagne zur Stadtaufforstung",
        "green_city_campaign": "Kampagne \"Green City\"",
        "trees_for_everyone_campaign": "Kampagne \"Bäume für alle\"",
        "green_street_campaign": "Kampagne \"Green Street\"",
        "optical_sorting_technology": "Optische Sortiertechnologie",
        "chemical_recycling_technology": "Chemische Recyclingtechnologie",
        "biodegradable_plastics": "Biologisch abbaubare Kunststoffe",
        "automated_recycling": "Automatisiertes Recycling",
        "form_title": "Kontaktformular",
        "form_name": "Name",
        "form_email": "Email",
        "form_message": "Nachricht",
        "form_submit": "Absenden",
        "recycling": "Recycling",
        "energy_saving": "Energieeinsparung",
        "water_conservation": "Wasserschutz",
        "eco_transport": "Öko-Transport",
        "green_shopping": "Grünes Einkaufen",
        "recycling_title": "Recycling und Abfallreduzierung",
        "recycling_text": "Entdecken Sie einfache Möglichkeiten, Abfall zu reduzieren und Alltagsmaterialien effektiv zu recyceln.",
        "recycling_title": "Recycling und Abfallreduzierung",
        "recycling_text": "Entdecken Sie einfache Möglichkeiten, Abfall zu reduzieren und alltägliche Materialien effektiv zu recyceln.",
        "recycling_glass": "Die Trennung von Glas ist ein Schlüsselelement für effektives Recycling.",
        "home_recycling": "Ein einfaches Abfalltrennungssystem, das in jedem Haushalt implementiert werden kann.",
        "materials_for_recycling": "Verschiedene Arten von Materialien, die recycelt werden können.",
        "recycling_facility": "Eine Recyclinganlage, die Abfälle zu Sekundärrohstoffen verarbeitet.",
        "recycling-paper": "Papierrecycling hilft, die Abholzung zu reduzieren.",
        "recycling-plastic": "Das Recycling von Kunststoff reduziert die Verschmutzung der Ozeane.",
        "rights": "© 2024 Umweltschutz. Alle Rechte vorbehalten.",
        "energy_title": "Energieeinsparung",
        "energy_text": "Erfahren Sie, wie Sie den Energieverbrauch in Ihrem Zuhause und Büro senken können, um die Rechnungen zu senken und die Umwelt zu schützen.",
        "water_title": "Wasserschutz",
        "water_text": "Wasser ist eine kostbare Ressource. Lesen Sie unsere Tipps, wie Sie Wasser sparen und seinen Verbrauch reduzieren können.",
        "transport_title": "Öko-Transport",
        "transport_text": "Überlegen Sie alternative Transportmittel, die umweltfreundlich sind, wie Fahrradfahren, Fahrgemeinschaften oder öffentliche Verkehrsmittel.",
        "shopping_title": "Grünes Einkaufen",
        "shopping_text": "Wählen Sie Produkte, die umweltfreundlich sind und eine geringere Umweltbelastung haben. Erfahren Sie, worauf Sie beim Einkaufen achten sollten."
    },
    "es": {
        "title": "Protección del Medio Ambiente",
        "title_home": "Protección del Medio Ambiente",
        "title_about": "Sobre nosotros",
        "title_news": "Noticias",
        "title_tips": "Consejos ecológicos",
        "title_contact": "Formulario de contacto",
        "home": "Inicio",
        "about": "Sobre nosotros",
        "news": "Noticias",
        "tips": "Consejos ecológicos",
        "recycling": "Reciclaje",
        "energy_saving": "Ahorro de energía",
        "water_conservation": "Conservación del agua",
        "eco_transport": "Eco-transporte",
        "green_shopping": "Compras verdes",
        "contact": "Contacto",
        "welcome": "¡Bienvenido a la página dedicada a la protección del medio ambiente!",
        "welcome_text": "Aquí encontrarás información y consejos sobre cómo cuidar nuestro planeta.",
        "news_section": "Noticias",
        "news_text": "Sigue las últimas noticias y eventos sobre la protección del medio ambiente.",
        "tips_section": "Consejos ecológicos",
        "tips_text": "Consejos prácticos que te ayudarán en el cuidado diario del medio ambiente.",
        "rights": "© 2024 Protección del medio ambiente. Todos los derechos reservados.",
        "who_we_are": "Quiénes somos",
        "our_mission": "Nuestra misión es educar y promover acciones para la protección del medio ambiente. Somos un grupo de entusiastas de la ecología que creen que cada uno de nosotros puede contribuir a salvar nuestro planeta.",
        "our_history": "Nuestra historia",
        "history_text": "La página fue fundada en 2024 por un grupo de entusiastas de la ecología que querían compartir su conocimiento y pasión con los demás. Desde entonces, nuestra comunidad ha estado creciendo y nuestros proyectos están ganando más reconocimiento.",
        "our_values": "Nuestros valores",
        "value_1": "Desarrollo sostenible: Creemos que el desarrollo sostenible es la clave para el futuro.",
        "value_2": "Educación: La educación es la base para comprender y proteger el medio ambiente.",
        "value_3": "Colaboración: La colaboración es esencial para alcanzar nuestros objetivos.",
        "our_team": "Nuestro equipo",
        "founder": "Fundador y presidente",
        "project_coordinator": "Coordinador de proyectos",
        "education_specialist": "Especialista en educación",
        "our_projects": "Nuestros proyectos",
        "education_programs": "Programas educativos para escuelas",
        "waste_reduction": "Campañas de reducción de residuos",
        "water_protection": "Iniciativas de protección del agua",
        "renewable_energy": "Proyectos de energía renovable",
        "latest_initiatives": "Nuevas iniciativas de protección ambiental",
        "upcoming_events": "Próximos eventos ambientales",
        "tree_planting": "Campaña de forestación urbana",
        "new_recycling_technologies": "Nuevas tecnologías de reciclaje",
        "read_more": "Leer más",
        "load_more": "Cargar más",
        "all": "Todos",
        "initiatives": "Iniciativas",
        "technologies": "Tecnologías",
        "new_initiatives": "Nuevas iniciativas de protección ambiental",
        "urban_forestation": "Forestación urbana",
        "goal": "Meta",
        "actions": "Acciones",
        "achievements": "Logros",
        "partners": "Socios",
        "future_actions": "Acciones futuras",
        "plastic_reduction_campaign": "Campaña de reducción de plásticos",
        "water_protection": "Protección del agua",
        "public_transport_promotion": "Promoción del transporte público",
        "zero_waste_workshops": "Talleres \"Zero Waste\"",
        "renewable_energy_conference": "Conferencia sobre el futuro de la energía renovable",
        "world_cleanup_day": "Día Mundial de la Limpieza",
        "green_city_festival": "Festival de la Ciudad Verde",
        "run_for_the_planet_marathon": "Maratón \"Corre por el Planeta\"",
        "city_forestation_campaign": "Campaña de forestación urbana",
        "green_city_campaign": "Campaña \"Ciudad Verde\"",
        "trees_for_everyone_campaign": "Campaña \"Árboles para Todos\"",
        "green_street_campaign": "Campaña \"Calle Verde\"",
        "optical_sorting_technology": "Tecnología de clasificación óptica",
        "chemical_recycling_technology": "Tecnología de reciclaje químico",
        "biodegradable_plastics": "Plásticos biodegradables",
        "automated_recycling": "Reciclaje automatizado",
        "form_title": "Formulario de contacto",
        "form_name": "Nombre",
        "form_email": "Correo electrónico",
        "form_message": "Mensaje",
        "form_submit": "Enviar",
        "recycling": "Reciclaje",
        "energy_saving": "Ahorro de Energía",
        "water_conservation": "Conservación del Agua",
        "eco_transport": "Transporte Ecológico",
        "green_shopping": "Compras Verdes",
        "recycling_title": "Reciclaje y Reducción de Residuos",
        "recycling_text": "Descubre formas simples de reducir los residuos y reciclar eficazmente los materiales cotidianos.",
        "recycling_title": "Reciclaje y Reducción de Residuos",
        "recycling_text": "Descubre formas simples de reducir residuos y reciclar materiales cotidianos de manera efectiva.",
        "recycling_glass": "Separar el vidrio es un elemento clave del reciclaje efectivo.",
        "home_recycling": "Un sistema simple de segregación de residuos que se puede implementar en cada hogar.",
        "materials_for_recycling": "Varios tipos de materiales listos para reciclar.",
        "recycling_facility": "Una instalación de reciclaje que procesa residuos en materias primas secundarias.",
        "recycling-paper": "El reciclaje de papel ayuda a reducir la deforestación.",
        "recycling-plastic": "El reciclaje de plástico reduce la contaminación de los océanos.",
        "rights": "© 2024 Protección Ambiental. Todos los derechos reservados.",
        "energy_title": "Ahorro de Energía",
        "energy_text": "Aprende a reducir el consumo de energía en tu hogar y oficina, ayudando a reducir las facturas y proteger el medio ambiente.",
        "water_title": "Conservación del Agua",
        "water_text": "El agua es un recurso valioso. Lee nuestros consejos sobre cómo ahorrar agua y reducir su desperdicio.",
        "transport_title": "Transporte Ecológico",
        "transport_text": "Considera medios de transporte alternativos que sean ecológicos, como el ciclismo, el carpooling o el transporte público.",
        "shopping_title": "Compras Verdes",
        "shopping_text": "Elige productos que sean ecológicos y tengan un menor impacto ambiental. Aprende qué buscar al hacer tus compras."
    }
};

// Funkcja do zmiany języka
function changeLanguage(language) {
    localStorage.setItem('selectedLanguage', language); // Przechowuj wybrany język
    const data = translations[language]; // Użyj obiektu translations bezpośrednio
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (data[key]) {
            element.textContent = data[key];
        }
    });
    // Zmiana tytułu strony
    const page = document.body.getAttribute('data-page');
    if (data[`title_${page}`]) {
        document.title = data[`title_${page}`];
    }
}

// Nasłuchiwacze zdarzeń dla ikon języków
document.querySelectorAll('.language-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const language = icon.getAttribute('data-lang');
        changeLanguage(language);
    });
});

// Aplikuj zapisany język przy załadowaniu strony(
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = getSavedLanguage();
    changeLanguage(savedLanguage);
});


// Set the initial language based on saved preference
document.addEventListener('DOMContentLoaded', function () {
    const savedLanguage = getSavedLanguage();
    setLanguage(savedLanguage);
//    console.log(`Loaded language: ${savedLanguage}`);

    // Funkcja pomocnicza do dodawania nasłuchiwaczy, jeśli element istnieje
    function addLangListener(id, lang) {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function () {
                setLanguage(lang);
            });
        }
    }

    // Dodaj nasłuchiwacze dla wszystkich języków
    addLangListener('lang-pl', 'pl');
    addLangListener('lang-en', 'en');
    addLangListener('lang-de', 'de');
    addLangListener('lang-es', 'es');
});

function changeLanguage(language) {
    const data = translations[language];
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (data && data[key]) {  // Add an additional check for data[key]
            element.textContent = data[key];
        } else {
            console.warn(`Translation for key "${key}" not found in language "${language}"`);
        }
    });

    // Update the page title if it exists in the translation object
    const page = document.body.getAttribute('data-page');
    if (data && data[`title_${page}`]) {
        document.title = data[`title_${page}`];
    }
}

// Kod JavaScript dla menu mobilnego
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        document.querySelector('.mobile-nav').classList.toggle('active');
    });
}