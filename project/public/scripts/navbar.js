let menuOpen = false;
let searchOpen = false;
document.querySelector('.lg:hidden.block').addEventListener('click', function () {
    searchOpen = !searchOpen;
    document.getElementById('searchBar').style.display = searchOpen ? 'block' : 'none';
});