// 1. Create a variable and store your favorite food.

let a = "pasta";

console.log(a);             //pasta 
// 2. Create a variable and store your mobile number.

let b = "8919304733";

console.log(b);             //8919304733

// 3. Create a boolean variable with false value.

let c = false;

console.log(c);              //false


// 4. Create one undefined variable and print typeof.

let d ;

console.log(d);              //undefined

// 5. Create one array with 6 animal names.

let animals = ["peacock" , "monkey" , "tiger" , "elephant" , "dog" , "zebra"];

console.log(animals);      

// 6. Print second animal from array.

console.log(animals[1]);       //monkey

// 7. Print last animal from array using length.

console.log(animals[animals.length-1]);  //zebra

// 8. Create object with bike details (name, model, color).


let obj = { name: ["pulsar", "ns150"], color: ["pink", "meroon", "red"] };

// 9. Print bike color from object.

console.log(obj.color[0]);   //pink

// 10. Create two variables and add values.

let num = 100;

let additional = 50;

num = num + additional;

console.log(num);          //150

// 11. Create two variables and divide values.

let num1 = 100;

let additional1 = 50;

num1 = num1 / additional1;

console.log(num1);                //2

// 12. Find 15 % 2.

let num2 = 15;

let num3 = 2;

num2 = num2 % num3;

console.log(num2);         //1

// 13. Find 2 ** 5.

let num4 = 2;

let num5 = 5;

num4 = num4 ** num5;

console.log(num4);               //32

// 14. Create variable with 5 and use post increment.

let a1 = 5;

a1++;

console.log(a1);           //6

// 15. Create variable with 10 and use pre increment.

let b1 = 10;

++b1 ;

console.log(b1);             //11

// 16. Create variable with 20 and use pre decrement.

let c1 = 20;

--c1 ;

console.log(c1);   //19
 
// 17. Create variable with 50 and use post decrement.

let d1 = 50 ;

d1--;

console.log(d1);    //49

// 18. Check 100 > 50.

if(100 > 50 ) { 
    console.log("100 is greater than 50");
}

console.log(100>50);    //true

// 19. Check 25 < 10.

if (25 < 10) {
    console.log("25 is less than 10");

}
console.log(25<10);      //false


// 20. Check 50 >= 50.

console.log(50 >= 50 );    //true

// 21. Check 50 != 50.

console.log(50 != 50);    //false

// 22. Check 10 == "10".
 
console.log(10 == "10");    //true

// 23. Check 10 === "10".

console.log(10 === "10");   //false

// 24. Check 25 != "25".

console.log(25 != "25");   //false

// 25. Check 25 !== "25".

console.log(25 !== "25");    //true

// 26. Use AND operator:
//     10 > 5 && 20 > 15

console.log(10>5 && 20>15);    //true && true  = true.


// 27. Use AND operator:
//     5 > 10 && 20 > 15

console.log(5 > 10 && 20 > 15);  //false && true = false

// any one false is written as false.


// 28. Use OR operator:
//     5 > 10 || 20 > 15

console.log(5 > 10 || 20 > 15);  // false || true = true.

// all false than only false.

// 29. Use OR operator:
//     2 > 5 || 1 > 10

console.log(2 > 5 || 1 > 10); //false || false = false.

// 30. Use NOT operator:
//     !(10 > 5)

console.log( !(10 > 5));     //!(true) = false

// 31. Use NOT operator:
//     !(5 > 10)

console.log(  !(5 > 10));    //!(false)  = true


let result = (50 > 25) ? "True" : "False";
console.log(result);  //Te{
    console.log(false);
}

//true

// 33. Create ternary operator:
//     if 18 >= 21 print "Adult"
//     else print "Minor"

if(18 >= 21) {
    console.log("adult");
let ageStatus = (18 >= 21) ? "Adult" : "Minor";
console.log(ageStatus);  //Minor/ 34. Create one array with 5 city names and print third city.

let d = [ "hyderabad " , "mumbai" , "delhi" , "chennai" ,"goa"
];

console.log(d[2]);

// 35. Create one object with employee details and print employee name.
cities = [ "hyderabad" , "mumbai" , "delhi" , "chennai" ,"goa"
];

console.log(cities[2]);  //delhi",
    department : "IT",
    salary : 5000

}

console.log(employee.empname);


// 36. Create variable with string "100" and print typeof.

let f = "100";

console.log(typeof(f));

//string

// 37. Create variable with number 100 and print typeof.

let g = 100;

console.log(typeof(g));

//number

// 38. Create one null variable and print it.

let h = null;

console.log(h);

// it will give the null value.


// 39. Create one array with mixed datatypes.

let mixedarray =  [ 
    10 , "hello" , true , null ,{ name :"arun"} ,[1 ,2 ,3]
];

console.log(mixedarray);

// 40. Create object with student details:
//     name, mark, passed(boolean)

let student= {
    name : "sravan",
    mark : 20, 
    passes : true,
}

console.log(student);