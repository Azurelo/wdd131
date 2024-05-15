const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
    const navigationLinks = document.querySelectorAll('.navigation a');

    navigationLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            
            navigationLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            
            link.classList.add('active');

            const mainTitle = document.querySelector('main h2');
            mainTitle.textContent = link.getAttribute('title');
        });
    });
});