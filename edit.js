import { employeesData } from "./data.js";

let searchbtn=document.getElementsByClassName("searchbtn")[0];
let SId= document.getElementById("searchvalue");
let Ebtn=document.getElementById("addCbtn");
let Eid= document.getElementById("EId");
let Ename=document.getElementById("EName");
let Edesignation=document.getElementById("EDesignation");
let Esalary=document.getElementById("ESalary");
let EinputImage= document.getElementById("EinputImage");
let EinputFile=document.getElementById("EinputFile");
let EImage;
searchbtn.addEventListener("click",()=>{
    let  interestedObject=employeesData.filter(o => o.id==SId.value);
    EImage=interestedObject[0].image;
    EinputImage.setAttribute("src",EImage);
    Eid.value=interestedObject[0].id;
    Ename.value=interestedObject[0].name;
    Edesignation.value=interestedObject[0].designation;
    Esalary.value=interestedObject[0].salary;
})
EinputFile.addEventListener("change",()=>{
    let imageReader = new FileReader();
    imageReader.readAsDataURL(EinputFile.files[0]);
    imageReader.addEventListener('load',()=>{
        EImage=imageReader.result;
        EinputImage.setAttribute('src',EImage);
    })
})
Ebtn.addEventListener("click",()=>{
    if (Eid.value==''){
        alert("fill the fiels")
    }
    else{

        let option=prompt("(Are you sure you want to edit y/n)")
        if(option=='y' || option=='Y'){
            
            let index = employeesData.findIndex(emp=> emp.id===Eid.value)
            employeesData[index]={
                image: EImage,
                id: Eid.value,
                name: Ename.value,
                designation: Edesignation.value,
                salary: Esalary.value
            }
            Eid.value='';
            Ename.value='';
            Edesignation.value='';
            Esalary.value='';
            console.log(employeesData[index]);
        }
        localStorage.setItem("employeesData",JSON.stringify(employeesData))
    }
})
let toggleBtn=document.getElementById('toggle');
toggleBtn.addEventListener("click",()=>{
    let display=document.getElementById("display")
    let nav=document.getElementById("nav");
    if(nav.style.display=='none'){
        nav.style.display='inline-block';
        toggleBtn.innerText='✖';
    }else{
        display.style.marginLeft='0';
        nav.style.display='none';
        toggleBtn.innerText='☰';
    }
})
