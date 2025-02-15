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