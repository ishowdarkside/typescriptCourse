abstract class Department {
  static test: string = "MAJKULICA";

  /*private id: string;
  private name: string;*/
  protected employees: String[] = [];

  constructor(protected readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  abstract describe(this: Department): void;

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
  private static instance: ITDepartment;
  public repoters: string[];
  private lastReport: string = "Pedro lebasna";

  private constructor(id: string, public readonly name: string) {
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

  describe(this: ITDepartment): void {
    console.log(`IT Department - ID ${this.id}`);
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new ITDepartment("d2", "PEDRO");
    return this.instance;
  }
}

const ITAccount = ITDepartment.getInstance();
console.log(ITAccount);
ITAccount.addReporters("Pedro salva");

ITAccount.addEmployee("max1");

ITAccount.setLastReport = " cao malena";
console.log(ITAccount.getLastReport);
