document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona Recykling załadowana');

    // Function to toggle the navigation menu (hamburger menu)
    function toggleMenu() {
        console.log("Hamburger clicked");
        var nav = document.getElementById("desktop-nav");
        if (nav) {
            nav.classList.toggle("show");
            console.log("Nav element toggled:", nav);
        } else {
            console.log("Nav element not found");
        }
    }

    // Assigning the toggleMenu function to the hamburger menu click event
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    } else {
        console.log("Hamburger element not found");
    }

    // Funkcja do wyświetlania popupu dla obrazka
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

    // Przypisanie zdarzeń kliknięcia dla obrazków, które wywołują funkcję showPopup
    const images = document.querySelectorAll('.image-item img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            console.log('Kliknięto obrazek:', this.src);
            showPopup(this);
        });
    });

    

});
