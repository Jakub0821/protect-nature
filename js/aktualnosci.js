document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona Aktualności załadowana');

    // Funkcja do pokazywania i ukrywania dodatkowej treści
    function showMore(button) {
        const moreContent = button.nextElementSibling;
        if (moreContent.style.display === "block") {
            moreContent.style.display = "none";
            button.textContent = "Czytaj więcej";
        } else {
            moreContent.style.display = "block";
            button.textContent = "Czytaj mniej";
        }
    }

    // Przypisanie funkcji showMore do przycisków
    const buttons = document.querySelectorAll('.news-item button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            showMore(this);
        });
    });

    // Funkcja do ładowania artykułów z zewnętrznego pliku JSON
    function loadArticlesFromJson() {
        fetch('translations/articles.json')  // Upewnij się, że plik JSON jest w odpowiednim katalogu
            .then(response => response.json())
            .then(data => {
                const container = document.querySelector('.news');
                data.articles.forEach(article => {
                    const articleElement = document.createElement('article');
                    articleElement.classList.add('news-item');
                    articleElement.dataset.category = article.category;

                    const title = document.createElement('h2');
                    title.textContent = article.title;

                    const content = document.createElement('p');
                    content.textContent = article.content;

                    const button = document.createElement('button');
                    button.textContent = 'Czytaj więcej';
                    button.addEventListener('click', function() {
                        showMore(this);
                    });

                    const moreContent = document.createElement('div');
                    moreContent.classList.add('more-content');
                    moreContent.style.display = 'none';
                    moreContent.innerHTML = `<p>${article.moreContent}</p>`;

                    articleElement.appendChild(title);
                    articleElement.appendChild(content);
                    articleElement.appendChild(button);
                    articleElement.appendChild(moreContent);

                    container.appendChild(articleElement);
                });
            })
            .catch(error => console.error('Error loading articles:', error));
    }

    // Dodanie funkcji "Wczytaj więcej"
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadArticlesFromJson);
    } else {
        console.error('Przycisk "Wczytaj więcej" nie został znaleziony.');
    }

    // Opcjonalnie: Automatyczne ładowanie artykułów z pliku JSON na starcie
    loadArticlesFromJson();
});
