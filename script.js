import { employeesData } from "./data.js";
loadData()
let searchbtn=document.getElementsByClassName("searchbtn")[0];
searchbtn.addEventListener('click',()=>{
    let searchName=document.getElementById("search").value;
    let name=searchName.trim();
    search(name);
})
let printbtn=document.getElementById("print");
let card=document.getElementsByClassName('employee-card')[0];


let togglebtn=document.getElementById('toggle');
togglebtn.addEventListener("click",()=>{
    let display=document.getElementById("display")
    let nav=document.getElementById("nav");
    if(nav.style.display=='none'){
        nav.style.display='inline-block';
        togglebtn.innerText='✖';
    }else{
        display.style.marginLeft='0';
        nav.style.display='none';
        togglebtn.innerText='☰';
    }
})


document.querySelectorAll(".print").forEach(button =>{
    button.addEventListener("click",()=>{
        let index=button.dataset.index;
        generateCard(index);
    })
})



function generateCard(index){
    let cardObject = employeesData[index];
    let html = `
        <div class="header-accent"><button id="disappear">X</button></div>
        <img src="${cardObject.image}" alt="Employee Photo" class="profile-img">
        <h2>${cardObject.name}</h2>
        <p class="title">Senior ${cardObject.designation}</p>
        <div class="info-section">
            <div class="info-item">
                <span>ID:</span> <strong>${cardObject.id}</strong>
            </div>
            <div class="info-item">
                <span>Designation:</span> <strong>${cardObject.designation}</strong>
            </div>
        </div>
    `;
    card.innerHTML = html;
    card.style.display='block';
    document.getElementById("disappear")
        .addEventListener("click", () => {
            card.style.display = 'none';
        });
}

function loadData(){
    let dataSection=document.getElementById("employeedata");
    dataSection.innerHTML='';
    employeesData.forEach((value,index)=>{
    dataSection.innerHTML+=
    `<ul id="value">
            <li>
                <img src="${value.image}" alt="Profile" class="table-img">
            </li>
            <li>${value.id}</li>
            <li>${value.name}</li>
            <li>${value.designation}</li>
            <li>${salarytotext(value.salary)} <button class="remove" data-index="${index}">Remove</button></li>
            <li><button class="print btn" data-index="${index}">print</button></li>
    </ul>
    `    
    })
    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", function () {
            remove(this.dataset.index);
        });
    });
    localStorage.setItem("employeesData",JSON.stringify(employeesData))
}

function search(name){
    let dataSection=document.getElementById("employeedata");
    dataSection.innerHTML='';
    let searchData= employeesData.filter(value=> value.name==name)
    searchData.forEach((value,index)=>{
        dataSection.innerHTML+=
        `<ul id="value">
        <li>${value.id}</li>
        <li>${value.name}</li>
        <li>${value.designation}</li>
        <li>${salarytotext(value.salary)} <button class="remove" data-index="${index}">Remove</button></li>
        <li><button class="print btn" data-index="${index}">print</button></li>
        </ul>
        `
    })
    if(searchData.length==0){
        dataSection.innerHTML='not found';
        setTimeout(loadData,2000)
    }
    document.querySelectorAll(".print").forEach(button =>{
        button.addEventListener("click",()=>{
            let index=button.dataset.index;
            generateCard(index);
        })
    });
    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", function () {
            console.log(this.dataset.index)
            remove(this.dataset.index);

        });
    });
    localStorage.setItem("employeesData",JSON.stringify(employeesData))
}

function remove(i){
    let confirm= prompt(`Are you sure to remove the employee: ${employeesData[i].name} with id ${employeesData[i].id}\n Enter y/n`);
    if(confirm=='y' || confirm==='Y'){
        employeesData.splice(i,1);
        console.log(`${employeesData[i]} is spliced`);
        alert("Employees Data is deleted successfully")
        loadData();
    }
    else{
        alert("Employee Data is not deleted")
    }
}


function salarytotext(s) {
    if (s >= 1000000) {
        return (s / 1000000).toFixed(1) + "M";
    }
    else if (s >= 1000) {
        return (s / 1000).toFixed(1) + "K";
    }
    return s.toString();
}