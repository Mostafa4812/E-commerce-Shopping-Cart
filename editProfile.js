let fName = document.getElementById('Fname');
let lName = document.getElementById('Lname');
let userEmail = document.getElementById('mail');

// let profileImg = document.getElementById('file-upload');
let EditProfileForm = document.getElementById('EditProfileForm');

// Retrieve stored data (handling null cases)
let firstNameLocal = localStorage.getItem('fname');
let lastNameLocal = localStorage.getItem('lname');
let emailLocal = localStorage.getItem('email');

// Events
let uploadedImage = ""; // متغير لتخزين الصورة بعد رفعها
// profileImg.addEventListener('change', uploadImage);
EditProfileForm.addEventListener('submit', EditProfile);

// filling fields
fName.value=firstNameLocal;
lName.value=lastNameLocal;
userEmail.value=emailLocal;
// profileImg.value=uploadedImage;
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

function EditProfile(e) {
    e.preventDefault();

    // Save input values directly as strings
    localStorage.setItem('fname', fName.value.trim());
    localStorage.setItem('lname', lName.value.trim());
    localStorage.setItem('email', userEmail.value.trim());
}


