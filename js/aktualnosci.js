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

    let articlesLoaded = false; // Flaga, aby zapobiec wielokrotnemu ładowaniu artykułów

    // Funkcja do dynamicznego ładowania dodatkowych artykułów
    function loadMoreArticles() {
        if (articlesLoaded) return; // Sprawdzanie czy artykuły zostały już załadowane
        articlesLoaded = true; // Ustawienie flagi na true po załadowaniu artykułów

        const moreArticles = [
            {
                title: "Kampania na rzecz zalesiania miast",
                content: "Dowiedz się więcej o naszych inicjatywach zalesiania miast.",
                category: "Inicjatywy"
            },
            {
                title: "Nowe technologie w recyklingu",
                content: "Poznaj nowe technologie, które pomagają w recyklingu odpadów.",
                category: "Technologie"
            }
        ];

        const container = document.querySelector('.news');
        moreArticles.forEach(article => {
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
            moreContent.innerHTML = '<p>Dodatkowe informacje...</p>';

            articleElement.appendChild(title);
            articleElement.appendChild(content);
            articleElement.appendChild(button);
            articleElement.appendChild(moreContent);

            container.appendChild(articleElement);
        });
    }

    // Funkcja filtrowania artykułów
    function filterArticles(category) {
        const articles = document.querySelectorAll('.news-item');
        articles.forEach(article => {
            if (category === 'Wszystkie' || article.dataset.category === category) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    // Dodanie event listenerów do przycisków filtrujących
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            filterArticles(category);
        });
    });

    // Dodanie funkcji "Wczytaj więcej"
    const loadMoreBtn = document.getElementById('load-more');
    loadMoreBtn.addEventListener('click', loadMoreArticles);
});
