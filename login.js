let form =document.getElementById("loginForm");
let loginbtn=document.getElementsByClassName("login-btn")[0];
let username=document.getElementById("username");
let password=document.getElementById("password");
let adminData={
    username: "Admin",
    password: "admin@123"
}
let error="Incorrect";
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(username.value===adminData.username && password.value===adminData.password){
        localStorage.setItem("IsLoggedIn","true")
        window.location.href= "./home.html"
    }
    if(username.value!==adminData.username){
        let userError=document.getElementById("us-error");
        userError.innerText=error
    }
    if(password.value!==adminData.password){
        let pswError=document.getElementById("psw-error")
    
        pswError.innerText=error
    }
    if(username.value=='' || password.value==''){
        alert("Enter username and password")
    }

})
