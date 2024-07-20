// control structures

// feature request 1 - Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result
const num = -10;
if (num > 0) {
  console.log(`${num} is positive`);
} else if (num < 0) {
  console.log(`${num} is negative`);
} else {
  console.log(`${num} is zero`);
}

// feature request 2 - Create a script to check if a person is eligible to vote based on their age and log the result

const age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// feature request 3 - Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name

const day = 5;
switch (day) {
  case 1:
    console.log("It is Sunday");
    break;
  case 2:
    console.log("It is Monday");
    break;
  case 3:
    console.log("It is Tuesday");
    break;
  case 4:
    console.log("It is Wednesday");
    break;
  case 5:
    console.log("It is Thrusday");
    break;
  case 6:
    console.log("It is Friday");
    break;
  case 7:
    console.log("It is Saturday");
    break;
  default:
    console.log("Invalid input!");
}

// feature request 4 - Create a script that uses a switch case to assign a grade based on a score and logs the grade

const marks = 72;

switch (
  true // bcoz case dont support conditional expression directly
) {
  case marks > 90:
    console.log(10);
    break;
  case marks > 80:
    console.log(9);
    break;
  case marks > 70:
    console.log(8);
    break;
  case marks > 60:
    console.log(7);
    break;
  case marks > 50:
    console.log(6);
    break;
  case marks > 40:
    console.log(5);
    break;
}

// feature request  5 - Write a script that checks if a year is a leap year using multiple conditions and logs the result

const year = 2032;
(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  ? console.log(`${year} is a leap year`)
  : console.log(`${year} is not a leap year`);
