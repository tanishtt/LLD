class ProblematicEmployee{
    public id: number;
    public name: string;
    public department: string;
    public baseSalary: number;

    constructor(id: number, name: string, department: string, baseSalary: number) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.baseSalary = baseSalary;
    }
    //business logic responsibility
    //complex salary calculation, new tax laws, bonus rules, increment, awards.
    public calculatePay(): number{
        console.log('calculating pay for ' + this.name);
        return this.baseSalary * 1.75;
    }
    //reason to change

    //reporting responsibility
    //new report format, new report template, change existing template, content, format etc.
    public generatePerformanceReport(format:'pdf'|'csv'): string{
        console.log(`generating a ${format} performance report for ${this.name}...`);
        const report = `performance report for ${this.name}\n...\n...`;
        return report;
    }
    //another reason to change

    //data persistence responsibility
    //switching from sql to nosql, change in number of field to save.
    public save(): void{
        console.log(`saving employee ${this.name} to database...`);
    }
    //another reason to change.

    //fetching employees.
    public fetchDetails() {
        console.log('fetched employee details successfully.');
    }
}