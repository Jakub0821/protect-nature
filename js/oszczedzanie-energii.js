document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona Oszczędzanie Energii załadowana');

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
        text.textContent = image.nextElementSibling.textContent + ' Dodatkowe informacje na temat oszczędzania energii...';
        
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
            {
                imgSrc: 'images/energooszczedne-urzadzenia.jpg',
                alt: 'Energooszczędne urządzenia',
                text: 'Energooszczędne urządzenia pomagają zmniejszyć zużycie energii.'
            },
            {
                imgSrc: 'images/ocieplenie-domu.jpg',
                alt: 'Ocieplenie domu',
                text: 'Ocieplenie domu może znacznie obniżyć koszty ogrzewania.'
            }
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
});
