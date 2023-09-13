type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

let test: Universal;

//Function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a == "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add(1, 5);

type UnkownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnkownEmployee) {
  if ("privileges" in emp) {
    console.log("PRIVILEGES " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("START DATE " + emp.startDate);
  }
}

const adminObj: Admin = {
  name: "Ajdin",
  privileges: ["gay killer"],
};
printEmployeeInformation(adminObj);

class Car {
  drive() {
    console.log("DRIVING");
  }
}

class Truck {
  drive() {
    console.log("DRIVING A TRUCK");
  }

  loadCargo(amount: number) {
    console.log("LOADING CARGO ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

//Disriminated unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }

  console.log(speed);
}

const animal: Bird = { flyingSpeed: 200, type: "bird" };

moveAnimal(animal);

//Type casting

const inputCastingWithDiamond = <HTMLInputElement>document.querySelector("p")!;
const inputCastingWithAs = <HTMLInputElement>document.querySelector("input");

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital  character!",
};

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};
