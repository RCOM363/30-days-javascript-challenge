// operators

// feature request 1 - Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results

const n1 = 10,
  n2 = 5,
  n3 = 2;
console.log("Arithmetic");
console.log(`Addition: ${n1}+${n2} = ${n1 + n2}`);
console.log(`Subtraction: ${n1}-${n2} = ${n1 - n2}`);
console.log(`Multiplication: ${n1}*${n2} = ${n1 * n2}`);
console.log(`Division: ${n1}/${n2} = ${n1 / n2}`);
console.log(`Remainder: ${n1}%${n2} = ${n1 % n2}`);

// feature request 2 - Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results

console.log("\nComparison");
console.log(`${n1}>${n2}: ${n1 > n2}`);
console.log(`${n3}<${n2}: ${n3 < n2}`);
console.log(`${n2}>=${n1}: ${n2 >= n1}`);
console.log(`${n2}<=${n1}: ${n2 <= n1}`);
console.log(`${n2}==${n1}: ${n2 == n1}`);
console.log(`${n2}===${n1}: ${n2 === n1}`);
console.log(`${n2}!==${n1}: ${n2 !== n1}`);
console.log(`${n1}>${n2} and ${n1}>${n3}: ${n1 > n2 && n1 > n3}`);
console.log(`${n2}>${n1} or ${n2}>${n3}: ${n2 > n1 || n2 > n3}`);

// feature request 3 - Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result

console.log("\nTernary");
console.log(n1 > 0 ? `${n1} is positive` : `${n1} is negative`);
