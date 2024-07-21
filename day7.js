// objects

// feature request 1 - Write a script that creates a book object, adds methods to it, and logs its properties and method results

let book = {
  title: "Book Title",
  author: "Book Author",
  year: 2020,
  show() {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}`);
  },
  updateYear(year) {
    this.year = year;
  },
};

console.log(`Book object:`);
console.log(book);
console.log(`show method:`);
book.show();
console.log(`updateYear method:`);
book.updateYear(2021);
console.log(`updated object:`);
console.log(book);

// feature request 2 - Create a script that defines a library object containing an array of book objects and logs the library's details

let library = {
  name: "Library Name",
  books: [
    {
      title: "Book Title 1",
      author: "Book Author 1",
      year: 2020,
    },
    {
      title: "Book Title 2",
      author: "Book Author 2",
      year: 2021,
    },
    {
      title: "Book Title 3",
      author: "Book Author 3",
      year: 2022,
    },
  ],
};

console.log("Library object:");
console.log(library);

// feature request 3 - Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values

console.log("for...in loop: iterates over property names");
for (let prop in library) {
  console.log(prop);
}
console.log("for...of loop: iterates over values");

for (let book of library.books) {
  console.log(book);
}
console.log("Library object keys: (using Object.keys method)");
Object.keys(library).forEach((key) => console.log(key));
console.log("Library object values: (using Object.values method)");
Object.values(library).forEach((value) => console.log(value));
