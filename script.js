console.log("hello js!");

// Data Types
//5 Types basically, numbers, string, boolean, undefined, null

var name = "Rahul";
var age = 27;

console.log(name + age); //here it converts on the fly to string and hence concatenates, known as type coercion
console.log(age + age); //here, it just adds the numbers

//Multiple vars
var lname, isJob;
console.log(lname); // it will give undefined
console.log(lname + isJob); //it will give NaN