 // Toggle search bar
 document.getElementById('search-toggle').addEventListener('click', function() {
    var searchBar = document.getElementById('search-bar');
    if (searchBar.classList.contains('hidden')) {
        searchBar.classList.remove('hidden');
    } else {
        searchBar.classList.add('hidden');
    }
});

// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});