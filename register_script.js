let fname=document.querySelector('.fname');
let lname=document.querySelector('.lname');
let mail=document.querySelector('.email');
let password=document.querySelector('.pass');
let confirmPassword=document.querySelector('.cpass');
let register=document.querySelector('.create');

register.addEventListener('click',function(){
    if(fname.value===''||lname.value===''||mail===''||password===''||confirmPassword===''){
        alert("Please fill the data if want to create new account...")
    }else{
        window.localStorage.setItem('fname',fname.value);
        window.localStorage.setItem('lname',lname.value);
        window.localStorage.setItem('email',mail.value);
        if(password.value===confirmPassword.value){
            window.localStorage.setItem('password',password.value);
        }else{
            alert("passwords not matched");
        }
        setTimeout(()=>{window.location='login.html'},1500)
    }
})