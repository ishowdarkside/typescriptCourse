function add(n1: number, n2: number): number {
  return n1 + n2;
}

const myNum = 10;

function hermanos(arg: string): void {
  return;
}

let combineValues: (a: number, b: number) => number;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

combineValues = add;
