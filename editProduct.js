let productName = document.getElementById('Pname');
let productDesc = document.getElementById('Pdesc');
let productPrice = document.getElementById('Pprice');
let productImg = document.getElementById('file-upload');
let updateForm = document.getElementById('updateForm');
let uploadedImage // متغير لتخزين الصورة بعد رفعها
//
let createdProducts = JSON.parse(localStorage.getItem('createdProducts')) || [];
// let storedProducts = JSON.parse(localStorage.getItem('products')) || [];

// let allProducts = [...storedProducts, ...createdProducts]; // Merge both arrays
//
let editPrdID=JSON.parse(localStorage.getItem('editPrdID'));
// let products=JSON.parse(localStorage.getItem('products'));
let selectedPrd= createdProducts.find((prd)=>prd.id===editPrdID);

productName.value=selectedPrd.name;
productDesc.value=selectedPrd.specs;
productPrice.value=selectedPrd.price_size;
selectedPrd.img = uploadedImage;
// Events
productPrice.addEventListener('change', getProductPrice);
productImg.addEventListener('change', uploadImage);
updateForm.addEventListener('submit', editProductFunc);

function getProductPrice(event) {
    productPrice.value = event.target.value;
}

function editProductFunc(e) {
    e.preventDefault();

    selectedPrd.name = productName.value.charAt(0).toUpperCase() + productName.value.slice(1).toLowerCase();
    selectedPrd.specs = productDesc.value;
    selectedPrd.price_size = productPrice.value.trim();
    selectedPrd.img = uploadedImage;
    
    if(selectedPrd.name===productName.value && selectedPrd.price_size===productPrice.value && selectedPrd.specs === productDesc.value) {
        alert("Error: A product with the same data already exists.");
        return;
    }else{
        alert("Product updated successfully!");
        localStorage.setItem('createdProducts', JSON.stringify(createdProducts));
    }
}
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


