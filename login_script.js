let _links=document.querySelector('.links')
let user_info=document.querySelector('.user-info')
let user_name=document.querySelector('.user_name')
let login_btn=document.querySelector('.btn')

let useName=document.querySelector('.user');
let pass=document.querySelector('.pass');

let userLocal=window.localStorage.getItem('fname')
let passLocal=window.localStorage.getItem('password')

login_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if((useName.value===userLocal)&&(pass.value===passLocal)){
        window.location='index.html'
        
    }else if((useName.value !== userLocal)||(pass.value !==passLocal)) {
        alert('username or password is incorrect !!');
    }
    else{
        window.location.reload();
    }
})
