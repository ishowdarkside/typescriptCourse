const names: Array<string> = ["Max", "Maneul"];

const promise: Promise<string[]> = new Promise((res, rej) =>
  setTimeout(() => {
    res(["Array 1"]);
  }, 2000)
);

promise.then((data) => data.forEach);

const array: Array<string> = ["blato"];

async function myfc() {
  try {
    const res: Response = await fetch("");
    const data: Array<string> = await res.json();
  } catch (err) {}
}

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const obj = merge({ name: "Ajdin" }, { age: 30 });

function myObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const testObj = myObj({ name: "string" }, { age: 22 });
console.log(testObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(
  element: string | Array<any>
): [string | Array<any>, string] {
  let descriptionText = "Got no value";
  if (element.length > 0)
    descriptionText = "Got " + element.length + " element";
  else if (element.length > 1)
    descriptionText = `Got ${element.length} elemenets`;
  return [element, descriptionText];
}

function extractAndConvert<T extends object>(obj: T, key: keyof T) {
  return obj[key];
}

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Max");
textStorage.addItem("Menu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(4);

const objStorage = new DataStorage<string>();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return <CourseGoal>courseGoal;
}

const myNames: Readonly<string[]> = ["Max", "Sports"];

class Person<T extends string> {
  private name: T;
}
