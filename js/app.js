document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, nama: 'Robusta Brazil', img: '1.jpg', price: 20000},
            { id: 2, nama: 'Robusta', img: '2.jpg', price: 25000},
            { id: 3, nama: 'Brazil', img: '3.jpg', price: 30000}
        ]
    }));

    Alpine.store('cart', {
        items: [],
        quantity: 0,
        total: 0,
        add(newItem) {
            // Cek apakah ada brng sama di cart
            const cartItem = this.items.find(item => item.id === newItem.id);

            if(!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
            }else {
                // Jika barang sudah ada, cek apakah barang sama dengan yang sudah ada
                this.items = this.items.map(item => {
                    // Jika barang berbeda
                    if(item.id !== newItem.id) {
                        return item;
                    }else {
                        // Jika barang sama 
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })
            }
        },
        remove(id) {
            // Ambil item yang mau diremove 
            const cartItem = this.items.find(item => item.id === id)

            // Jika barang lebih dari satu
            if(cartItem.quantity > 1) {
                // Telusuri 1 1
                this.items = this.items.map(item => {
                    // Jika bukan barang yang diklik
                    if(item.id !== id) {
                        return item
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1){
                // jika barangnya sisa 1
                this.items = this.items.filter(item => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price
            }
        }
    });
});

// Form Validation
// const checkoutBtn = document.querySelector('.checkout-btn');
// checkoutBtn.disabled = true;

// const form = document.querySelector('#checkoutForm');

// Konversi currnecy

const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}