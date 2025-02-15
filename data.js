let products = [
    {
        id: 1,
        img: 'images/iphone.jpg',
        name: "Iphone 13 pro",
        specs: "storage 128GB 8RAM Amoled screen ios Os new device from trade-line",
        price_size: '650',
        qyt: 1,
        isMe:'n'

    },
    {
        id: 2,
        img: 'images/watch.jpg',
        name: "Smart Watch ",
        specs: "Apple watch HK10pro max Amoled screen ios Os new device from trade-line",
        price_size: '450',
        qyt: 1,
        isMe:'n'

    },
    {
        id: 3,
        img: 'images/lap.jpg',
        name: "Mac air 22",
        specs: "Apple Mac storage 3GTB 16RAM Amoled screen 16GB VGA new device from trade-line",
        price_size: '950',
        qyt: 1,
        isMe:'n'

    },
    {
        id: 4,
        img: 'images/headphone.jpg',
        name: "VIDVIE Headphone",
        specs: "Battery 3hr bluetooth 9m multi-functionality noise cancellation leather is natural",
        price_size: '750',
        qyt: 1,
        isMe:'n'

    }
];

let storedProducts1 = JSON.parse(localStorage.getItem('products')) || products;
// let storedProducts2 = JSON.parse(localStorage.getItem('createdProducts')) || products;
//get then set not set directly
localStorage.setItem('products', JSON.stringify(storedProducts1));
// localStorage.setItem('createdProducts', JSON.stringify(storedProducts2));