import { employeesData } from "./data.js";
if (localStorage.getItem("IsLoggedIn") !== "true") {
    window.location.href = "index.html";
}
let addbtn = document.querySelector("#addbtn");
let id=document.getElementsByClassName("id")[0];
console.log(id)
let name=document.getElementById("name");
let designation=document.getElementById("designation");
let salary=document.getElementById("salary");

generateId();

let toggleBtn=document.getElementById('toggle');
toggleBtn.addEventListener("click",()=>{
    let display=document.getElementById("display")
    let nav=document.getElementById("nav");
    if(nav.style.display=='none'){
        nav.style.display='inline-block';
        toggleBtn.innerText='✖';
    }
    else{
        display.style.marginLeft='0';
        nav.style.display='none';
        toggleBtn.innerText='☰';
    }
})
let imageFile=document.getElementById("inputFile");
let image=document.getElementById("inputImage");
let url;
imageFile.addEventListener('change',()=>{
    let reader= new FileReader();
    reader.readAsDataURL(imageFile.files[0]);
    reader.addEventListener("load",()=>{
        url=reader.result;
        image.setAttribute("src",url)
    })
})


addbtn.addEventListener("click",()=>{
    addtoEmployee();
})

function generateId(){
  console.log('generating id')
  id.value =1000+employeesData.length+1;
}
function addtoEmployee(){
    if(id.value && name.value && designation.value && salary.value){
        let matchingId=employeesData.find(emp=> emp.id==id.value)
        if(matchingId){
            alert("Employee with the same Id already exist")
        }
        else{
            let dataObject={
                image: url,
                id: id.value,
                name: name.value,
                designation: designation.value,
                salary: salary.value
            }
            employeesData.push(dataObject)
            console.log(dataObject)
            localStorage.setItem("employeesData",JSON.stringify(employeesData))
        }
    }
    else{
        alert("fill the areas")
    }
    id.value='';
    name.value='';
    designation.value='';
    salary.value='';
    image.setAttribute("src","./default image.jpg");
    generateId();
}
