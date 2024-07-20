// variables and datatypes

// feature request 1 -  Write a script that declares variables of different data types and logs both the value and type of each variable to the console

const arr = [
  10,
  "Hello, world",
  true,
  { key1: "value 1", key2: "value 2" },
  [1, 2, 3, 4],
];

arr.forEach((variable) => {
  console.log(`Value: ${variable} Type: ${typeof variable}`);
});

// feature request 2 - Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment

let n1 = 10;
const n2 = 11;

console.log(`Initial value of n1: ${n1}`);
n1 = 15;
console.log(`New value of n1: ${n1}`);

console.log(`Initial value of n2: ${n2}`);
try {
  n2 = 10;
  console.log(`New value of n2: ${n1}`);
} catch (error) {
  console.error("Error: ", error.message);
}
