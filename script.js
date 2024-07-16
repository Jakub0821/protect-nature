document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formularz został wysłany!');
});

function changeText() {
    document.getElementById('welcomeText').innerText = 'Dziękujemy za odwiedzenie naszej strony!';
}

function toggleInfo() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
}
