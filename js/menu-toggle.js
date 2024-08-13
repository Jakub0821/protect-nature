document.addEventListener('DOMContentLoaded', function() {
    var tipsElement = document.querySelector('a[data-key="tips"]');
    if (tipsElement) {
        tipsElement.addEventListener('click', function(e) {
            e.preventDefault();
            var dropdownContent = tipsElement.nextElementSibling;
            if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'block';
                }
            }
        });
    }
});
