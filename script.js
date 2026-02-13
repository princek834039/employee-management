let employees = [
    { id: 1, name: "Rahul", salary: 30000 },
    { id: 2, name: "Aman", salary: 45000 },
    { id: 3, name: "Priya", salary: 25000 },
    { id: 4, name: "Neha", salary: 50000 },
    { id: 5, name: "Ankit", salary: 60000 }
];
function renderEmployees(data) {

    const employeeList = document.getElementById("employeeList");
    const totalSalary = document.getElementById("totalSalary");

     employeeList.innerHTML = "";

    data.forEach(emp => {
        const div = document.createElement("div");
        div.classList.add("employee");

        div.innerHTML = `
            <span>${emp.name}</span>
            <span>₹${emp.salary}</span>
        `;

        employeeList.appendChild(div);
    });

    const total = data.reduce((sum, emp) => sum + emp.salary, 0);
    totalSalary.innerText = "Total Salary: ₹" + total;
}
renderEmployees(employees);
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase();

    const filtered = employees.filter(emp =>
        emp.name.toLowerCase().includes(searchValue)
    );

    renderEmployees(filtered);
});
const sortBtn = document.getElementById("sortBtn");

let isAscending = true;

sortBtn.addEventListener("click", function () {

    employees.sort((a, b) => {
        return isAscending 
            ? a.salary - b.salary 
            : b.salary - a.salary;
    });

    isAscending = !isAscending;

    renderEmployees(employees);
});
