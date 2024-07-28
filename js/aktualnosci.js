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
