let productName = document.getElementById('Pname');
let productDesc = document.getElementById('Pdesc');
let productPrice = document.getElementById('Pprice');
let productImg = document.getElementById('file-upload');
let createForm = document.getElementById('createForm');


// Events
productPrice.addEventListener('change', getProductPrice);
productImg.addEventListener('change', uploadImage);
createForm.addEventListener('submit', createProductFunc);

// Functions
function getProductPrice(event) {
    productPrice.value = event.target.value;  
}
//
let uploadedImage = ""; // متغير لتخزين الصورة بعد رفعها

function uploadImage(event) {
    let file = event.target.files[0]; // الحصول على الملف المختار

    let types=["image/jpeg","image/jpg","image/png"];
    let maxSize=2*1024*1024;//2MB


    if (file&&types.includes(file.type)&&file.size<=maxSize) {
        let reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage  = e.target.result; // تحويل الصورة إلى Base64
        };
        reader.readAsDataURL(file); // قراءة الملف وتحويله إلى Base64
    }else{
        alert('max size 2MB and type (jpg,jpeg,png)')
    }
}

function createProductFunc(e) {
    e.preventDefault();
    // let allProducts=[];
    
    let allProducts = JSON.parse(localStorage.getItem('createdProducts')) || [];
    let products = JSON.parse(localStorage.getItem('products'))
    let imgValue = uploadedImage;
    let nameValue = productName.value;
    nameValue = nameValue.charAt(0).toUpperCase()+nameValue.slice(1).toLowerCase();//to make first char capital
    let descValue = productDesc.value;
    let priceValue = productPrice.value;

    let obj = {
        id: products? products.length+1 : 1,
        img: imgValue,
        name: nameValue,
        specs: descValue,
        price_size: priceValue,
        qyt: 1,
        isMe:'y'
    };
    //restriction when add product
    let same=allProducts.find((prd)=>((prd.name.toLowerCase()===obj.name.toLowerCase())&&(prd.specs.toLowerCase()===obj.specs.toLowerCase())))
    if(obj.name&&obj.specs&&obj.img){
        if(same){
            alert("Error the added product has already exist")
        }else{
            allProducts.push(obj);
                localStorage.setItem('createdProducts', JSON.stringify(allProducts)); 
                
                setTimeout(() => {
                    window.location = 'myProducts.html';
                }, 500);
            }
    }else{
        alert("Enter Data to Create Product...")
    }
}


