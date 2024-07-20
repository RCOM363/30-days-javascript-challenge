// loops

// feature request 1 - Write a script that prints numbers from 1 to 10 using a for loop and a while loop

console.log("For Loop/n");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("While Loop/n");
let num = 1;

while (num <= 10) {
  console.log(num);
  num++;
}

// feature request 2 - Create a script that prints the multiplication table of 5 using a for loop

for (i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// feature request 3 - Write a script that prints a pattern of stars using nested loops

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

// feature request 4 - Write a script that calculates the sum of numbers from 1 to 10 using a while loop
var i = 1;
sum = 0;

while (i <= 10) {
  sum = sum + i;
  i++;
}

console.log(`sum of 1-10 numbers is ${sum}`);

// feature request 5 - Create a script that calculates the factorial of a number using a do...while loop

let fact = 1,
  number = 5,
  k = 5;

do {
  fact = fact * k;
  k--;
} while (k > 0);
console.log(`factorial of ${number} is ${fact}`);
