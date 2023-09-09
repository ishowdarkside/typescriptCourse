class Department {
  static test: string = "MAJKULICA";

  /*private id: string;
  private name: string;*/
  protected employees: String[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department name: ${this.name}`);
  }

  addEmployee(employee: String) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  public readonly admins: string[];
  public repoters: string[];
  private lastReport: string = "Pedro lebasna";

  constructor(id: string, public readonly name: string) {
    super(id, name);
    this.admins = [];
    this.repoters = [];
  }

  get getLastReport() {
    return this.lastReport;
  }

  set setLastReport(reporter: string) {
    this.lastReport = reporter;
  }
  addReporters(name: string) {
    this.repoters.push(name);
  }

  addEmployee(employee: String): void {
    if (employee === "max") return;
    this.employees.push(employee);
  }
}

const ITAccount = new ITDepartment("114", "Ajdin");
ITAccount.addReporters("Pedro salva");

ITAccount.addEmployee("max1");
console.log(ITAccount);

ITAccount.setLastReport = " cao malena";
console.log(ITAccount.getLastReport);
