console.log('Hallo Welt');

let myName: string = 'Klaus';
// myName = true;

interface MyInterface {
  name: string;
  age: number;
}

type MyType = {
  name: string;
  age: number;
};

class MyClass {
  // Variante 1
  // public name = '';
  // public age = 0;

  // Variante 2
  // public name: string;
  // public age: number;
  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }

  // Variante 3
  constructor(public name: string, public age: number) {}
}

console.log(myName);

const maria: MyInterface = { name: 'maria', age: 12 };
const claudia: MyType = { name: 'claudia', age: 13 };
const doris: MyClass = { name: 'doris', age: 42 };
const cordula: MyClass = new MyClass('cordula', 7);

function greet(person: MyInterface): void {
  console.log('Hallo ', person.name);
}

const greet2 = (person: MyInterface): void => {
  console.log('Hallo ', person.name);
};

const o = {
  greet(person: MyInterface): void {
    console.log('Hallo ', person.name);
  },
};

greet(maria);
greet(claudia);
greet(doris);
greet({ name: 'jürgen', age: 45 });
// greet('Hans-Dieter');

//function add(a: number, b: number = 10): number {
function add(a: number, b?: number): number {
  if (!b) {
    return a;
  }
  return a + b;
}
console.log(add(1, 2));
console.log(add(1));

type Address = {
  name: string;
  address?: {
    street: string;
  };
};

const address: Address = {
  name: 'laura',
};

console.log(address.name);
console.log(address.address?.street);
console.log(address && address.address && address.address.street);

// destructuring
function send(a: Address) {
  console.log(a.name);
}
function send2({ name }: Address) {
  console.log(name);
}

// const {name} = address;
const arr = [1, 2, 3];
const [a, , c] = arr;

const foo = {
  bar: 'baz',
};

const result = foo.bar === 'baz' ? 'hallo' : 'bye';
const result2 = address.address?.street === 'mainstreet' ? 'yes' : 'no';
console.log(result2);

console.log(sub(4, 2));
// console.log(sub2(4, 2));
// console.log(sub3(4, 2));

function sub(a: number, b: number): number {
  return a - b;
}
const sub2 = function (a: number, b: number): number {
  return a - b;
};

const sub3 = (a: number, b: number): number => {
  return a - b;
};

class Collection<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

const numberCol: Collection<number> = new Collection<number>();
numberCol.addItem(1);
console.log(numberCol.getItems());

const stringCol: Collection<string> = new Collection<string>();
stringCol.addItem('a');
console.log(stringCol.getItems());
