export let employeesData=JSON.parse(localStorage.getItem("employeesData")) || [
    {
        image: "image 1.jpg",
        id: 1001,
        name: "Andrew",
        designation:"Project Manger",
        salary: 250000
    }
];