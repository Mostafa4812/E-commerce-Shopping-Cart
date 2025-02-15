//from Localstorage
let getUserName1=localStorage.getItem('fname');
let getUserName2=localStorage.getItem('lname');
let getEmail=localStorage.getItem('email');
let productLength;

//variables
let userUI=document.getElementById('user');
let emailUI=document.getElementById('mail');
let productLengthUI=document.getElementById('productLength');


userUI.innerHTML= getUserName1 +' '+getUserName2;
emailUI.innerHTML=getEmail;