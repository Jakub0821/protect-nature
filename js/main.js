document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', changeLanguage);
    // Wczytaj domyślny język
    loadTranslations('pl');
});

async function loadTranslations(language) {
    try {
        const response = await fetch(`translations/${language}.json`);
        const translations = await response.json();
        applyTranslations(translations);
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function applyTranslations(translations) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[key] || element.textContent;
    });
}

function changeLanguage() {
    const selectedLanguage = document.getElementById('language-select').value;
    loadTranslations(selectedLanguage);
}
