class Employee {
  public id: number;
  public name: string;
  public department: string;
  public baseSalary: number;

  constructor(
    id: number,
    name: string,
    department: string,
    baseSalary: number
  ) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.baseSalary = baseSalary;
    }
    
    public getEmployeeId() {
        return this.id;
    }
    public getEmployeeName() {
        return this.name;
    }
    public fetchEmployeeDetail() {
        return { name: this.name, id: this.id, department: this.department };
    }
}


class SalaryCalculator{
    public calculatePay(employee: Employee) {
        console.log('calculating pay for ' + employee.name);
        return employee.baseSalary * 1.75;
    }
}

class PerformanceReporter{
    public generateReport(employee: Employee, format: 'pdf' | 'csv') {
        console.log(`generating a ${format} performance report for ${employee.name}...`);
        const report = `performance report for ${employee.name}\n...\n...`;
        return report;
    }
}

class EmployeeDatabase{
    public save(employee:Employee) {
      console.log(`Saving employee ${employee.name} to the database...`);
        // Actual database saving logic goes here.
        //handle persistence of employee object.
        //hence if change in database technology, then only the employeeDatabase will change.
    }
}



//running code.

const employee = new Employee(1, 'tanish mohanta', 'sales', 1000);

const db = new EmployeeDatabase();
const calculator = new SalaryCalculator();
const reporter = new PerformanceReporter();


db.save(employee);
calculator.calculatePay(employee);
reporter.generateReport(employee, 'pdf');

