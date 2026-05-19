// 1. Create a variable using var and store your name.
var a = "sravan";   // declaration | initialization

// 2. Print your name using console.log().
console.log(a); // output: sravan

// 3. Create a variable using let and store your age.
let b = 23; // declaration | initialization
// 4. Change the value of age and print it.
b = 30; // reuse
console.log(b); // output: 30

// 5. Create a constant variable for city name.
const c = "hyderabad"; // declaration | initialization
console.log(c); // output: hyderabad

// 7. Try redeclaring var variable and observe output.
var a = "secunderabad"; // redeclaration | reinitialization
console.log(a); // output: secunderabad

// 8. Try redeclaring let variable and observe error.
 let b = 23; // SyntaxError: Identifier 'b' has already been declared
 console.log(b); //error due to redeclaration of let variable

// 9. Try reassigning const variable and observe error
c = "assam"; // TypeError: Assignment to constant variable

// 10. difference between var and let
//var: can declare, reuse, and redeclare
 //let: can declare and reuse, but cannot redeclare in the same scope

// 11. difference between const and let
 //let: can declare and reuse
// const: can declare only once and cannot be reassigned

// 12. Predict output
var ae = 10;
ae = 20;
var ae = 30;
console.log(ae); // output: 30

// 13. Predict output
let bPred = 50;
bPred = 60;
console.log(bPred); // output: 60

// 14. Predict output
const cPred = 100;
console.log(cPred); // output: 100

// 15. Use console.log() to print "Hello World".
let h3 = "Hello World";
console.log(h3); // output: Hello World

// 16. Use alert() to show "Welcome User".
alert("Welcome User"); // shows alert with Welcome User

// 17. Use confirm() to ask user:
// "Do you like JavaScript?"
let userCompletion = confirm("Do you like JavaScript?");
console.log(userCompletion); // output: true or false

// 18. Use prompt() to ask user name.
let username = prompt("What is your name?");
console.log(username); // output: entered name

// 19. Print prompt value in console.
let p = prompt("Print value");
console.log(p); // output: entered value

// 20. Use document.writeln() to print "Batch 33".
document.writeln("Batch 33");

// 21. Create variable studentName and store your name.
var n = "eswar";
console.log(n); // output: eswar

// 22. Create variable studentAge and store your age.
var a3 = 34;
console.log(a3); // output: 34

// 23. Print both variables together.
console.log(a, a3); // output: secunderabad 34

// 24. Create a variable for mobile number.
var a4 = 8919304733;

// 25. Print mobile number using console.log().
console.log(a4); // output: 8919304733

// 26. Create variable using var for favorite color.
var co = "ruby red";

// 27. Reassign another color value.
co = "green"; // reuse
console.log(co); // output: green

// 28. Create variable using let for marks.
let m = 86.9;

// 29. Change marks value and print it.
m = 89.9;
console.log(m); // output: 89.9

// 30. Create const variable for PI value.
const pi = 100;

// 31. Print PI value.
console.log(pi); // output: 100

// 32. Predict output
var x = 5;
var x = 15;
console.log(x); // output: 15

// 33. Predict output
let y = 25;
y = 35;
console.log(y); // output: 35

// 34. Find error
const zPred = 40;
// zPred = 45; // TypeError: Assignment to constant variable
// console.log(zPred);

// 35. Create alert box with your college name.
let college = "jaganscollage";
alert(college); // shows alert with jaganscollage

// 36. Ask user age using prompt().
let a5 = prompt("Enter your age");

// 37. Print user age in console.
console.log(a5); // output: entered age

// 38. Ask user confirmation:
// "Did you complete HTML?"
let complete = confirm("Did you complete HTML?");

// 39. Print confirm result in console.
console.log(complete); // output: true or false

// 40. Print "JavaScript Class" using document.writeln().
document.writeln("JavaScript Class");

// 41. Create 3 variables:
// city, state, country.
var b1 = "hyderabad";
var b2 = "telangana";
var b3 = "country";

// 42. Print all variables together.
console.log(b1, b2, b3); // output: hyderabad telangana country

// 43. Create one example for var.
var a6 = 55; // declaration
a6 = 60; // reuse
var a6 = 65; // redeclaration
console.log(a6); // output: 65


console.log(a6);

// 44. Create one example for let.

let a7 = 33;  // declaration
    a7 = 34 ; // reuse (no redeclaretion)
console.log(a7);

// 45. Create one example for const.
const c4 = "Red";
 console.log(c4);

 // 46. Predict output

var num = 100;
num = 200;

console.log(num);
// output200

// 47. Predict output

let price = 500;
price = 700;

console.log(price);

//output 700

// 48. Predict output

const password = 12345;

console.log(password);

//output 12345

// 49. Write rules of var.

// 1. var allows declaration and redeclaration
// 2. var allows reassignment
// 3. var has function scope
// 4. var can be declared without value


// 50. Write rules of let and const.

// let:
// 1. let does not allow redeclaration
// 2. let allows reassignment
// 3. let has block scope

// const:
// 1. const does not allow redeclaration
// 2. const does not allow reassignment
// 3. const has block scope
// 4. const must be initialized during declaration
// 5 . once declared the const we cannot declare one more time