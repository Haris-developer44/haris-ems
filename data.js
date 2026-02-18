export let employeesData=JSON.parse(localStorage.getItem("employeesData")) || [
    {
        image: "image 1.jpg",
        id: 1001,
        name: "Andrew",
        designation:"Project Manger",
        salary: 250000
    },
    {
        image: "image 2.jpg",
        id: 1002,
        name: "Emma",
        designation:"Web Dev",
        salary: 150000
    }
];