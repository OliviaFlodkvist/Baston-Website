const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Event listener to toggle the mobile menu
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active'); // Toggle the 'is-active' class on the menu icon
    menuLinks.classList.toggle('active'); // Toggle the 'active' class on the menu links container
});
