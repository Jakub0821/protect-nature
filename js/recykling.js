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
