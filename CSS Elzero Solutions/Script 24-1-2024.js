/*document.write("<h1>Hello</h1>");
console.log("Hello %cbrother" , "color:red; font-size:25px;");*/

/* let a = "Elzero Web School";

 //1 // Zero
console.log(a.charAt(2).toUpperCase() + a.slice(3,6));

//2 //HHHHHHHH
console.log(a.charAt(13).toUpperCase().repeat(8));

// 3 // [Elzero]
console.log(a.slice(0,6).split());

// 4 // Elzero School
console.log(a.substr(0,6) +" " +a.substr(11,7));

//5 //eLZERO WEB SCHOOl
console.log(a.charAt(0).toLowerCase() + a.slice(1,a.length-1).toUpperCase() + a.substr(-1) ); */

// //1
// console.log(100 == "100"); // true
// console.log(100 < 1000); // true
// console.log(110 > 100 && 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(+ +50 * +"-40"); // true
// console.log(- 10 <  -"-40"); // true
// console.log(+ "10" == + 10); // true
// console.log( - -20 > false); // true 
// //2 
// let num1 = 10;
// let num2 = 20;
// console.log(num1 < num2); // true
// console.log(num1 <= num2); // true
// console.log(num1 != num2); // true
// console.log(num1 !== num2); // true
// console.log(num1 > - num2 ); // true
// console.log(num1 >= - num2); // true 
// //3
// let a = 20;
// let b = 30;
// let c = 10;
// console.log(a < b && a > c || a == b); // true
// console.log(a < b || a >= c); // true
// console.log(!(a > b) && !(a >= b) && !(a < c) && !(a <= c)); // true 

// let a = 8;

// (a < 10) 
// ? console.log(10) 
// : a >= 10 && a <= 40 
// ? console.log("10 To 40") 
// : a > 40 
// ? console.log(" > 40") 
// : console.log("Unknown");

// let st = "Elzero Web School" ;

// if ((st.length *2).toString() === "34"){
//     console.log("Good");
// }

// console.log(st.indexOf("W"));

// if ((st.split("")[st.indexOf("w")]).toLowerCase() === "w") {
//     console.log("Good");
// }

// if ("???" !== "string") {
//     console.log("Good");
// }

// if ("???" === "number") {
//     console.log("Good");
// }

// if ("???" === "ElzeroElzero") {
//     console.log("Good");
// }

/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

//console.log(my.reverse().slice(--counter)); // ["Osama", "Elham", "Mazero", "Ahmed"];
// //                                 2
//console.log(my.slice(++counter,--zero)); // ["Elham", "Mazero"]
// //                      3         -1
// console.log(my);
//let z = my[counter].slice(++zero,--counter) +my[my.length - counter].slice(counter)
//let z = my.slice(counter)[++zero][zero].concat(my.slice(counter)[zero][++zero].concat(my[++counter].slice(--counter - zero)))
// //                 3        1       1                      3      1      2                   4                3         2
//console.log(z); // "Elzero"

// console.log(`${z[my.length- counter]}${z[my.length - --counter].toUpperCase()}`); // "rO"

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// Method 1
// myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
//console.log(myFriends.slice(myFriends.length - ++num,--num)); // ["Ahmed", "Elham", "Osama"];

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.pop();
// friends.shift();
// console.log(friends); // ["Eman", "Osama"]

//   
// let finalArr = [arrTwo.pop(),arrOne.pop(),arrOne.pop(),arrOne.pop(),arrTwo.pop(),arrTwo.pop()];

// // Write One Single Line Of Code
// let s = arrOne.concat(arrTwo);
// console.log(s);
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// if (haystack.includes(needle)== true){
//   console.log("Found");
// }

// if (haystack.indexOf(needle) == 1) {
//   console.log("Found");
// }

// haystack.pop()
// if (haystack.lastIndexOf(needle)==1){
//   console.log("Found");
// }

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();
// let ind = arr2.length - arr1.length
//  [arr2[++ind],arr1.pop(), arr2.pop() ];
// allArrs=allArrs.join("").toLowerCase();

// // Your Code Here

//  console.log(allArrs); // fxy

// let arr1 = [[1,2],[3,4],[5,6]];

// for (i=0; i<arr1.length;i++){
//   for (let j=0;j<arr1[i].length;j++){
//     console.log(arr1[i][j]);
//   }
//   console.log(arr1[i]);
// }

// function calculate(firstNum, secondNum, operation = firstNum + secondNum) {
 
//   if (operation === "add") {
//   console.log(firstNum + secondNum);
// }else if (operation === "subtract"){
//   console.log(firstNum - secondNum);
// }else if (operation === "multiply"){
//   console.log(firstNum * secondNum);
// }else if (secondNum === undefined) {
//   console.log (`Seconed Number Not Found`);
//  }else {console.log(operation);}
// }
// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600

// function ageInTime(theAge) {
//   // Your Code Here
//   let AgeByMonths = theAge * 12 ;
//   let AgeByWeeks = theAge * 12 * 4;
//   let AgeByDays = theAge * 365 ;

//   console.log(`Your Age By Years is ${theAge}`);
//   if (theAge > 100 || theAge <10){
//     console.log(`Age out Of Range`)
//   }else {
//     console.log(`Your Age By Months Is ${AgeByMonths}`);
//     console.log(`Your Age By Weeks Is ${AgeByWeeks}`);
//     console.log(`Your Age By Days Is ${AgeByDays} `);
//   } 
// }
// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...arg) {
  
//      return `String [${arg.join("], [")}] => Done !` ;
//   }

//   let names = (...arg) => `String [${arg.join("], [")}] => Done !` ;
 
  
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// /* ================================= */

// // [1] Replace ??? In Return Statement To Get The Output
// // [2] Create The Same Function With Regular Syntax
// // [3] Use Array Inside The Arguments To Get The Output



// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[1];

// console.log(calc(10, myNumbers[0], myNumbers)); // 80  


//    1   objects

// let member = {
//   name : "Elzero",
//   country: "Egypt",
//   age:38,
//   fullDetails: function (){
//     return `My Name Is ${name},My Age Is ${this.age}, I Live in ${this.country}`
//   }
// };

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt


//    2
// Method One
// Create Your Object Here

// let objMethodOne = {property:1};

// console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

// let objMethodTwo = new Object({property :2});

// console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

// let objMethodThree = Object.create({property:3});

// console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

// let objMethodFour = Object.assign({property:4});

// console.log(objMethodFour.property); // "Method Four"

for (i=1;i<11;i++){
  let myElement = document.createElement("div");
  let myPara = document.createElement("p");
  let myH2 = document.createElement("h2");
  let myText1 = document.createTextNode(`Product Title ${i}`);
  let myText2 = document.createTextNode("Product Description");
  
  document.body.appendChild(myElement);
  myElement.className = `product ${i}`;
  myElement.appendChild(myH2);
  myElement.appendChild(myPara);
  myH2.appendChild(myText1);
  myPara.appendChild(myText2);
}



