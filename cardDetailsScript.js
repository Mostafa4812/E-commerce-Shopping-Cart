let productDetails=document.querySelector('.product-details');
let prdID=JSON.parse(localStorage.getItem('prdID'))
let products=JSON.parse(localStorage.getItem('products'))//from DB or LS



    let renderedProduct=products.find((item)=>item.id===prdID)

    productDetails.innerHTML=`
    <img src="${renderedProduct.img}" alt="">
        <div class="productInfo">
            <h2 class="title">${renderedProduct.name}</h2>
            <span class="price_size">Size: ${renderedProduct.price_size}</span>
        </div>
`