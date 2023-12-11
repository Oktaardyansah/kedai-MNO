document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, nama: 'Robusta Brazil', img: '1.jpg', price: 20000},
            { id: 1, nama: 'Robusta', img: '2.jpg', price: 25000},
            { id: 1, nama: 'Brazil', img: '3.jpg', price: 30000}
        ]
    }));
});