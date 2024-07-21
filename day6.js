// arrays

// feature request 1 - Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, unshift methods

let arr = [1, 2, 3, 4, 5];
console.log(`Initial Array: ${arr}`);
arr.push(6);
console.log(
  `push method: new element is appended at the end of the array\n ${arr}`
);

console.log(
  `pop method: last element (${arr.pop()}) is removed from the array\n ${arr}`
);
console.log(
  `shift method: first element (${arr.shift()}) is removed from the array\n ${arr}`
);
arr.unshift(7);
console.log(
  `unshift method: new element is added at the start of the array\n ${arr}`
);

// feature request 2 - Create a script that uses map, filter and reduce methods to transform and aggregate array data

console.log(
  `map method: squaring each element in an array\n ${arr.map(
    (ele) => ele * ele
  )}`
);

console.log(
  `filter method: selecting odd numbers in an array\n ${arr.filter(
    (ele) => ele % 2 !== 0
  )}`
);

console.log(
  `reduce method: sum of array elements is ${arr.reduce((sum, ele) => {
    return sum + ele;
  }, 0)}`
);

// feature request 3 -  Write a script that iterates over an array using both for loop and forEach method logs each element

console.log("for loop:");
for (let i = 0; i < arr.length; i++) {
  process.stdout.write(arr[i] + "\t");
}
console.log("\nforEach loop:");
arr.forEach((arr) => process.stdout.write(arr + "\t"));

// feature request 4 - Create a script that demonstrates the creation and manipulation of a two-dimensional array

let arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("\n2D array:");
console.table(arr2);
arr2.push([10, 11, 12]);
console.log("push method: \npushing whole row");
console.table(arr2);
console.log("pushing single element");
arr2[0].push("ele1");
console.table(arr2);
arr2.pop();
console.log("pop method: \npopping whole row");
console.table(arr2);
console.log("popping single element");
arr2[0].pop();
console.table(arr2);
// similarly other array methods can be used
console.log("splice method: \nto remove specific rows");
// splice method affects the original array
console.table(arr2.splice(1, 1)); // middle row is removed
console.log("to add rows in between");
arr2.splice(1, 0, [0, 0, 0]);
console.table(arr2);
