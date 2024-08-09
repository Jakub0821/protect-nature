/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',    // Dopasowuje wszystkie pliki HTML w głównym katalogu oraz w podkatalogach
    './js/**/*.js',   // Dopasowuje wszystkie pliki JS w katalogu 'js' oraz jego podkatalogach
    './css/**/*.css', // Dopasowuje wszystkie pliki CSS w katalogu 'css' oraz jego podkatalogach
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',  // Zielony kolor używany w nagłówkach i przyciskach
        secondary: '#333333',  // Ciemnoszary kolor używany w nawigacji
        accent: '#FFFFFF',    // Biały kolor używany w tekście nagłówków i nawigacji
        dark: '#000000',      // Czarny kolor, który może być używany w stopce
        light: '#f4f4f4',     // Jasnoszary kolor tła używany na stronie
      },
    },
  },
  plugins: [],
}
