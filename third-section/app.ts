/*interface Greetable {
  name: string;
  greeting(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greeting(phrase: string): void {}
}

let user1: Greetable;
user1 = new Person("15", 12);

user1 = {
  name: "PAKO",
  greeting: function (phrase: string) {
    return phrase;
  },
};
*/

interface Named {
  readonly name: string;
  outPutName?: string;
}

interface Person extends Named {
  age: number;
  greeting(phrase: string): void;
}

class PersonSchema implements Person {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greeting(phrase: string): void {
    console.log(phrase);
  }
}

const user1 = new PersonSchema("Ajdin", 15);

//Interfaces for functions

/*
type AddFn = (n1: number, n2: number) => void;
let add: AddFn;
*/

interface AddFn {
  (a: number, b: number): number;
}
