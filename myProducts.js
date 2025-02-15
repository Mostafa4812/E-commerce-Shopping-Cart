let createdProducts =JSON.parse(localStorage.getItem('createdProducts'))
// console.log(createdProducts);


let prdCard= document.getElementById('createdPrds');
let drawProductsUI=function (createdProducts){
    
    let renderedProducts=createdProducts.map((item)=>{
        return `
                <div class="product-card" style="${item.isMe === 'y' ? 'border: 2px solid green;' : ''}">
                <img class="product-img" src=${item.img} alt="iphone-image">
                <div class="product-details">
                    <a href='cartDetails.html' onclick='getPrdID(${item.id})' class="title">${item.name}</a>
                    <p class="info"><span>Specs:</span>${item.specs}</p>
                    <span class="size-price"><span>Price: $</span>${item.price_size}</span>
                    <span class="product-actions">
                    ${item.isMe==='y'?`<button class="deleteProduct" onclick="deleteProduct(${item.id})"><i class="fa-solid fa-ban"></i></button>`:''}
                    ${item.isMe === 'y' ? `<button class="editProduct" onclick="editProduct(${item.id})"><i class="fa-solid fa-pen-to-square"></i></button>` : ''}
                    ${item.isMe ==='n'? `<button class="add-cart" onclick="addPrdToCart(${item.id})"><i class="fa-sharp fa-solid fa-cart-plus"></i></button>`:''}
                        </span>
                        </div>
                        </div>
                        
                        `
                        //due to , issue that appear after card product in home page
                    }).join("<br>")
                    prdCard.innerHTML=renderedProducts;
                    
}
                        // <i class="favorite fa-solid fa-heart" '></i>
        // console.log(products);
        
    
            drawProductsUI(JSON.parse(localStorage.getItem('createdProducts')));

//------------------------------- Edit and delete added products -------------------------


function editProduct(id){
    window.location=('editProduct.html')
    localStorage.setItem('editPrdID',id);

}
//
function deleteProduct(id){
    let storedPrds=JSON.parse(localStorage.getItem('createdProducts'))||[]
    let rest=storedPrds.filter((p)=>p.id !== id)
    localStorage.setItem('createdProducts', JSON.stringify(rest));
    drawProductsUI(rest)
    
}