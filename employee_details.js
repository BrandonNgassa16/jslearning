const employees = [
    { id: 1, name: 'DE Ngassa Brandon', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Daryl', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Brice Simo', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
];

// Function to display all employees
const totalEmployees = employees.map((employee) => 
    `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
).join('');

document.getElementById('employeesDetails').innerHTML = totalEmployees;