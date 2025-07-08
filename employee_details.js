// Array of employee objects
const employees = [
    { id: 1, name: 'DE Ngassa Brandon', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Daryl', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Brice Simo', age: 35, department: 'Finance', salary: 60000 },
    // Additional employee records can be added here
];

// Function to display all employees
function displayEmployees() {
    // Map through the employees array and create HTML for each employee
    const totalEmployees = employees.map(employee => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    
    // Update the 'employeesDetails' div with the generated HTML
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate the total salaries of all employees
function calculateTotalSalaries() {
    // Use reduce to sum up the salaries of all employees
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    
    // Display the total salaries in an alert
    alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display employees in the HR department
function displayHREmployees() {
    // Filter employees to get only those in the HR department
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    
    // Map through the filtered HR employees and create HTML for each
    const hrEmployeesDisplay = hrEmployees.map(employee => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    
    // Update the 'employeesDetails' div with the generated HTML
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to find an employee by their ID
function findEmployeeById(employeeId) {
    
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    
    // Check if the employee was found
    if (foundEmployee) {
        // Display the found employee's details in the 'employeesDetails' div
        document.getElementById('employeesDetails').innerHTML = 
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        // Display a message if no employee was found with the given ID
        document.getElementById('employeesDetails').innerHTML = 
            '<p>No employee found with this ID.</p>';
    }
}