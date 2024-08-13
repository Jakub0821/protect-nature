document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tips').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('ecology-submenu').classList.toggle('hidden');
    });
});