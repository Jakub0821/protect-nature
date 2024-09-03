console.log("Plik translation.js został załadowany.");
// Function to get the saved language from local storage
function getSavedLanguage() {
    return localStorage.getItem('selectedLanguage') || 'pl';
}

// Function to set the language and save it to local storage
function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    changeLanguage(language);  // Correct usage here
}

// Function to change the language and update the page content
function changeLanguage(language) {
    const data = translations[language];
    if (!data) {
        console.error(`No translations found for language: ${language}`);
        return;
    }

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (data[key]) {
            element.textContent = data[key];
        } else {
            console.warn(`Translation for key "${key}" not found in language "${language}"`);
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
        "new_initiatives_description": "Wprowadzamy nowe projekty mające na celu redukcję odpadów i oszczędność energii.",
        "urban_forestation": "Zalesianie miast",
        "goal": "Cel",
        "actions": "Działania",
        "achievements": "Osiągnięcia",
        "educational_program": "Program edukacyjny dla szkół",
        "plastic_reduction_campaign": "Kampania redukcji plastiku",
        "water_protection": "Ochrona wód",
        "public_transport_promotion": "Promowanie transportu publicznego",
        "upcoming_events": "Wydarzenia ekologiczne w najbliższym czasie",
        "upcoming_events_description": "Zapraszamy na warsztaty i spotkania poświęcone ochronie środowiska.",
        "read_more": "Czytaj więcej",
        "zero_waste_workshops": "Warsztaty 'Zero Waste'",
        "renewable_energy_conference": "Konferencja 'Przyszłość Energii Odnawialnej'",
        "world_cleanup_day": "Dzień Sprzątania Świata",
        "green_city_festival": "Festiwal 'Zielone Miasto'",
        "run_for_the_planet_marathon": "Maraton 'Biegnij dla Planety'",
        "new_recycling_technologies": "Nowe technologie w recyklingu",
        "new_recycling_technologies_description": "Odkryj innowacyjne metody, które przekształcają przemysł recyklingu.",
        "technology": "Technologie",
        "optical_sorting_technology": "Technologia sortowania optycznego",
        "chemical_recycling_technology": "Technologia recyklingu chemicznego plastiku",
        "waste_to_energy_technology": "Technologia przetwarzania odpadów organicznych na energię",
        "date": "Data",
        "place": "Miejsce",
        "description": "Opis",
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
        "articles": [
        {
            "title": "Kampania na rzecz zalesiania miast",
            "content": "Dowiedz się więcej o naszych inicjatywach zalesiania miast.",
            "category": "Inicjatywy",
            "moreContent": "Tutaj znajdziesz dodatkowe informacje na temat kampanii na rzecz zalesiania miast."
        },
        {
            "title": "Nowe technologie w recyklingu",
            "content": "Poznaj nowe technologie, które pomagają w recyklingu odpadów.",
            "category": "Technologie",
            "moreContent": "Dodatkowe informacje o nowych technologiach w recyklingu."
        },
        {
            "title": "Ochrona bioróżnorodności",
            "content": "Odkryj działania mające na celu ochronę zagrożonych gatunków.",
            "category": "Ochrona Przyrody",
            "moreContent": "Inicjatywy dotyczące ochrony bioróżnorodności obejmują programy ochrony zagrożonych gatunków oraz edukację na temat ich znaczenia."
        },
        {
            "title": "Energia odnawialna w Twoim domu",
            "content": "Dowiedz się, jak wykorzystać energię słoneczną i wiatrową w domu.",
            "category": "Technologie",
            "moreContent": "Instalacja paneli słonecznych i turbin wiatrowych to sposób na zmniejszenie rachunków za energię oraz redukcję śladu węglowego."
        },
        {
            "title": "Edukacja ekologiczna dla dzieci",
            "content": "Warsztaty i programy edukacyjne, które uczą najmłodszych, jak dbać o środowisko.",
            "category": "Edukacja",
            "moreContent": "Edukacja ekologiczna obejmuje praktyczne zajęcia, które angażują dzieci w działania na rzecz ochrony przyrody."
        },
        {
            "title": "Zielone miasto - urbanizacja i zrównoważony rozwój",
            "content": "Jak miasta mogą stać się bardziej przyjazne dla środowiska.",
            "category": "Urbanizacja",
            "moreContent": "Plany zrównoważonej urbanizacji obejmują rozwój infrastruktury ekologicznej, takiej jak zielone dachy, parki i ścieżki rowerowe."
        },
        {
            "title": "Zero Waste - jak ograniczyć ilość odpadów",
            "content": "Poznaj zasady Zero Waste i dowiedz się, jak je wdrożyć w codziennym życiu.",
            "category": "Lifestyle",
            "moreContent": "Zero Waste to filozofia, która zachęca do minimalizacji odpadów poprzez redukcję, ponowne wykorzystanie i recykling materiałów."
        },
        {
            "title": "Ochrona wód i zasobów wodnych",
            "content": "Jak możemy chronić nasze zasoby wodne przed zanieczyszczeniami.",
            "category": "Ochrona Przyrody",
            "moreContent": "Działania na rzecz ochrony wód obejmują oczyszczanie rzek i jezior, a także edukację na temat oszczędzania wody."
        }
    ],
        "form_title": "Formularz kontaktowy",
        "form_name": "Imię",
        "form_email": "Email",
        "form_message": "Wiadomość",
        "form_submit": "Wyślij",
        "title_tips": "Porady Ekologiczne",
        "recycling":"Recykling",
        "energy_saving":"Oszczędzanie Energii",
        "water_conservation":"Ochrona Wody",
        "eco_transport":"Eko-Transport",
        "green_shopping":"Zielone zakupy",
        "recycling_title": "Recykling i Redukcja Odpadów",
        "recycling_text": "Odkryj proste sposoby na zmniejszenie ilości odpadów i skuteczne recyklingowanie materiałów codziennego użytku.",
        "home": "Strona Główna",
        "energy_saving": "Oszczędzanie Energii",
        "water_conservation": "Ochrona Wody",
        "eco_transport": "Eko-Transport",
        "green_shopping": "Zielone Zakupy",
        "rights": "© 2024 Ochrona Środowiska. Wszelkie prawa zastrzeżone.",
        "recycling_glass": "Oddzielanie szkła to kluczowy element skutecznego recyklingu.",
        "home_recycling": "Prosty system segregacji odpadów, który można wdrożyć w każdym domu.",
        "materials_for_recycling": "Różne rodzaje materiałów gotowych do recyklingu.",
        "recycling_facility": 'Zakład recyklingu przetwarzający odpady na surowce wtórne.',
        "recycling_paper": "Recykling papieru pomaga zmniejszyć wycinkę lasów.",
        "recycling_plastic": "Recykling plastiku zmniejsza zanieczyszczenie oceanów.",
        "energy_title": "Oszczędzanie Energii",
        "energy_text": "Dowiedz się, jak zmniejszyć zużycie energii w swoim domu i biurze, co pomoże obniżyć rachunki i chronić środowisko.",
        "home": "Strona Główna",
        "recycling": "Recykling",
        "water_conservation": "Ochrona Wody",
        "eco_transport": "Eko-Transport",
        "green_shopping": "Zielone Zakupy",
        "led_bulbs": "Żarówki LED zużywają mniej energii niż tradycyjne żarówki.",
        "thermostat": "Programowalny termostat pomaga w oszczędzaniu energii.",
        "solar_energy": "Panele słoneczne jako odnawialne źródło energii.",
        "building_insulation": "Dobra izolacja może znacząco zmniejszyć straty ciepła.",
        "energy_efficient_devices": "Energooszczędne urządzenia pomagają zmniejszyć zużycie energii.",
        "home_insulation": "Ocieplenie domu może znacznie obniżyć koszty ogrzewania.",
        "water_title": "Ochrona Wody",
        "water_text": "Woda to cenny zasób. Przeczytaj nasze wskazówki, jak oszczędzać wodę i zmniejszać jej marnowanie.",
        "home": "Strona Główna",
        "recycling": "Recykling",
        "energy_saving": "Oszczędzanie Energii",
        "eco_transport": "Eko-Transport",
        "green_shopping": "Zielone Zakupy",
        "water_saving_taps": "Używanie perlatorów w kranach pomaga zmniejszyć zużycie wody.",
        "rainwater_collection": "Zbieranie deszczówki do podlewania ogrodu.",
        "protect_water_resource": "Woda jest cennym zasobem, który należy chronić.",
        "sewage_treatment": "Nowoczesne technologie oczyszczania ścieków.",
        "modern_technologies": "Nowoczesne technologie pomagają w oszczędzaniu wody.",
        "water_saving_tips": "Proste sposoby na oszczędzanie wody w domu.",
        "transport_title": "Eko-Transport",
        "transport_text": "Rozważ alternatywne środki transportu, które są przyjazne dla środowiska, takie jak jazda na rowerze, carpooling czy komunikacja publiczna.",
        "title_tips": "Porady Ekologiczne",
        "home": "Strona Główna",
        "recycling": "Recykling",
        "energy_saving": "Oszczędzanie Energii",
        "water_conservation": "Ochrona Wody",
        "green_shopping": "Zielone Zakupy",
        "cyclists_in_city": "Jazda na rowerze to ekologiczny sposób poruszania się po mieście.",
        "electric_vehicle_charging": "Samochody elektryczne to przyszłość ekologicznego transportu.",
        "hybrid_bus": "Transport publiczny z niską emisją CO2.",
        "carpooling": "Wspólne przejazdy samochodem zmniejszają ilość emisji.",
        "hybrid_car": "Samochody hybrydowe łączą zalety silników spalinowych i elektrycznych.",
        "public_transport": "Rozwijanie sieci transportu publicznego zmniejsza zanieczyszczenie powietrza.",
        "shopping_title": "Zielone Zakupy",
        "shopping_text": "Wybieraj produkty, które są ekologiczne i mają mniejszy wpływ na środowisko. Dowiedz się, na co zwracać uwagę przy zakupach.",
        "title_eco-transport": "Eko-Transport",
        "home": "Strona Główna",
        "recycling": "Recykling",
        "energy_saving": "Oszczędzanie Energii",
        "water_conservation": "Ochrona Wody",
        "eco_transport": "Eko-Transport",
        "rights": "© 2024 Porady Ekologiczne. Wszelkie prawa zastrzeżone.",
        "eco_products": "Wybieraj produkty z certyfikatem ekologicznym.",
        "reusable_bags": "Torby wielokrotnego użytku pomagają zmniejszyć ilość odpadów plastikowych.",
        "eco_labels": "Ucz się rozpoznawać certyfikaty ekologiczne na produktach.",
        "local_market_shopping": "Wspieraj lokalnych producentów kupując na targach.",
        "organic_farming": "Ekologiczne rolnictwo wspiera zrównoważony rozwój.",
        "local_market_support": "Zakupy na lokalnym rynku wspierają lokalnych producentów.",
        "rights": "@ 2024 Porady Ekologiczne. Wszelkie prawa zastrzeżone."
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
        "new_initiatives": "New initiatives for environmental protection",
        "new_initiatives_description": "We are launching new projects aimed at waste reduction and energy conservation.",
        "urban_forestation": "Urban Forestation",
        "goal": "Goal",
        "actions": "Actions",
        "achievements": "Achievements",
        "educational_program": "Educational Program for Schools",
        "plastic_reduction_campaign": "Plastic Reduction Campaign",
        "water_protection": "Water Protection",
        "public_transport_promotion": "Public Transport Promotion",
        "upcoming_events": "Upcoming Environmental Events",
        "upcoming_events_description": "We invite you to workshops and meetings dedicated to environmental protection.",
        "read_more": "Read More",
        "zero_waste_workshops": "Zero Waste Workshops",
        "renewable_energy_conference": "Renewable Energy Future Conference",
        "world_cleanup_day": "World Cleanup Day",
        "green_city_festival": "Green City Festival",
        "run_for_the_planet_marathon": "Run for the Planet Marathon",
        "new_recycling_technologies": "New Recycling Technologies",
        "new_recycling_technologies_description": "Discover innovative methods that are transforming the recycling industry.",
        "technology": "Technology",
        "optical_sorting_technology": "Optical Sorting Technology",
        "chemical_recycling_technology": "Chemical Recycling Technology",
        "waste_to_energy_technology": "Waste-to-Energy Technology",
        "date": "Date",
        "place": "Place",
        "description": "Description",
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
        "articles" : [
        {
            "title": "Urban Forestation Campaign",
            "content": "Learn more about our urban forestation initiatives.",
            "category": "Initiatives",
            "moreContent": "Here you will find additional information about the urban forestation campaign."
        },
        {
            "title": "New Recycling Technologies",
            "content": "Discover new technologies that help in recycling waste.",
            "category": "Technologies",
            "moreContent": "Additional information about new recycling technologies."
        },
        {
            "title": "Biodiversity Protection",
            "content": "Discover actions aimed at protecting endangered species.",
            "category": "Nature Protection",
            "moreContent": "Initiatives to protect biodiversity include endangered species protection programs and education on their importance."
        },
        {
            "title": "Renewable Energy in Your Home",
            "content": "Learn how to utilize solar and wind energy at home.",
            "category": "Technologies",
            "moreContent": "Installing solar panels and wind turbines is a way to reduce energy bills and your carbon footprint."
        },
        {
            "title": "Ecological Education for Children",
            "content": "Workshops and educational programs that teach children how to care for the environment.",
            "category": "Education",
            "moreContent": "Ecological education includes practical activities that engage children in environmental protection."
        },
        {
            "title": "Green City - Urbanization and Sustainable Development",
            "content": "How cities can become more environmentally friendly.",
            "category": "Urbanization",
            "moreContent": "Sustainable urbanization plans include developing ecological infrastructure such as green roofs, parks, and bike paths."
        },
        {
            "title": "Zero Waste - How to Reduce Waste",
            "content": "Learn about Zero Waste principles and how to implement them in daily life.",
            "category": "Lifestyle",
            "moreContent": "Zero Waste is a philosophy that encourages minimizing waste through reduction, reuse, and recycling of materials."
        },
        {
            "title": "Water and Water Resources Protection",
            "content": "How we can protect our water resources from pollution.",
            "category": "Nature Protection",
            "moreContent": "Water protection activities include cleaning rivers and lakes, as well as educating about water conservation."
        }
    ],
        "form_title": "Contact Form",
        "form_name": "Name",
        "form_email": "Email",
        "form_message": "Message",
        "form_submit": "Submit",
        "title_tips": "Eco Tips",
        "recycling": "Recycling",
        "energy_saving": "Energy Saving",
        "water_conservation": "Water Conservation",
        "eco_transport": "Eco Transport",
        "green_shopping": "Green Shopping",
        "recycling_title": "Recycling and Waste Reduction",
        "recycling_text": "Discover simple ways to reduce waste and effectively recycle everyday materials.",
        "home": "Home",
        "energy_saving": "Energy Saving",
        "water_conservation": "Water Conservation",
        "eco_transport": "Eco-Transport",
        "green_shopping": "Green Shopping",
        "rights": "© 2024 Environmental Protection. All rights reserved.",
        "recycling_glass": "Separating glass is a key component of effective recycling.",
        "home_recycling": "A simple waste sorting system that can be implemented in every home.",
        "materials_for_recycling": "Various types of materials ready for recycling.",
        "recycling_facility": "Recycling facility processing waste into secondary raw materials.",
        "recycling_paper": "Paper recycling helps reduce deforestation.",
        "recycling_plastic": "Plastic recycling reduces ocean pollution.",
        "energy_title": "Energy Saving",
        "energy_text": "Learn how to reduce energy consumption in your home and office to lower bills and protect the environment.",
        "home": "Home",
        "recycling": "Recycling",
        "water_conservation": "Water Conservation",
        "eco_transport": "Eco-Transport",
        "green_shopping": "Green Shopping",
        "rights": "© 2024 Eco Tips. All rights reserved.",
        "led_bulbs": "LED bulbs use less energy than traditional bulbs.",
        "thermostat": "A programmable thermostat helps save energy.",
        "solar_energy": "Solar panels as a renewable energy source.",
        "building_insulation": "Good insulation can significantly reduce heat loss.",
        "energy_efficient_devices": "Energy-efficient devices help reduce energy consumption.",
        "home_insulation": "Insulating your home can greatly reduce heating costs.",
        "water_title": "Water Conservation",
        "water_text": "Water is a valuable resource. Read our tips on how to save water and reduce waste.",
        "home": "Home",
        "recycling": "Recycling",
        "energy_saving": "Energy Saving",
        "eco_transport": "Eco-Transport",
        "green_shopping": "Green Shopping",
        "rights": "© 2024 Eco Tips. All rights reserved.",
        "water_saving_taps": "Using aerators in taps helps reduce water usage.",
        "rainwater_collection": "Collecting rainwater for garden irrigation.",
        "protect_water_resource": "Water is a valuable resource that must be protected.",
        "sewage_treatment": "Modern sewage treatment technologies.",
        "modern_technologies": "Modern technologies help in water conservation.",
        "water_saving_tips": "Simple ways to save water at home.",
        "transport_title": "Eco-Transport",
        "transport_text": "Consider alternative means of transport that are environmentally friendly, such as cycling, carpooling, or public transport.",
        "title_tips": "Eco-Transport",
        "home": "Home",
        "recycling": "Recycling",
        "energy_saving": "Energy Saving",
        "water_conservation": "Water Conservation",
        "green_shopping": "Green Shopping",
        "rights": "© 2024 Eco Tips. All rights reserved.",
        "cyclists_in_city": "Cycling is an eco-friendly way to get around the city.",
        "electric_vehicle_charging": "Electric vehicles are the future of eco-friendly transportation.",
        "hybrid_bus": "Public transport with low CO2 emissions.",
        "carpooling": "Carpooling reduces emissions.",
        "hybrid_car": "Hybrid cars combine the benefits of combustion engines and electric motors.",
        "public_transport": "Expanding public transport networks reduces air pollution.",
        "shopping_title": "Green Shopping",
        "shopping_text": "Choose products that are eco-friendly and have a lower environmental impact. Learn what to look for when shopping.",
        "title_eco-transport": "Eco-Transport",
        "home": "Home",
        "recycling": "Recycling",
        "energy_saving": "Energy Saving",
        "water_conservation": "Water Conservation",
        "eco_transport": "Eco-Transport",
        "rights": "© 2024 Eco Tips. All rights reserved.",
        "eco_products": "Choose products with an eco-friendly certification.",
        "reusable_bags": "Reusable bags help reduce plastic waste.",
        "eco_labels": "Learn to recognize eco-friendly certifications on products.",
        "local_market_shopping": "Support local producers by shopping at markets.",
        "organic_farming": "Organic farming supports sustainable development.",
        "local_market_support": "Shopping at local markets supports local producers.",
        "rights": "@ 2024 Eco Tips. All rights reserved."
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
        "new_initiatives_description": "Wir starten neue Projekte zur Abfallreduzierung und Energieeinsparung.",
        "urban_forestation": "Stadtaufforstung",
        "goal": "Ziel",
        "actions": "Aktionen",
        "achievements": "Erfolge",
        "educational_program": "Bildungsprogramm für Schulen",
        "plastic_reduction_campaign": "Plastikreduktionskampagne",
        "water_protection": "Wasserschutz",
        "public_transport_promotion": "Förderung des öffentlichen Verkehrs",
        "upcoming_events": "Bevorstehende Umweltveranstaltungen",
        "upcoming_events_description": "Wir laden Sie zu Workshops und Treffen zum Thema Umweltschutz ein.",
        "read_more": "Mehr lesen",
        "zero_waste_workshops": "Zero Waste Workshops",
        "renewable_energy_conference": "Konferenz über erneuerbare Energien",
        "world_cleanup_day": "Weltaufräumtag",
        "green_city_festival": "Green City Festival",
        "run_for_the_planet_marathon": "Marathon 'Run for the Planet'",
        "new_recycling_technologies": "Neue Recycling-Technologien",
        "new_recycling_technologies_description": "Entdecken Sie innovative Methoden, die die Recyclingindustrie verändern.",
        "technology": "Technologien",
        "optical_sorting_technology": "Optische Sortiertechnologie",
        "chemical_recycling_technology": "Chemische Recycling-Technologie",
        "waste_to_energy_technology": "Abfall-zu-Energie-Technologie",
        "date": "Datum",
        "place": "Ort",
        "description": "Beschreibung",
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
        "articles": [
        {
            "title": "Kampagne zur Stadtaufforstung",
            "content": "Erfahren Sie mehr über unsere Initiativen zur Stadtaufforstung.",
            "category": "Initiativen",
            "moreContent": "Hier finden Sie zusätzliche Informationen zur Kampagne zur Stadtaufforstung."
        },
        {
            "title": "Neue Recyclingtechnologien",
            "content": "Entdecken Sie neue Technologien, die beim Recycling von Abfällen helfen.",
            "category": "Technologien",
            "moreContent": "Zusätzliche Informationen über neue Recyclingtechnologien."
        },
        {
            "title": "Schutz der Biodiversität",
            "content": "Entdecken Sie Maßnahmen zum Schutz gefährdeter Arten.",
            "category": "Naturschutz",
            "moreContent": "Initiativen zum Schutz der Biodiversität umfassen Programme zum Schutz gefährdeter Arten und Bildung über ihre Bedeutung."
        },
        {
            "title": "Erneuerbare Energien für Ihr Zuhause",
            "content": "Erfahren Sie, wie Sie Solar- und Windenergie zu Hause nutzen können.",
            "category": "Technologien",
            "moreContent": "Die Installation von Solarmodulen und Windturbinen ist ein Weg, um Energiekosten zu senken und Ihren CO2-Fußabdruck zu verringern."
        },
        {
            "title": "Ökologische Bildung für Kinder",
            "content": "Workshops und Bildungsprogramme, die Kindern beibringen, wie man die Umwelt schützt.",
            "category": "Bildung",
            "moreContent": "Ökologische Bildung umfasst praktische Aktivitäten, die Kinder in den Umweltschutz einbeziehen."
        },
        {
            "title": "Grüne Stadt - Urbanisierung und nachhaltige Entwicklung",
            "content": "Wie Städte umweltfreundlicher werden können.",
            "category": "Urbanisierung",
            "moreContent": "Nachhaltige Urbanisierungspläne umfassen die Entwicklung ökologischer Infrastrukturen wie Gründächer, Parks und Radwege."
        },
        {
            "title": "Zero Waste - Wie man Abfall reduziert",
            "content": "Erfahren Sie mehr über die Prinzipien von Zero Waste und wie man sie im Alltag umsetzt.",
            "category": "Lebensstil",
            "moreContent": "Zero Waste ist eine Philosophie, die dazu ermutigt, Abfall durch Reduzierung, Wiederverwendung und Recycling von Materialien zu minimieren."
        },
        {
            "title": "Schutz der Gewässer und Wasserressourcen",
            "content": "Wie wir unsere Wasserressourcen vor Verschmutzung schützen können.",
            "category": "Naturschutz",
            "moreContent": "Wasserschutzaktivitäten umfassen die Reinigung von Flüssen und Seen sowie die Aufklärung über Wassereinsparung."
        }
    ],
        "form_title": "Kontaktformular",
        "form_name": "Name",
        "form_email": "Email",
        "form_message": "Nachricht",
        "form_submit": "Absenden",
        "title_tips": "Umwelttipps",
        "recycling": "Recycling",
        "energy_saving": "Energieeinsparung",
        "water_conservation": "Wasserschutz",
        "eco_transport": "Öko-Transport",
        "green_shopping": "Grünes Einkaufen",
        "recycling_title": "Recycling und Abfallreduzierung",
        "recycling_text": "Entdecken Sie einfache Möglichkeiten, Abfall zu reduzieren und Alltagsmaterialien effektiv zu recyceln.",
        "home": "Startseite",
        "energy_saving": "Energiesparen",
        "water_conservation": "Wasserschutz",
        "eco_transport": "Öko-Transport",
        "green_shopping": "Umweltfreundliches Einkaufen",
        "rights": "© 2024 Umweltschutz. Alle Rechte vorbehalten.",
        "recycling_glass": "Die Trennung von Glas ist ein wichtiger Bestandteil eines effektiven Recyclings.",
        "home_recycling": "Ein einfaches Abfallsortierungssystem, das in jedem Haushalt implementiert werden kann.",
        "materials_for_recycling": "Verschiedene Arten von Materialien, die für das Recycling bereit sind.",
        "recycling_facility": "Recyclinganlage, die Abfälle in Sekundärrohstoffe umwandelt.",
        "recycling_paper": "Papierrecycling hilft, die Abholzung zu verringern.",
        "recycling_plastic": "Das Recycling von Plastik verringert die Verschmutzung der Ozeane.",
        "energy_title": "Energiesparen",
        "energy_text": "Erfahren Sie, wie Sie den Energieverbrauch in Ihrem Zuhause und Büro senken können, um Kosten zu sparen und die Umwelt zu schützen.",
        "home": "Startseite",
        "recycling": "Recycling",
        "water_conservation": "Wasserschutz",
        "eco_transport": "Öko-Transport",
        "green_shopping": "Umweltfreundliches Einkaufen",
        "rights": "© 2024 Öko-Tipps. Alle Rechte vorbehalten.",
        "led_bulbs": "LED-Lampen verbrauchen weniger Energie als herkömmliche Lampen.",
        "thermostat": "Ein programmierbarer Thermostat hilft beim Energiesparen.",
        "solar_energy": "Solarzellen als erneuerbare Energiequelle.",
        "building_insulation": "Gute Isolierung kann den Wärmeverlust erheblich reduzieren.",
        "energy_efficient_devices": "Energieeffiziente Geräte helfen, den Energieverbrauch zu senken.",
        "home_insulation": "Die Isolierung Ihres Hauses kann die Heizkosten erheblich senken.",
        "water_title": "Wasserschutz",
        "water_text": "Wasser ist eine wertvolle Ressource. Lesen Sie unsere Tipps, wie Sie Wasser sparen und Verschwendung reduzieren können.",
        "home": "Startseite",
        "recycling": "Recycling",
        "energy_saving": "Energiesparen",
        "eco_transport": "Ökologischer Transport",
        "green_shopping": "Umweltfreundliches Einkaufen",
        "rights": "© 2024 Öko-Tipps. Alle Rechte vorbehalten.",
        "water_saving_taps": "Die Verwendung von Belüftern in Wasserhähnen hilft, den Wasserverbrauch zu reduzieren.",
        "rainwater_collection": "Regenwasser sammeln für die Gartenbewässerung.",
        "protect_water_resource": "Wasser ist eine wertvolle Ressource, die geschützt werden muss.",
        "sewage_treatment": "Moderne Abwasserreinigungstechnologien.",
        "modern_technologies": "Moderne Technologien helfen beim Wasserschutz.",
        "water_saving_tips": "Einfache Möglichkeiten, zu Hause Wasser zu sparen.",
        "transport_title": "Öko-Transport",
        "transport_text": "Überlegen Sie alternative Transportmittel, die umweltfreundlich sind, wie Fahrradfahren, Fahrgemeinschaften oder öffentliche Verkehrsmittel.",
        "title_tips": "Umwelttipps",
        "home": "Startseite",
        "recycling": "Recycling",
        "energy_saving": "Energiesparen",
        "water_conservation": "Wasserschutz",
        "green_shopping": "Umweltfreundliches Einkaufen",
        "rights": "© 2024 Öko-Tipps. Alle Rechte vorbehalten.",
        "cyclists_in_city": "Radfahren ist eine umweltfreundliche Möglichkeit, sich in der Stadt fortzubewegen.",
        "electric_vehicle_charging": "Elektrofahrzeuge sind die Zukunft des umweltfreundlichen Transports.",
        "hybrid_bus": "Öffentliche Verkehrsmittel mit niedrigen CO2-Emissionen.",
        "carpooling": "Fahrgemeinschaften reduzieren Emissionen.",
        "hybrid_car": "Hybridfahrzeuge kombinieren die Vorteile von Verbrennungsmotoren und Elektromotoren.",
        "public_transport": "Der Ausbau öffentlicher Verkehrssysteme reduziert die Luftverschmutzung.",
        "shopping_title": "Grünes Einkaufen",
        "shopping_text": "Wählen Sie Produkte, die umweltfreundlich sind und eine geringere Umweltbelastung haben. Erfahren Sie, worauf Sie beim Einkaufen achten sollten.",
        "title_eco-transport": "Öko-Transport",
        "home": "Startseite",
        "recycling": "Recycling",
        "energy_saving": "Energiesparen",
        "water_conservation": "Wasserschutz",
        "eco_transport": "Öko-Transport",
        "rights": "© 2024 Öko-Tipps. Alle Rechte vorbehalten.",
        "eco_products": "'Wählen Sie Produkte mit einem ökologischen Zertifikat.",
        "reusable_bags": "Mehrwegbeutel helfen, Plastikmüll zu reduzieren.",
        "eco_labels": "Lernen Sie, ökologische Zertifikate auf Produkten zu erkennen.",
        "local_market_shopping": "Unterstützen Sie lokale Produzenten, indem Sie auf Märkten einkaufen.",
        "organic_farming": "Ökologischer Landbau unterstützt nachhaltige Entwicklung.",
        "local_market_support": "Der Einkauf auf dem lokalen Markt unterstützt lokale Produzenten.",
        "rights": "@ 2024 Umwelttipps. Alle Rechte vorbehalten."
    },
    "es": {
        "title": "Protección del Medio Ambiente",
        "title_home": "Protección del Medio Ambiente",
        "title_about": "Sobre nosotros",
        "title_news": "Noticias",
        "title_tips": "Consejos Ecológicos",
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
        "new_initiatives": "Nuevas iniciativas para la protección ambiental",
        "new_initiatives_description": "Estamos lanzando nuevos proyectos enfocados en la reducción de residuos y el ahorro de energía.",
        "urban_forestation": "Forestación urbana",
        "goal": "Meta",
        "actions": "Acciones",
        "achievements": "Logros",
        "educational_program": "Programa educativo para escuelas",
        "plastic_reduction_campaign": "Campaña de reducción de plásticos",
        "water_protection": "Protección del agua",
        "public_transport_promotion": "Promoción del transporte público",
        "upcoming_events": "Próximos eventos ambientales",
        "upcoming_events_description": "Te invitamos a talleres y reuniones dedicados a la protección del medio ambiente.",
        "read_more": "Leer más",
        "zero_waste_workshops": "Talleres Zero Waste",
        "renewable_energy_conference": "Conferencia sobre Energías Renovables",
        "world_cleanup_day": "Día Mundial de la Limpieza",
        "green_city_festival": "Festival de la Ciudad Verde",
        "run_for_the_planet_marathon": "Maratón Corre por el Planeta",
        "new_recycling_technologies": "Nuevas tecnologías de reciclaje",
        "new_recycling_technologies_description": "Descubre métodos innovadores que están transformando la industria del reciclaje.",
        "technology": "Tecnologías",
        "optical_sorting_technology": "Tecnología de clasificación óptica",
        "chemical_recycling_technology": "Tecnología de reciclaje químico",
        "waste_to_energy_technology": "Tecnología de conversión de residuos en energía",
        "date": "Fecha",
        "place": "Lugar",
        "description": "Descripción",
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
        "articles": [
        {
            "title": "Campaña de Forestación Urbana",
            "content": "Conozca más sobre nuestras iniciativas de forestación urbana.",
            "category": "Iniciativas",
            "moreContent": "Aquí encontrará información adicional sobre la campaña de forestación urbana."
        },
        {
            "title": "Nuevas Tecnologías de Reciclaje",
            "content": "Descubra nuevas tecnologías que ayudan en el reciclaje de residuos.",
            "category": "Tecnologías",
            "moreContent": "Información adicional sobre nuevas tecnologías de reciclaje."
        },
        {
            "title": "Protección de la Biodiversidad",
            "content": "Descubra acciones dirigidas a proteger especies en peligro de extinción.",
            "category": "Protección de la Naturaleza",
            "moreContent": "Las iniciativas para proteger la biodiversidad incluyen programas de protección de especies en peligro y educación sobre su importancia."
        },
        {
            "title": "Energía Renovable en Tu Hogar",
            "content": "Aprenda cómo utilizar energía solar y eólica en su hogar.",
            "category": "Tecnologías",
            "moreContent": "La instalación de paneles solares y turbinas eólicas es una forma de reducir las facturas de energía y la huella de carbono."
        },
        {
            "title": "Educación Ecológica para Niños",
            "content": "Talleres y programas educativos que enseñan a los niños a cuidar el medio ambiente.",
            "category": "Educación",
            "moreContent": "La educación ecológica incluye actividades prácticas que involucran a los niños en la protección del medio ambiente."
        },
        {
            "title": "Ciudad Verde - Urbanización y Desarrollo Sostenible",
            "content": "Cómo las ciudades pueden ser más amigables con el medio ambiente.",
            "category": "Urbanización",
            "moreContent": "Los planes de urbanización sostenible incluyen el desarrollo de infraestructura ecológica, como techos verdes, parques y ciclovías."
        },
        {
            "title": "Zero Waste - Cómo Reducir los Residuos",
            "content": "Conozca los principios de Zero Waste y cómo implementarlos en la vida diaria.",
            "category": "Estilo de Vida",
            "moreContent": "Zero Waste es una filosofía que fomenta la minimización de residuos mediante la reducción, reutilización y reciclaje de materiales."
        },
        {
            "title": "Protección de las Aguas y Recursos Hídricos",
            "content": "Cómo podemos proteger nuestros recursos hídricos de la contaminación.",
            "category": "Protección de la Naturaleza",
            "moreContent": "Las actividades de protección del agua incluyen la limpieza de ríos y lagos, así como la educación sobre la conservación del agua."
        }
    ],
        "form_title": "Formulario de contacto",
        "form_name": "Nombre",
        "form_email": "Correo electrónico",
        "form_message": "Mensaje",
        "form_submit": "Enviar",
        "title_tips": "Consejos Ecológicos",
        "recycling": "Reciclaje",
        "energy_saving": "Ahorro de Energía",
        "water_conservation": "Conservación del Agua",
        "eco_transport": "Transporte Ecológico",
        "green_shopping": "Compras Verdes",
        "recycling_title": "Reciclaje y Reducción de Residuos",
        "recycling_text": "Descubre formas sencillas de reducir residuos y reciclar eficazmente los materiales cotidianos.",
        "home": "Inicio",
        "energy_saving": "Ahorro de Energía",
        "water_conservation": "Conservación del Agua",
        "eco_transport": "Eco-Transporte",
        "green_shopping": "Compras Ecológicas",
        "rights": "© 2024 Protección Ambiental. Todos los derechos reservados.",
        "recycling_glass": "La separación del vidrio es un componente clave del reciclaje efectivo.",
        "home_recycling": "Un sistema simple de clasificación de residuos que se puede implementar en cada hogar.",
        "materials_for_recycling": "Varios tipos de materiales listos para el reciclaje.",
        "recycling_facility": "Instalación de reciclaje que convierte residuos en materias primas secundarias.",
        "recycling_paper": "El reciclaje de papel ayuda a reducir la deforestación.",
        "recycling_plastic": "El reciclaje de plástico reduce la contaminación del océano.",
        "energy_title": "Ahorro de Energía",
        "energy_text": "Aprende cómo reducir el consumo de energía en tu hogar y oficina para bajar las facturas y proteger el medio ambiente.",
        "home": "Inicio",
        "recycling": "Reciclaje",
        "water_conservation": "Conservación del Agua",
        "eco_transport": "Eco-Transporte",
        "green_shopping": "Compras Ecológicas",
        "rights": "© 2024 Consejos Ecológicos. Todos los derechos reservados.",
        "led_bulbs": "Las bombillas LED consumen menos energía que las bombillas tradicionales.",
        "thermostat": "Un termostato programable ayuda a ahorrar energía.",
        "solar_energy": "Paneles solares como fuente de energía renovable.",
        "building_insulation": "Una buena aislamiento puede reducir significativamente la pérdida de calor.",
        "energy_efficient_devices": "Los dispositivos energéticamente eficientes ayudan a reducir el consumo de energía.",
        "home_insulation": "Aislar su hogar puede reducir significativamente los costos de calefacción.",
        "water_title": "Conservación del Agua",
        "water_text": "El agua es un recurso valioso. Lee nuestros consejos sobre cómo ahorrar agua y reducir el desperdicio.",
        "home": "Inicio",
        "recycling": "Reciclaje",
        "energy_saving": "Ahorro de Energía",
        "eco_transport": "Eco-Transporte",
        "green_shopping": "Compras Ecológicas",
        "rights": "© 2024 Consejos Ecológicos. Todos los derechos reservados.",
        "water_saving_taps": "El uso de aireadores en los grifos ayuda a reducir el consumo de agua.",
        "rainwater_collection": "Recolección de agua de lluvia para riego de jardines.",
        "protect_water_resource": "El agua es un recurso valioso que debe ser protegido.",
        "sewage_treatment": "Tecnologías modernas de tratamiento de aguas residuales.",
        "modern_technologies": "Las tecnologías modernas ayudan en la conservación del agua.",
        "water_saving_tips": "Formas sencillas de ahorrar agua en casa.",
        "transport_title": "Transporte Ecológico",
        "transport_text": "Considera medios de transporte alternativos que sean ecológicos, como el ciclismo, el carpooling o el transporte público.",
        "title_tips": "Eco-Transporte",
        "home": "Inicio",
        "recycling": "Reciclaje",
        "energy_saving": "Ahorro de Energía",
        "water_conservation": "Conservación del Agua",
        "green_shopping": "Compras Ecológicas",
        "rights": "© 2024 Consejos Ecológicos. Todos los derechos reservados.",
        "cyclists_in_city": "Andar en bicicleta es una forma ecológica de moverse por la ciudad.",
        "electric_vehicle_charging": "Los vehículos eléctricos son el futuro del transporte ecológico.",
        "hybrid_bus": "Transporte público con bajas emisiones de CO2.",
        "carpooling": "Compartir coche reduce las emisiones.",
        "hybrid_car": "Los coches híbridos combinan los beneficios de los motores de combustión y los motores eléctricos.",
        "public_transport": "La expansión de las redes de transporte público reduce la contaminación del aire.",
        "shopping_title": "Compras Verdes",
        "shopping_text": "Elige productos que sean ecológicos y tengan un menor impacto ambiental. Aprende qué buscar al hacer tus compras.",
        "title_eco-transport": "Transporte Ecológico",
        "home": "Inicio",
        "recycling": "Reciclaje",
        "energy_saving": "Ahorro de Energía",
        "water_conservation": "Conservación del Agua",
        "eco_transport": "Eco-Transporte",
        "rights": "© 2024 Consejos Ecológicos. Todos los derechos reservados.",
        "eco_products": "Elija productos con certificación ecológica.",
        "reusable_bags": "Las bolsas reutilizables ayudan a reducir los desechos plásticos.",
        "eco_labels": "Aprenda a reconocer las certificaciones ecológicas en los productos.",
        "local_market_shopping": "Apoye a los productores locales comprando en mercados.",
        "organic_farming": "La agricultura ecológica apoya el desarrollo sostenible.",
        "local_market_support": "Comprar en mercados locales apoya a los productores locales.",
        "rights": "@ 2024 Consejos Ecológicos. Todos los derechos reservados."
    }
};


// Function to load articles from the corresponding JSON file based on the selected language
function loadArticles(language) {
    let filePath;

    // Assign the correct path based on the selected language
    switch(language) {
        case 'pl':
            filePath = 'translations/articles.json';
            break;
        case 'en':
            filePath = 'translations/articles-eng.json';
            break;
        case 'de':
            filePath = 'translations/articles-de.json';
            break;
        case 'es':
            filePath = 'translations/articles-es.json';
            break;
        default:
            filePath = 'translations/articles-eng.json'; // Default to English
    }

    // Load the JSON file
    fetch(filePath)
        .then(response => response.json())
        .then(data => {
            displayArticles(data.articles);
        })
        .catch(error => console.error('Error loading articles:', error));
}

// Function to display articles on the page
function displayArticles(articles) {
    const container = document.getElementById('articles-container');
    container.innerHTML = ''; // Clear existing content

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';

        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <a href="#">${article.moreContent}</a>
        `;

        container.appendChild(articleElement);
    });
}

    // Update the page title if it exists in the translation object
    document.addEventListener('DOMContentLoaded', function () {
        const page = document.body.getAttribute('data-page');
        const savedLanguage = getSavedLanguage();  // Pobierz zapisany język
        const data = translations[savedLanguage];  // Pobierz tłumaczenia dla danego języka
        
        console.log('Page:', page);  // Zobaczmy, czy page jest prawidłowy
        console.log('Saved Language:', savedLanguage);  // Czy zapisany język jest prawidłowy?
        console.log('Translations Data:', data);  // Czy mamy odpowiednie tłumaczenia?
        
        if (data && data[`title_${page}`]) {
            document.title = data[`title_${page}`];
            console.log("Tytuł zmieniony na:", data[`title_${page}`]);
        } else {
            console.error("Nie znaleziono tytułu dla wybranego języka.");
        }
    });

// Apply the saved language when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const page = document.body.getAttribute('data-page');
    const savedLanguage = getSavedLanguage();  // Pobierz zapisany język
    const data = translations[savedLanguage];  // Pobierz tłumaczenia dla danego języka

    if (data && data[`title_${page}`]) {
        document.title = data[`title_${page}`];  // Ustawia tytuł strony
        document.querySelector('title').textContent = data[`title_${page}`];  // Aktualizuje zawartość tagu <title>
    }

    changeLanguage(savedLanguage);

    // Dodaj event listenery dla specyficznych ikon językowych
    function addLangListener(id, lang) {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function () {
                setLanguage(lang);
            });
        } else {
            console.warn(`Element z ID "${id}" nie został znaleziony.`);
        }
    }

    // Dodaj listenery dla przełączania języków
    addLangListener('lang-pl', 'pl');
    addLangListener('lang-en', 'en');
    addLangListener('lang-de', 'de');
    addLangListener('lang-es', 'es');
});

