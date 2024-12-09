document.addEventListener('DOMContentLoaded', function() {
    var openModalLinks = document.querySelectorAll('.open-modal');
    var modals = document.querySelectorAll('.modal');
    var closeButtons = document.querySelectorAll('.close');

    openModalLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetModal = document.getElementById(this.getAttribute('data-target'));
            targetModal.style.display = 'block';
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.parentElement.parentElement.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});
