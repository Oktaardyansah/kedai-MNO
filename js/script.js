// ketika hamburger menu diklik
const hamburger = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');
hamburger.addEventListener('click', (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
});

// ketika form search form diklik
const searchForm = document.querySelector('.search-form');
const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
});

// Ketika shopping cart diklil
const shoppingBtn = document.getElementById('shoping-cart-btn');
const shoping = document.querySelector('.shopping-cart');
shoppingBtn.addEventListener('click', (e) => {
    shoping.classList.toggle('active');
    e.preventDefault();
});

// klik diluar sidebar untuk menghilangkan

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!shoppingBtn.contains(e.target) && !shoping.contains(e.target)) {
        shoping.classList.remove('active');
    }
});

// modal Box
const modalBox = document.querySelector('#item-detail-modal');
const modalBtn = document.querySelectorAll('.item-detail-btn');
modalBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        modalBox.style.display = 'flex';
        e.preventDefault(); 
    });
});



document.querySelector('.close-icon').addEventListener('click', (e) => {
    modalBox.style.display = 'none';
    e.preventDefault();
});

window.addEventListener('click', (e) => {
    if(e.target == modalBox) {
        modalBox.style.display = 'none'
    }
})






