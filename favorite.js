let productDetails = document.querySelector('.product-details');
//
let createdProducts = JSON.parse(localStorage.getItem('createdProducts')) || [];
let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
let likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
//
let allProducts = [...storedProducts, ...createdProducts]; // Merge both arrays

// Filter only liked products
let favoriteProducts = allProducts.filter(product => likedProducts.includes(product.id))||[];
let noPrds=document.querySelector('.noProducts');
if(favoriteProducts.length===0 || !favoriteProducts){
    noPrds.innerHTML="like product to show details..."
}
// Render liked products dynamically
productDetails.innerHTML = ""; // Clear previous content

favoriteProducts.forEach(product => {
    productDetails.innerHTML += `
        <div class="product">
            <img class="product-img" src="${product.img}" alt="">
            <div class="productInfo">
                <h2 class="title">${product.name}</h2>
                <span class="price_size">Price: ${product.price_size} <b>$</b></span>
            </div>
        </div>
    `;
});

//
