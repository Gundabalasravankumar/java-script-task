// Task 1 — Spread Operator
let frontEnd = ["HTML","CSS"]
let backEnd = ["Node","MongoDB"]

let fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)
// OUTPUT: ["HTML", "CSS", "Node", "MongoDB"]


// Task 2 — Copy Array
let original = [1,2,3]

let copied = [...original]

copied.push(4)

console.log("Original:", original)
// OUTPUT: Original: [1, 2, 3]
console.log("Copied:", copied)
// OUTPUT: Copied: [1, 2, 3, 4]


// Task 3 — Object Merge
let student1 = {
  name : "Akhil"
}

let student2 = {
  role : "Developer"
}

let student = {...student1, ...student2}

console.log(student)
// OUTPUT: {name: "Akhil", role: "Developer"}


// Task 4 — Rest Operator
function total(a,b,...rest){
  console.log("a =", a)
  // OUTPUT: a = 1
  console.log("b =", b)
  // OUTPUT: b = 2
  console.log("Remaining =", rest)
  // OUTPUT: Remaining = [3, 4, 5, 6, 7, 8]
  console.log("Remaining Count =", rest.length)
  // OUTPUT: Remaining Count = 6
}

total(1,2,3,4,5,6,7,8)


// Task 5 — Array Destructuring
let colors = ["red","green","blue","yellow"]

let [c1,c2,c3,c4] = colors

console.log(c3)
// OUTPUT: blue


// Task 6 — Nested Array Destructuring
let data = [1,[2,[3,[4]]]]

let [a,[b,[c,[d]]]] = data

console.log(a,b,c,d)
// OUTPUT: 1 2 3 4


// Task 7 — Object Destructuring
let mobile = {
  brand : "xiomi",
  price : 25000,
  color : "black"
}

let {brand,price,color} = mobile

console.log(brand,color)
// OUTPUT: xiomi black


// Task 8 — push() & pop()
let numbers = [1,2,3]

numbers.push(4,5,6)

numbers.pop()

console.log(numbers)
// OUTPUT: [1, 2, 3, 4, 5]


// Task 9 — shift() & unshift()
let fruits = ["banana","orange"]

fruits.unshift("apple")

fruits.shift()

console.log(fruits)
// OUTPUT: ["orange"]


// Task 10 — splice()
let arr1 = [1,2,30,40,5,6]

arr1.splice(2,2,3,4)

console.log(arr1)
// OUTPUT: [1, 2, 3, 4, 5, 6]


// Task 11 — concat()
let a1 = [1,2]
let b1 = [3,4]

let result = a1.concat(b1,[5,6])

console.log(result)
// OUTPUT: [1, 2, 3, 4, 5, 6]


// Task 12 — slice()
let marks = [10,20,30,40,50,60]

let extracted = marks.slice(2,5)

console.log(extracted)
// OUTPUT: [30, 40, 50]


//Task 13 — flat()
let nest = [1,[2,[3,[4,[5]]]]]

let flatArray = nest.flat(Infinity)

console.log(flatArray)
// OUTPUT: [1, 2, 3, 4, 5]


// Task 14 — fill()
let arr2 = [1,2,3,4,5]

arr2.fill("done",3)

console.log(arr2)
// OUTPUT: [1, 2, 3, "done", "done"]


// Task 15 — includes()
let values = [10,20,30,40]

console.log(values.includes(20))
// OUTPUT: true
console.log(values.includes(100))
// OUTPUT: false


// Task 16 — indexOf()
let arr3 = [1,2,3,4,3,2]

console.log(arr3.indexOf(3))
// OUTPUT: 2
console.log(arr3.indexOf(2))
// OUTPUT: 1


// Task 17 — lastIndexOf()
let arr4 = [1,2,3,4,3,2]

console.log(arr4.lastIndexOf(3))
// OUTPUT: 4
console.log(arr4.lastIndexOf(2))
// OUTPUT: 5


// Task 18 — sort()
let nums = [100,2,55,1,9]

console.log(nums.sort())
// OUTPUT: [1, 100, 2, 55, 9]

console.log(nums.sort((a,b)=>a-b))
// OUTPUT: [1, 2, 9, 55, 100]


// Task 19 — reverse()
let letters = ["a","b","c","d"]

letters.reverse()

console.log(letters)
// OUTPUT: ["d", "c", "b", "a"]


// Task 20 — Student Management
let students = ["amit","sumit","rakesh"]

students.push("Naveen")

students.splice(1,1)

students.splice(1,1,"Arun")

students.reverse()

console.log(students)
// OUTPUT: ["Arun", "amit", "Naveen"]


// Task 21 — Shopping Cart
let cart = ["Shoes","Watch","Phone"]

cart.push("Laptop")

cart.splice(1,1)

console.log(cart.includes("Phone"))
// OUTPUT: true

console.log("Total Items =", cart.length)
// OUTPUT: Total Items = 3


// Task 22 — Employee Database
let employee = {
  name : "Amit",
  role : "Web Developer",
  salary : "5LPA"
}

let {name,role,salary} = employee

console.log(name,role,salary)
// OUTPUT: Amit Web Developer 5LPA

let employeeCopy = {...employee}

employeeCopy.salary = "7LPA"

console.log("Original:", employee)
// OUTPUT: Original: {name: "Amit", role: "Web Developer", salary: "5LPA"}
console.log("Copied:", employeeCopy)
// OUTPUT: Copied: {name: "Amit", role: "Web Developer", salary: "7LPA"}


// Task 23 — Custom Function
function company(name,...skills){
  console.log("Employee Name =", name)
  // OUTPUT: Employee Name = pardu
  console.log("Skills =", skills)
  // OUTPUT: Skills = ["HTML", "CSS", "JS", "React"]
  console.log("Skill Count =", skills.length)
  // OUTPUT: Skill Count = 4
}

company("pardu","HTML","CSS","JS","React")


// Task 24 — Array Analyzer
let data1 = [1,2,3,4,5,6,7,8,9,10]

console.log(data1.slice(0,5))
// OUTPUT: [1, 2, 3, 4, 5]

console.log([...data1].reverse())
// OUTPUT: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(data1.includes(7))
// OUTPUT: true

console.log(data1.indexOf(10))
// OUTPUT: 9


// Task 25 — Complete Challenge
let users = [
  {name:"amit",role:"Developer"},
  {name:"ram",role:"Designer"},
  {name:"rakesh",role:"Tester"}
]

// Add new user
users.push({name:"Naveen",role:"Manager"})

// Remove last user
users.pop()

// Merge another array
let newUsers = [
  {name:"Arun",role:"Developer"},
  {name:"santosh",role:"Tester"}
]

let finalUsers = [...users, ...newUsers]

// Print names only
finalUsers.forEach(user => {
  console.log(user.name)
  // amit, ram, rakesh, Arun, santosh
})

// Reverse final array
console.log(finalUsers.reverse())
// OUTPUT: [{name:"santosh",role:"Tester"}, {name:"Arun",role:"Developer"}, {name:"rakesh",role:"Tester"}, {name:"ram",role:"Designer"}, {name:"amit",role:"Developer"}]