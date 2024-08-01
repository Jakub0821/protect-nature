document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    loadLanguage(selectedLanguage);
});

function loadLanguage(language) {
    fetch(`translations/${language}.json`)
        .then(response => response.json())
        .then(data => {
            applyTranslations(data);
        })
        .catch(error => {
            console.error('Error loading translations:', error);
        });
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

// Load default language (Polish)
document.addEventListener('DOMContentLoaded', () => {
    loadLanguage('pl');
});
