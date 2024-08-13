// menu-toggle.js
document.getElementById('tips').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('ecology-submenu').classList.toggle('hidden');
});