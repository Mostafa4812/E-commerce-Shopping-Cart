let _links=document.querySelector('.links')
let user_info=document.querySelector('.user-info')
let user_name=document.querySelector('.user_name')

let userLocal=window.localStorage.getItem('fname')

if(userLocal){
    _links.remove();
    user_info.style.display='flex';
    user_name.innerHTML=userLocal;
}

let logout=document.querySelector('.logout');

logout.addEventListener('click',()=>{
    window.location='index.html'
    window.localStorage.clear();
})

// products================================================================

//to put data in local storage make to me problem due to in each time add to local storage the same 4 products only regardless the new created products 
// let productDB=localStorage.setItem('products',JSON.stringify(products))


//DB in file============

//======================
let createdProducts = JSON.parse(localStorage.getItem('createdProducts')) || [];
let storedProducts = JSON.parse(localStorage.getItem('products')) || [];

let prdCard=document.querySelector('.product-cards');
let drawProductsUI=function (allProducts){
    
    let renderedProducts=allProducts.map((item)=>{
        return `
                <div class="product-card" style="${item.isMe === 'y' ? 'border: 2px solid green;' : ''}">
                <img class="product-img" src=${item.img} alt="iphone-image">
                <div class="product-details">
                    <a href='cartDetails.html' onclick='getPrdID(${item.id})' class="title">${item.name}</a>
                    <p class="info"><span>Specs:</span>${item.specs}</p>
                    <span class="size-price"><span>Price: $</span>${item.price_size}</span>
                    <span class="product-actions">
                    ${item.isMe === 'y'||item.isMe ==='n'? `<button class="add-cart" onclick="addPrdToCart(${item.id})"><i class="fa-sharp fa-solid fa-cart-plus"></i></button>`:''}
                        <i class="favorite fa-solid fa-heart" onclick='favoriteProduct(${item.id},event)'}"></i>
                        </span>
                        </div>
                        </div>
                        
                        `
                        //due to , issue that appear after card product in home page
                    }).join("<br>")
                    prdCard.innerHTML=renderedProducts;
                    
}
let allProducts = [...storedProducts, ...createdProducts]; // Merge both arrays
drawProductsUI(allProducts);


//set prd id
function getPrdID(id){
    // console.log(id);
    localStorage.setItem('prdID',JSON.stringify(id))
}
// function setLikedAtrr(l){
//     localStorage.setItem('liked',JSON.stringify(l))
//     console.log(l);
// }
// Cart and Add to Cart==============================================================
let cart_page=document.querySelector('.cart_page');
let counter=document.querySelector('.counter');
let draft=document.querySelector('.view_products_draft p');
//to add on array to not be empty at every time
let addedItems=localStorage.getItem('productAdded')?JSON.parse(localStorage.getItem('productAdded')):[];
//to be stateful items in draft after refresh
if(addedItems.length){
    addedItems.forEach(function(item){
        draft.innerHTML += `${item.name} [${item.qyt}]<br><hr>`;
    })
    counter.innerHTML=addedItems.length
}
function addPrdToCart(id){
    // let products = JSON.parse(localStorage.getItem("products")) || [];
    let allProducts = [...storedProducts, ...createdProducts]; // Merge both arrays

    // console.log("Loaded Products:", products); // Debugging
    // if logged in
    if(userLocal){
        let choosenPrd=allProducts.find((item)=>item.id===id);
        //I want to add quantity and not repeat products in draft
        if (!choosenPrd) {
            console.error("Product not found!", id);
            return;
        }
        let item=addedItems.find((i)=>i.id===choosenPrd.id)
        if(item){
            item.qyt+=1;
        }else{
            // ??
            choosenPrd.qyt = 1;
            addedItems.push(choosenPrd)
        }
        localStorage.setItem('productAdded',JSON.stringify(addedItems))

        draft.innerHTML=''
        addedItems.forEach(function(item){
            draft.innerHTML+=item.name+' '+`[${item.qyt}]`+'<br>'+'<hr>'
        })
        // addedItems=[...addedItems,choosenPrd]
        // console.log("ok");
        //counter
        counter.innerHTML = addedItems.length;
        // console.log("Added");
        if(addedItems.length > 0){
            let mainDraft=document.querySelector('.view_products_draft');
            mainDraft.style.display='block'
        }
        //
    }else{
        setTimeout(()=>{
        window.location.assign('login.html')
    },500)}
}


//view products in draft ==========================
let cardSign=document.querySelector('.cart-sign').addEventListener('click',view_items)
let mainDraft=document.querySelector('.view_products_draft');
function view_items(){
    if(mainDraft.style.display=='block'){
        mainDraft.style.display='none'
    }else{
        mainDraft.style.display='block'
    }
}
let viewPrdsInCart=document.querySelector('.btn_cart').addEventListener('click',function(){
    window.location='cart.html';
});
//



//search for products by name====================================================
let inp=document.getElementById('search')
inp.addEventListener('keyup',function (e){
    
        search(e.target.value,JSON.parse(localStorage.getItem('products')))
    
})

function search(name,products){
    let searchedProduct=products.filter(function(item){
        //same meaning----------
        // return item.name.trim().toLowerCase().includes( name.trim().toLowerCase());
        return item.name.trim().toLowerCase().indexOf( name.trim().toLowerCase())!==-1;
    });
    // Clear the previous products and display new search results
    prdCard.innerHTML = '';
    if(searchedProduct.length>0){
        drawProductsUI(searchedProduct)
    }else{
        prdCard.innerHTML = `<p>No products found matching "${name}"</p>`;
    }
}

// search('Smart Watch',JSON.parse(localStorage.getItem('products')))


//favoriteIcon
let favIcon=document.querySelector('.fa-star');
favIcon.addEventListener('click',function(e){
    e.preventDefault();
    window.location='favorite.html'
})
//=======

// function favoriteProduct(productId, event) {
//     let likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || {};
    
//     // Toggle liked state
//     likedProducts[productId] = !likedProducts[productId];
//     localStorage.setItem('likedProducts', JSON.stringify(likedProducts));

//     // Change icon color
//     event.target.style.color = likedProducts[productId] ? 'red' : 'black';
// }



// function preserveStateColorIcone() {
//     let likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || {};

//     let icon = document.querySelectorAll(`.favorite`);
//     icon.forEach(()=> {
//         if (likedProducts.liked==true) {
//             icon.style.color = 'red';
//         }
//     });
// }
// preserveStateColorIcone();
// //
// document.addEventListener('DOMContentLoaded', () => {
//     let likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || {};
//     document.querySelectorAll('.favorite').forEach(icon => {
//         let productId = icon.getAttribute('onclick').match(/\d+/)[0]; // Extract product ID
//         if (likedProducts[productId]) {
//             icon.style.color = 'red';
//         }
//     });
// });
//another
// function preserveStateColorIcone() {
//     let icon = document.querySelector('.favorite');
//     let likedPrds = JSON.parse(localStorage.getItem('likedProducts'));
//     likedPrds.forEach(function(item){
//         if (item.liked==true) {
//             icon.style.color = 'red'; 
//         } else {
//             icon.style.color = 'black'; 
//         }
//     })
// }
// preserveStateColorIcone();
// // Function to toggle the 'liked' state for a product

function favoriteProduct(productId, event) {
    let likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
    if (likedProducts.includes(productId)) {
        likedProducts = likedProducts.filter(id => id !== productId); // Remove if already liked        
        event.target.style.color = 'black';
    } else {
        likedProducts.push(productId); // Add new liked product
        event.target.style.color = 'red';
    }
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
}

// Restore liked icons when the page loads
function restoreFavoriteIcons() {
    let likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];

    document.querySelectorAll('.favorite').forEach(icon => {
        let productId = parseInt(icon.getAttribute('onclick').match(/\d+/)[0]); // Extract product ID
        if (likedProducts.includes(productId)) {
            icon.style.color = 'red'; // Set color for liked products
        }
    });
}

restoreFavoriteIcons();



//filter By Price--------------------

let filterList = document.querySelector('.clickableList');
let list = document.querySelector('.list');

filterList.addEventListener('click', openCloseList);

function openCloseList() {
    list.style.display = (list.style.display === "none" || list.style.display === "") ? "block" : "none";
}
//-----------
document.querySelectorAll('.inp').forEach((checkbox) => {
    checkbox.addEventListener('change', function(e) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        let filteredProducts;
        let checkedBox = document.querySelector('.inp:checked');

        if(!checkedBox){
            filteredProducts=products;
        }else{
            let val = parseInt(e.target.value); 
            if (val === 400) {
                filteredProducts = products.filter(product => parseFloat(product.price_size) < 400);
            } else if (val === 1000) {
                filteredProducts = products.filter(product => {
                    let price = parseFloat(product.price_size);
                    return price >= 400 && price <= 1000;
                });
            } else if (val === 2000) {
                filteredProducts = products.filter(product => parseFloat(product.price_size) > 2000);
            }
        }
        drawProductsUI(filteredProducts); 
    });
});

