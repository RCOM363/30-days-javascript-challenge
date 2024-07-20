// functions

// feature request 1 - Write a script that includes a function to check if a number is even or odd and logs the result

function isEven(num) {
  if (num % 2 === 0) return `${num} is even`;
  else return `${num} is odd`;
}

console.log(isEven(2));

// feature request 2 - Create a script that includes a function to calculate the square of a number and returns the result

function square(num) {
  return `square of ${num} is ${num * num}`;
}

console.log(square(5));

// feature request 3 - Write a script that includes a function expression to concatenate two strings and returns the result

function concatenate(str1, str2) {
  return str1 + str2;
}

console.log(concatenate("Hello", ", world!"));

// feature request 4 - Create a script that includes an arrow function to calculate the sum of two numbers and returns the result

const sum = (num1, num2) => {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

console.log(sum(2, 5));

// feature request 5 - Write a script that includes a higher-order function to apply a given function multiple times

function hello() {
  console.log("Hello");
}

const repeat = (func) => {
  for (let i = 1; i <= 5; i++) {
    func();
  }
};

repeat(hello);
