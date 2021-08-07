// The typescript compiler will catch the faulty variable reassignments and in turn we will get much cleaner js code
let apples: number = 5;
apples = 10;

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4];
let myBooleans: boolean[] = [true, false];

// Classes
class Car {}

let car1: Car = new Car();

//Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

logNumber(2);

// Type inference is done automatically by TS by looking at RHS
// eg: let a = 5; // will automatically be given the type number

// When to use type annotations
// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") foundWord = true;
}

// The following is a very bad coding practice but this could rarely occour. Usually a varible should hold only one type
//3) Variable whoes type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
