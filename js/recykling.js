document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona Recykling załadowana');

    function showPopup(image) {
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
            showPopup(this);
        });
    });

    function loadMoreInfo() {
        const moreInfo = [
            {
                imgSrc: 'images/recycling-paper.jpg',
                alt: 'Recykling papieru',
                text: 'Recykling papieru pomaga zmniejszyć wycinkę lasów.'
            },
            {
                imgSrc: 'images/recycling-plastic.jpg',
                alt: 'Recykling plastiku',
                text: 'Recykling plastiku zmniejsza zanieczyszczenie oceanów.'
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

    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.textContent = 'Więcej informacji';
    loadMoreBtn.addEventListener('click', loadMoreInfo);
    document.body.appendChild(loadMoreBtn);
});
