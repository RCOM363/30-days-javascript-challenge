// ES6+ features

// feature request 1 - Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings

const name = "John",
  age = 20;
console.log(`Hi my name is ${name} and I'm ${age} years old`);
console.log(`
    This is multiline string,
    one can write across multiple lines.
    H   E   L   L   O
`);

// feature request 2 - Create a script that uses array and object destructuring to extract values and log them

console.log("array destructuring:");
const arr = [1, 2, 3, 4, 5];
const [first, second, , , last] = arr;
console.log(
  `first element: ${first}\nsecond element: ${second}\nlast element: ${last}`
);

console.log("object destructuring:");
const book = {
  title: "Book Title",
  author: "Book Author",
  year: 2020,
};
const { title, author } = book;
console.log(`title: ${title}\nauthor: ${author}`);

// feature request 3 - Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments

const arr2 = [...arr, 6, 7, 8, 9, 10];
console.log(`new array: (using spread operator)\n${arr2}`);

function sum(...nums) {
  let sum = 0;
  nums.forEach((num) => (sum = sum + num));
  return sum;
}

console.log("rest operator:");
console.log(sum(2, 3));
console.log(sum(1, 2, 3, 4, 5));

// feature request 4 - Create a script that defines a function with default parameters and logs the results of calling it with different arguments

console.log("default parameter:");
function mulitply(num1, num2 = 1) {
  return num1 * num2;
}

console.log(mulitply(2, 3));
console.log(mulitply(5));

// feature request 5 - Write a script that uses enhanced object literals to create and log an object with methods and computed property names

const object = { name, age, sum };
console.log("object created using enhanced object literals");
console.log(object);
console.log("object created using computed property names");
const propName = "prop name",
  propValue = "prop value";
const object2 = {
  [propName]: propValue,
};
console.log(object2);
