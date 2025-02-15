// let productAdded=localStorage.getItem('productAdded');
// let products =JSON.parse(productAdded);
let prdCard=document.querySelector('.product-cards');

// if(productAdded){
//     drawProductsInCartUI(products);
// }

function drawProductsInCartUI(){
    let products=JSON.parse(localStorage.getItem('productAdded'))||[]
    //if no products
    let noPrds=document.querySelector('.noProducts');
    if(products.length===0 || !products){
        noPrds.innerHTML="There are No Products In Cart Now..."
    }
    //
    let renderedProducts=products.map((item)=>{
        return `
            <div class="product-card">
                <img class="product-img" src=${item.img} alt="iphone-image">
                <div class="product-details">
                    <h2 class="title">${item.name}</h2>
                    <p class="info"><span>Specs:</span>${item.specs}</p>
                    <span class="size-price"><span>Price: $</span>${item.price_size}</span>
                    <span class="product-actions">
                        <button class="add-cart" onclick="removePrdFromCart(${item.id})"><i class="fa-sharp fa-solid fa-cart-plus"></i> Remove from cart</button>
                    </span>
                    <span>Quantity: ${item.qyt}</span>
                </div>
            </div>
                    `
                })
                prdCard.innerHTML=renderedProducts;
            }
            drawProductsInCartUI();


            
//remove item in cart
function removePrdFromCart(id){
    let productAdded=localStorage.getItem('productAdded');

    if(productAdded){
        let items=JSON.parse(productAdded);
        let filteredItems=items.filter((item)=>item.id!==id);
        localStorage.setItem('productAdded',JSON.stringify(filteredItems))
        drawProductsInCartUI(filteredItems)
    }
}


//
let counter=document.querySelector('.counter');
let draft=document.querySelector('.view_products_draft p');
//to add on array to not be empty at every time
let addedItems=localStorage.getItem('productAdded')?JSON.parse(localStorage.getItem('productAdded')):[];
//to be stateful items in draft after refresh
if(addedItems){
    addedItems.map(function(item){
        draft.innerHTML+=item.name+'<br>'+'<hr>'
    })
    // counter.innerHTML+=addedItems.length
}
