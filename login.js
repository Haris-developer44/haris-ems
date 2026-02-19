let form =document.getElementById("loginForm");
let loginbtn=document.getElementsByClassName("login-btn")[0];
let username=document.getElementById("username");
let password=document.getElementById("password");
let adminData={
    username: "Admin",
    password: "admin@123"
}
let error="Incorrect";
console.log("admin@123"===adminData.password)
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(username.value===adminData.username && password.value===adminData.password){
        window.location.href= "./home.html"
    }
    else if(username.value!==adminData.username){
        let userError=document.getElementById("us-error");

        userError.innerText=error
    }
    else if(password!==adminData.password){
        let pswError=document.getElementById("psw-error")
    
        pswError.innerText=error
    }
    else{
        alert("Enter correct username and password")
    }
})