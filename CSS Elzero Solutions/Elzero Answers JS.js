                  ////////////
// Elzero Answers JS (Assignments & challenges)  //
                  ////////////


//-----------------------//
// ASSIGNMENTS (1 - 9)   //  Reviewed
//-----------------------//

// Assignment (1 of 6)

//Code One
//Not working (The code comes first before defining the elements which will be applied to it)

//Code two
//Working (The code will be loaded after the window loads so the elements will be defined)

//Code three
// Working (The code comes after the elements defined) 

//--------------------------------------------------------------------------------//

// Assignment (2 of 6)

// let myElement= document.write("<h1>Elzero</h1>");;
// document.querySelector("h1").style.color = "blue";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.fontWeight = "bold";
// document.querySelector("h1").style.textAlign = "center";
// document.querySelector("h1").style.fontFamily = "arial";

//Alternate Solution
// let elementH1 = document.createElement("h1");
// let textH1 = document.createTextNode("Elzero");
// document.body.appendChild(elementH1).appendChild(textH1);

// document.querySelector("h1").style.color = "blue";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.fontWeight = "bold";
// document.querySelector("h1").style.textAlign = "center";
// document.querySelector("h1").style.fontFamily = "arial";

//--------------------------------------------------------------------------------//

// Assignment (3 of 6)

// console.log("%cElzero %cWeb %cSchool" , "font-size:40px;color: red;" 
//   ,"font-size:40px;font-weight:bold;color:green;" 
//   ,"font-size:40px;color:white;background-color:blue");

//--------------------------------------------------------------------------------//

// Assignment (4 of 6)

// console.groupCollapsed("Group 1");
// console.log("message One");
// console.log("message Two");
// console.groupCollapsed("Child Group");
// console.log("message One");
// console.log("message Two");
// console.groupCollapsed("Grand Child Group");
// console.log("message One");
// console.log("message Two");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.groupCollapsed("Group 2");
// console.log("message One");
// console.log("message Two");

//--------------------------------------------------------------------------------//

// Assignment (5 of 6)

// console.table(["Elzero", "Ahmed" , "Sameh" , "gamal" , "Aya"]);

//--------------------------------------------------------------------------------//

// Assignment (6 of 6)

//Answer 1

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

//Answer 2

//console.log("Iam In Console");
//document.write("Iam In Page");

//################################################################################//


/*
===========================================
1- Variables And Concatenation Challenge        Reviewed
===========================================
*/

/*
// The Challenge

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat
*/

// The Answer

// let cardTitle = "Elzero", cardDescription ="Elzero Web Schoool" , cardDate = "25/10";
// let cardContent = `
// <div>
// <h3>Hello ${cardTitle}</h3>
// <p>${cardDescription}</p>
// <span>${cardDate}</span>
// </div>`
// document.write(cardContent.repeat(4)); 

//################################################################################//


//-----------------------//
// ASSIGNMENTS (10 - 17) //       Reviewed
//-----------------------//

// Assignment (1 of 4)

// let numberOne = 10;
// let numberTwo = 20;

// console.log(numberOne+""+numberTwo);
// console.log(typeof(numberOne+""+numberTwo));
// console.log(`${numberOne}${numberTwo}`);
// console.log(typeof `${numberOne}${numberTwo}`);
// console.log(numberTwo +"\n" + numberOne);
// console.log(`${numberTwo}
// ${numberOne}`);

//--------------------------------------------------------------------------------//

// Assignment (2 of 4)

// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

//Answer in HTML file

//--------------------------------------------------------------------------------//

// Assignment (3 of 4)

// console.log("`I'm In\n\\\\\nLove \\\\ \"\" '''\n+++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");

//--------------------------------------------------------------------------------//

// Assignment (4 of 4)

// let a = 21;
// let b = 20;

// console.log("_"+(a +"_"+ b).repeat(4)+"_"); // _21_2021_2021_2021_20_

//################################################################################//


/* 
========================
2- Operators Challenge          Reviewed
========================
*/

/*
// Challenge 1

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// [++a] [+]
// [++a]
// - Value:
// - Explain:
// [+]
// - Explain:
*/

// The Answer

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++); //100
// console.log(11  +  20  +  80  - 11);  //100

// console.log(++a + -b  + +c++ - -a++ + +a);  //94
// console.log(11  + -20 + 80   - -11  + 12);  //94

// console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //97
// console.log(79  + 20 +  9  *  20  - 21 * 9 +  8  - 1);     //97

//--------------------------------------------------------------------------------//

/*
// Challenge 2

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

// console.log(); // 2000
// console.log(); // 173
*/

// The Answer

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e); // 2000
// console.log(-(--d) + (++e * ++g) + f); // 173


//################################################################################//


//-----------------------//
// ASSIGNMENTS (18 - 22) //     Reviewed
//-----------------------//

// Assignment (1 of 4)

// Replace ? With Arithmetic Operators
// console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

//--------------------------------------------------------------------------------//

// Assignment (2 of 4)

// let num = 3;

// Solution One
// console.log(num + num); // 6

// Solution Two
// console.log(num * --num ); // 6

// Soultion Three
// console.log(num + --num + --num  ); // 6

// Soultion Four
// console.log(num ** --num  - ++num); // 6

// Solution Five
// console.log(++num + true + true); // 6

// Solution Six
// console.log(num * (true + true)); // 6


//--------------------------------------------------------------------------------//

// Assignment (3 of 4)

// let num = "10";

// Solution One
// console.log(+num + +num); // 20

// Solution Two
// console.log(+num + ++num - true); // 20

// Solution Three
// console.log(+num * (true + true)); // 20

// Solution Four
// console.log(-num * -(true + true)); // 20

// Solution Five
// console.log(++num + --num - true); // 20
// console.log(+num + --num + --num - --num ); // 20


//----------------------------------------------------------------------------------//

// Assignment (4 of 4)

// let points = 10;

// console.log(points += true + true + true ); // 13

// console.log(points -= true +true); // 8;

//################################################################################//


/* 
=====================
3- Number Challenge       Reviewed
=====================
*/

/*
// The Challenge

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log();

// Use Variables a + d One Time To Get The Needed Output
console.log(); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log();
console.log();
console.log();
console.log();

// Use Variables b + d To Get This Values
console.log(); // 66.67 => String
console.log(); // 67 => Number
*/

// The Answer

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4 ;

// console.log(parseInt(Math.min(a , b , c, d)));
// console.log(Math.pow(a , parseInt(d))); //10000

// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Math.round(d));
// console.log(parseInt(d));

// console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2));  //66.67 string
// console.log(Math.round((Math.trunc(b) / Math.ceil(d)).toFixed(2)));  //67 number


//################################################################################//


/* 
=====================
4- String Challenge       Reviewed
=====================
*/

/*
// The Challenge

All Solutions Must Be In One Chain
You Can Use Concatenate

// let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
// console.log(); // Zero

// 8H
// console.log(); // HHHHHHHH

// Return Array
// console.log(); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
// console.log(); // Elzero School

// Solution Must Be Dynamic Because String May Changes
// console.log(); // eLZERO WEB SCHOOl
*/

// The Answer

// let a = "Elzero Web School";
 

// console.log(a.charAt(2).toUpperCase() + a.slice(3,6));                       //Zero
// console.log(a.charAt(13).toUpperCase().repeat(8));                           //HHHHHHHH
// console.log(a.slice(0,6).split());                                           // [Elzero]
// console.log(`${a.substr(0,6)} ${a.substr(11,6)}`);                           //Elzero School
// console.log(a.charAt(0).toLowerCase()+a.slice(1,a.length).toUpperCase() );   //eLZERO WEB SCHOOl 

//################################################################################//


//-----------------------//
// ASSIGNMENTS (23 - 26) //      Reviewed
//-----------------------//

// Assignment (1 of 7)

// // Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log(1e5);                        // 100000 //1
// console.log(10**5);                      // 100000 //2
// console.log(Math.pow(10,5));             // 100000 //3
// console.log(Math.round(100_000.4));      // 100000 //4
// console.log(Math.floor(100_000.6));      // 100000 //5
// console.log(Math.trunc(100_000.8));      // 100000 //6
// console.log(Math.ceil(99999.1));         // 100000 //7
// console.log(+"100000");                  // 100000 //8
// console.log(Number("100000"));           // 100000 //9
// console.log(1e2 * 1e3);                  // 100000 //10
// console.log(1e6 / 1e1);                  // 100000 //11
// console.log(1e6 - 9e5);                  // 100000 //12
// console.log(parseInt("100000"));         // 100000 //13
// console.log(+(100000).toFixed(0));       // 100000 //14

//----------------------------------------------------------------------------------//

// Assignment (2 of 7)

// console.log(-Number.MIN_SAFE_INTEGER);

//----------------------------------------------------------------------------------//

// Assignment (3 of 7)

// console.log(Number.MAX_SAFE_INTEGER.toFixed().length);

//----------------------------------------------------------------------------------//

// Assignment (4 of 7)

// let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); // 100
// console.log(+(parseFloat(myVar).toFixed(2))); // 100.57

//----------------------------------------------------------------------------------//

// Assignment (5 of 7)

// let num = 10;

// console.log(Number.isInteger(num) + Number.isInteger(num) ); // 2

//----------------------------------------------------------------------------------//

// Assignment (6 of 7)

// let flt = 10.4;

// console.log(Math.trunc(flt));    // 10
// console.log(Math.round(flt));    // 10
// console.log(Math.floor(flt));    // 10
// console.log(parseInt(flt));      // 10
// console.log(+(flt).toFixed());   // 10

//----------------------------------------------------------------------------------//

// Assignment (7 of 7)

// console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

//################################################################################//


//-----------------------//
// ASSIGNMENTS (27 - 30) //     Reviewed
//-----------------------//

// Assignment (1 of 2)

// let userName = "Elzero";
// console.log(userName[0].toLowerCase());                      // e
// console.log(userName.charAt(0).toLowerCase());               // e
// console.log(userName.slice(0,1).toLowerCase());              // e
// console.log(userName.substring(0,1).toLowerCase());          // e
// console.log(userName.substr(0,1).toLowerCase());             // e
// console.log(userName.split("")[0].toLowerCase().repeat(3));  // eee

//--------------------------------------------------------------------------------//

// Assignment (2 of 2)

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True

//################################################################################//


/* 
==========================
5- If Condition Challenge       Reviewed
==========================
*/

/*
// The Challenge 1

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
*/

// The Answer

// let a = 10 ;

// (a < 10) 
// ? console.log(10) 
// : a >= 10 && a <= 40 
// ? console.log("10 To 40") 
// : a > 40 
// ? console.log(" > 40") 
// : console.log("Unknown");

//--------------------------------------------------------------------------------//

/*
// The Challenge 2

let st = "Elzero Web School";

if (“????” === “34”) {
  console.log(“Good”);
}

// W Position May Change
if ("????" === "w") {
  console.log("Good");
}

if ("????" !== "string") {
  console.log("Good");
}

if ("????" === "number") {
  console.log("Good");
}

if ("????" === "ElzeroElzero") {
  console.log("Good");
}
*/

//The answer

// let st = "Elzero Web School" ;

// if ((st.length *2).toString() === "34") {
//     console.log("Good");
// }

// if ((st.split("")[st.indexOf("W")]).toLowerCase() === "w") {
//     console.log("Good");
// }

// if (typeof (st.length) !== "string") {
//  console.log ("Good");
// }

// if (typeof (st.length) === "number") {
//    console.log ("Good");
// }

// if (st.slice(0,6).repeat(2)==="ElzeroElzero") {
//    console.log ("Good");
// }

//################################################################################//


/* 
======================================
 6- Switch And If Condition Challenge       Reviewed
======================================
*/

/*
//Switch Challenge

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
*/

// The Answer

// let job = "Manager";
// let salary = 0;

// switch (job) {
//   case "Manager" :
//   salary = 8000;
//   break;
//  case "IT" :
//  case "Support" :
//   salary = 6000;
//   break;
//  case "Developer" :
//  case "Designer" : 
//   salary = 7000;
//   break;
// default :
//   salary = 4000;
// } 
// console.log(salary);

//--------------------------------------------------------------------------------//

/*
// If Challenge

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
*/

// The Answer

// let holidays = 6;
// let money = 0;

// if (holidays === 0) {
//   money = 5000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 1 || holidays === 2){
//   money = 3000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 3) {
//   money = 2000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 4) {
//   money = 1000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 5) {
//   money = 0;
//   console.log(`My Money is ${money}`);
//  } else {
//     money = 0;
//     console.log(`My Money is ${money}`);
// }  

//################################################################################//


//-----------------------//
// ASSIGNMENTS (31 - 32) //       Reviewed
//-----------------------//

// Assignment (1 of 3)

// console.log(100 == "100");           // true
// console.log(100 < 1000);             // true
// console.log(110 > 100 && 10 < 20);   // true
// console.log(-10 == "-10");           // true
// console.log(+ -50 != +"-40");        // true
// console.log(- 10 <  -"-40");         // true
// console.log(+ "10" == + 10);         // true
// console.log( - -20 > false);         // true 

//--------------------------------------------------------------------------------//

// Assignment (2 of 3)

// let num1 = 10;
// let num2 = 20;
// console.log(num1 < num2);        // true
// console.log(num1 <= num2);       // true
// console.log(num1 != num2);       // true
// console.log(num1 !== num2);      // true
// console.log(num1 > - num2 );     // true
// console.log(num1 >= - num2);     // true 

//--------------------------------------------------------------------------------//

// Assignment (3 of 3)

// let a = 20;
// let b = 30;
// let c = 10;
// console.log(a < b && a > c || a == b);                       // true
// console.log(a < b || a >= c);                                // true
// console.log(!(a > b) && !(a >= b) && !(a < c) && !(a <= c)); // true 

//################################################################################//


//-----------------------//
// ASSIGNMENTS (33 - 37) //    Reviewed
//-----------------------//

// Assignment (1 of 4)

// let num1 = 150;

// if (num1 <10) {
// console.log("00" + num1);
// }else if (10 < num1 && num1 < 100){
//   console.log("0" + num1);
// }else  {
//   console.log(num1); 
// }

//--------------------------------------------------------------------------------//

// Assignment (2 of 4)

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 == str) {
//   console.log("{num1} Is The Same Value As {str}");
// }
// if(num1 !== str) {
//  console.log( "{num1} Is The Same Value As {str} But Not The Same Type" );
// }

// if (num1 != str2) {
//  console.log( "{num1} Is Not The Same Value Or The Same Type As {str2}");
// }
// if (str != str2){
//  console.log("{str} Is The Same Type As {str2} But Not The Same Value"); 
// }

//--------------------------------------------------------------------------------//

// Assignment (3 of 4)

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

//  if ( ((num3 > num1) && (num3 !== num2)) 
//    && ((num3 > num1) && (num3 !== num2)) 
//    && ((num3 != num1)&& (num3 !== num2))) {
//   console.log(`"30 Is Larger Than 10 And Type string Not The Same Type As number"
//     "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//     "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"`);
//  }

//--------------------------------------------------------------------------------//

// Assignment (4 of 4)

// let num1 = 11;
// let num2 = 10;
// let num3 = 11;
// let num4 = 33;

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// } 

//################################################################################//


//-----------------------//
// ASSIGNMENTS (38 - 39) //    Reviewed
//-----------------------//

// Assignment (1 of 1)

// let day = "   fggy  ";
// let dayMod = `${day.trim().slice(0,1).toUpperCase()}${day.trim().slice(1)}` ;
// // You Need To Remove Spaces And Make First Letter Capital => Friday

// console.log(dayMod);
// switch (dayMod) {
// case "Friday":
// case "Saturday":
// case "Sunday":
// console.log(`Its ${dayMod}, "No Appointments Available"`) ;
// break;
 
// case "Monday":
// case "Thursday":
// console.log(`Its ${dayMod}, "From 10:00 AM To 5:00 PM"`);
// break;

// case "Tuesday":
// console.log(`Its ${dayMod}, "From 10:00 AM To 6:00 PM"`);
// break;

// case "Wednesday":
// console.log(`Its ${dayMod}, "From 10:00 AM To 7:00 PM"`);
// break;

// default:
// console.log(`Its ${dayMod},"Its Not A Valid Day"`);
// break;
// }

//################################################################################//


/* 
====================
 7- Array Challenge      Reviewed   
====================
*/

/*
// The Challenge

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice("????")); // ["Elham", "Mazero"]

console.log(); // "Elzero"

console.log(); // "rO"
*/

//The Answer

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// console.log(my.reverse().slice(--counter)); // ["Osama", "Elham", "Mazero", "Ahmed"];
// //                                 2
// console.log(my.slice(++counter,--zero)); // ["Elham", "Mazero"]
// //                      3         -1
// console.log(my[counter].slice(++zero,--counter) + my[my.length - counter].slice(counter)); // "Elzero"

// console.log(my.reverse()[++zero].slice(my.length-counter,my.length- --counter) + my[counter][my.length-counter].toUpperCase()); // "rO"
 
//################################################################################//


//-----------------------//
// ASSIGNMENTS (40 - 47) //     Reviewed
//-----------------------//

// Assignment (1 of 6)

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// Method 1
// myFriends.pop();  // Gamal
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
// console.log(myFriends.slice(myFriends.length - ++num,--num)); // ["Ahmed", "Elham", "Osama"];

// Method 3 (additional)
// myFriends.length = num;
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//--------------------------------------------------------------------------------//

// Assignment (2 of 6)

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// friends.pop();
// friends.shift();
// console.log(friends); // ["Eman", "Osama"]

//--------------------------------------------------------------------------------//

// Assignment (3 of 6)

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// finalArr = arrOne.concat(arrTwo).sort().reverse();
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//Alternate solution

// finalArr = [arrTwo.pop(),arrOne.pop(),arrOne.reverse(),arrTwo.reverse()].flat();
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//Alternate 2 Solution

// finalArr = [arrTwo.pop(),arrOne.pop(),arrOne.pop(),arrOne.pop(),arrTwo.pop(),arrTwo.pop()];
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


//--------------------------------------------------------------------------------//

// Assignment (4 of 6)

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

//--------------------------------------------------------------------------------//

// Assignment (5 of 6)

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions

// Solution 1
// if (haystack.includes(needle)== true){
//   console.log("Found");
// }

// Solution 2
// haystack.pop()
// if (haystack.lastIndexOf(needle)==1){
//   console.log("Found");
// }

// Solution 3
// if (haystack.indexOf(needle) == 1) {
//   console.log("Found");
// }

//Alternate Solution 1
// let i = 0;
// while (i<haystack.length) {
//   switch (haystack[i]){
//   case "JS": 
//   console.log("Found");
//   }
//   i++
// }

//Alternate Solution 2
// for (let i = 0 ; i<haystack.length ; i++) {
//   if (haystack[i] === "JS") {
//     console.log("Found");
//   }
// }

//--------------------------------------------------------------------------------//

// Assignment (6 of 6)

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();
// console.log(allArrs); // fxy

//Alternate Solution

// let ind = arr2.length - arr1.length
// allArrs = [arr2[++ind],arr1.pop(), arr2.pop() ];
// allArrs = allArrs.join("").toLowerCase();
// console.log(allArrs); // fxy

//################################################################################//


/* 
====================
 8- Loop Challenge      Reviewed    
====================
*/

/*
//The Challenge 

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have X Admins</div>`);
*/

// The Answer

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Gmgad", "Samah", "Ameer", "Omar", "Othman", "Amany","Odesa" ,"Samia", "Anwar" , "Samar"];
// let Admins = myAdmins.length;
// let members = myEmployees.length;
// document.write(`<div>We Have ${Admins} Admins</div>`);
// document.write(`<div>We Have ${members} Emplyees</div>`);
// for (let i = 0; i< myAdmins.length; i++){
//   if (myAdmins[i] === "Stop") break;
//   document.write(`<div>The Admin For Team ${i+1} Is ${myAdmins[i]} </div> `);
//   document.write(`<hr>`);
//   document.write(`<h3>Team Members: </h3>`)
//   let counter = 1;
//   for (let j = 0; j < myEmployees.length;j++) {
//     if (myEmployees[j].charAt(0) == myAdmins[i].charAt(0)){  
//       document.write(`<p>-${counter++} ${myEmployees[j]}</p>`);
//     }
//   } 
// }

//################################################################################//


//-----------------------//
// ASSIGNMENTS (48 - 53) //    Reviewed
//-----------------------//

// Assignment (1 of 7)

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start ; i <= end;i+=start) {
//   if (i === exclude) continue ;
//   console.log(i);
// }

//--------------------------------------------------------------------------------//

// Assignment (2 of 7)

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i >= stop ; i--) {
//   if (i < start) {
//     console.log(`${end}${i}`)
//   } else {
//     console.log(i);
//   }
// }

//--------------------------------------------------------------------------------//

// Assignment (3 of 7)

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= 6; i++){
//   console.log(i);
//   for (let j = breaker;j <end ; j+=breaker){
//     console.log(`-- ${j}`);
//   }
// }

//--------------------------------------------------------------------------------//

// Assignment (4 of 7)

// let index = 10;
// let jump = 2;

// for (let i = index; i > jump; i -= jump) {
//   console.log(i);
// }

//--------------------------------------------------------------------------------//

// Assignment (5 of 7)

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// let count = letter.length;
// for (let i = count - count ; i <friends.length ; i++) {
//    if (friends[i][letter.length - letter.length] === letter.toUpperCase()) continue ;
//   console.log(`${count++} => ${friends[i]}`);
// }

//--------------------------------------------------------------------------------//

// Assignment (6 of 7)

// let start = 0;
// let swappedName = "elZerO";

// let swappedName1 = [];
// for (let i = start; i < swappedName.length; i++){
//   if ( swappedName[i]===swappedName[i].toUpperCase()){
//      swappedName1[i] = swappedName[i].toLowerCase();
//     swappedName1.push();
//   } else { swappedName1[i] = swappedName[i].toUpperCase();
//     swappedName1.push();
//   }
// }
// console.log(swappedName1.join(""));

//---------------------------------------------------------------------------------------------//

// Assignment (7 of 7)

// let start = 0;
// console.log(start.length);
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for (let i = start; i <mix.length; i++){
//   if (i === start ) continue ;
//   if (typeof mix[i] === "number") {
//     console.log(mix[i]);
//   }
// }

//##############################################################################################//


//-----------------------//
// ASSIGNMENTS (54 - 56) //   Reviewed
//-----------------------//

// Assignment (1 of 1)

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (index < friends.length){
//  if (friends[index][friends.length - friends.length] !== "A"){
//   if (typeof friends[index] !== "number"){
//   console.log(`${++counter} => ${friends[index]}`);
// } 
// }
// index++ ; 
// }

//################################################################################//

/* 
=======================================
 9- Random Argument Function Challenge      Reviewed    
=======================================
*/

/*
//the Challenge

  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/

//The Answer

// function showDetails(...arg){
//   document.write(`<div>`);
//   let string1 , number1 , status1 ;
//   for (let i=0; i<arg.length; i++){
//     typeof arg[i] == "string" 
//       ? string1 = arg[i]
//       : typeof arg[i]== "number"
//       ? number1 = arg[i]
//       : (arg[i])
//       ? status1 = "You Are Available" 
//       : status1 = "You Are not Available"
//   }
//    document.write(`Hello "${string1}", Your Age Is "${number1}" , ${status1}`);
//    document.write(`</div>`);
// }
//  showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available "
//  showDetails(388, "Osaama", true); // "Hello Osama, Your Age Is 38, You Are Available "
//  showDetails(true, 38, "Oosama"); // "Hello Osama, Your Age Is 38, You Are Available "
//  showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available "

//################################################################################//


//-----------------------//
// ASSIGNMENTS (57 - 63) //       Reviewed
//-----------------------//

// Assignment (1 of 6)

// function sayHello(theName,theGender = "") {
//   document.write(`<div>`);
//     if (theGender == "Male") {
//       theGender = "Mr" ; 
//     }else if (theGender == "Female"){
//       theGender = "Miss";
//     }
//     document.write(`Hello ${theGender} ${theName}`) ;
//   document.write(`</div>`);
//   }
  
//   // Needed Output
//    sayHello("Osama", "Male"); // "Hello Mr Osama"
//    sayHello("Eman", "Female"); // "Hello Miss Eman"
//    sayHello("Sameh"); // "Hello Sameh"

//---------------------------------------------------------------------------------------------//

// Assignment (2 of 6)

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

//---------------------------------------------------------------------------------------------//

// Assignment (3 of 6)

// function ageInTime(theAge) {
  
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

//---------------------------------------------------------------------------------------------//

// Assignment (4 of 6)

// function checkStatus(a, b, c) {
  
//   document.write(`<div>`);
//   let string1 , number1 , status1 ;
//   // Check a
//   if (typeof a === "string") {
//     string1 = a;
//   } else if (typeof a === "number") {
//     number1 = a;
//   } else {
//     status1 = a;
//   }
//   // Check b
//   if (typeof b === "string") {
//     string1 = b
//   } else if (typeof b === "number") {
//     number1 = b
//   } else {
//     status1 = b;
//   }
//   // Check c
//   if (typeof c === "string") {
//     string1 = c
//   } else if (typeof c === "number") {
//     number1 = c
//   } else {
//     status1 = c;
//   }

//   if (status1) {
//     status1 = "You Are Available For Hire."
//   } else {
//     status1 = "You Are Not Available For Hire."
//   }
  
//   document.write(`Hello "${string1}", Your Age Is "${number1}" , ${status1}`);
//   document.write(`</div>`);
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


//---------------------------------------------------------------------------------------------//

// Assignment (5 of 6)

// function createSelectBox(startYear, endYear) {
//   // Your Code Here
// document.write(`<select>`);
// for (i = startYear;i <= endYear; i++){
//   document.write(`<option value="${i}">${i}</option>`)
// }
// document.write(`</select>`);

// }
// createSelectBox(2000, 2021);

//---------------------------------------------------------------------------------------------//

// Assignment (6 of 6)

// function multiply(...arg) {
//   let result =1;
//   for (let i=0; i<arg.length; i++){
//     if (typeof arg[i] == "string") continue;
//     arg[i] = Math.trunc(arg[i]);
//     result *= arg[i]; 
//   }
//   console.log(result);
// }

// multiply(10,20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10,12.5,2.055,15, "B"); // 1000

//#####################################################################################//


/* 
==============================
 10- Arrow Function Challenge     Reviewed   
==============================
*/

/*
//The Challenge 

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = function () {
  // Parameter ?
  return "???";
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
*/

//The Answer

// let names = function (...arg) {
//   // Parameter ?
//   return `String [${arg.join("], [")}] => Done !`;
// };

// names = (...arg) =>`String [${arg.join("], [")}] => Done !`;

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

//---------------------------------------------------------------------------------------//

/*
// The Challenge

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => "???";

console.log(calc(10, "???", "???")); // 80
*/

// The Answer

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[1];

// console.log(calc(10, myNumbers[0], ...myNumbers)); // 80  

//###############################################################################//


//-----------------------//
// ASSIGNMENTS (64 - 70) //    Reviewed
//-----------------------//

// Assignment (1 of 4)

// function getDetails(zName, zAge, zCountry) {
//   function namePattern() {
//     // Write Your Code Here
//     // Osama Mohamed => Osama M.
//     // Ahmed ali => Ahmed A.
//     let b1 = zName.split(" ") 
//     return `${b1[0]} ${b1[1][0].toUpperCase()}.`
//   }
//   function ageWithMessage() {
//     // Write Your Code Here
//     // 38 Is My Age => Your Age Is 38
//     // 32 Is The Age => Your Age Is 32
//     let b2 = parseInt(zAge);
//     return `Your Age Is ${b2}`
//   }
//   function countryTwoLetters() {
//     // Write Your Code Here
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//     return `You Live In ${zCountry.substring(0,2).toUpperCase()}`
//   }
//   function fullDetails() {
//     // Write Your Code Here
//     return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

//--------------------------------------------------------------------------------//

// Assignment (2 of 4)

//  let itsMe = () => `Iam A Normal Function`;
// console.log(itsMe()); // Iam A Normal Function

// urlCreate = (protocol, web, tld) =>`${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//--------------------------------------------------------------------------------//

// Assignment (3 of 4)

// let checker =(zName) =>(status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    
// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//--------------------------------------------------------------------------------//

// Assignment (4 of 4)

// function specialMix(...data) {
//   // Your Code Here
//   let result = 0;
//   let result1 = 0 ;
//   for (let i=0; i<data.length;i++) {
//     if (typeof parseInt(data[i]) === "number"  ) {
//       result += parseInt(data[i]);
//       }
//       if (typeof data[i] === "string" && isNaN(parseInt(data[i])) ) {
//         result1++ ;
//         if (result1 === data.length) {
//           return "All Is String"; 
//         } 
//       }
//     }
//      return `The result is ${result}`;
//   }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool" )); // 50
// console.log(specialMix("Test", "Cool", "Test" ,"hello")); // All Is Strings

//################################################################################//

/* 
=======================================
 11- Higher Order Functions Challenges      Reviewed    
=======================================
*/

/*
//The Challenge

You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = '?????';
console.log(solution); // Elzero Web School
*/

//The Answer

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("")           //Return an array from the string
// .filter(function (ele){
//   return isNaN(ele)})                       //Return an array without the numbers 
// .filter((ele) => ele !=="," )               //Return an array without ,
// .reduce(function (acc , cur) {
//   return acc + cur;})                        //Return a string from the array
// .split("")                                   //Return an array from the string
// .slice(true ,-isNaN(myString))               //Return an array without start & end 
// .map(function (ele) {                        // isNaN(mystring) = true
//   ele === "_" ? ele = " ": "";
//   return ele
// })                                  
// .join("");                                    // convert the array to string
// console.log(solution); // Elzero Web School

//################################################################################//


//-----------------------//
// ASSIGNMENTS (71 - 78) //    Reviewed
//-----------------------//

// Assignment (1 of 5)  

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let solution1 = mix.map((ele) => typeof ele === "number" ? ele="":ele)
// .reduce((acc,cur) => acc+cur); 

// console.log(solution1);   // Elzero

//--------------------------------------------------------------------------------//

// Assignment (2 of 5) 

// let myString = "EElllzzzzzzzeroo";
// let solution2 = myString.split("")
// .filter((ele , i) => myString.indexOf(ele) === i )
// .join("");

// console.log(solution2);   // Elzero

//--------------------------------------------------------------------------------//

// Assignment (3 of 5) 

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let solution3 = myArray.reduce(function (acc,cur) {
//     console.log(`acc is ${acc}`);
//   console.log(`current is ${cur}`);
//   console.log(`#######`)
//  return acc.concat(cur);
// }, [])
// .join("");
// console.log(solution3);   // Elzero

//--------------------------------------------------------------------------------//

// Assignment (4 of 5) 

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let solution4 = numsAndStrings
// .filter((ele)=> typeof ele !== "string")
// .map((ele) => -ele) ;

// console.log(solution4);   // [-1, -10, 10, 20, -5, -3]

//--------------------------------------------------------------------------------//

// Assignment (5 of 5) 

// let nums = [2, 12, 11, 5, 10, 1, 99];
// let solution5 = nums.reduce(function (acc , cur) {
//   console.log(acc);
//   console.log(cur);
//   console.log(`########`);
//   if (cur %2 === 0) {
//     acc *= cur;
//   } else {acc += cur};
// return acc ;
// },1);

// console.log(solution5);    // 500

//##############################################################################//


//-----------------------//
// ASSIGNMENTS (79 - 85) //    Reviewed
//-----------------------//


// Assignment (1 of 4)

// let member = {
//   name : "Elzero",
//   country: "Egypt",
//   age:38,
//   fullDetails: function (){
//     return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}.`
//   }
// };

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails()); 
// //My Name Is Elzero, My Age Is 38, I Live in Egypt

//--------------------------------------------------------------------------------//

// Assignment (2 of 4)

//  // Method One

// let objMethodOne = {property:1};

// console.log(objMethodOne.property); // "Method One"

// // Method Two

// let objMethodTwo = new Object({property :2});

// console.log(objMethodTwo.property); // "Method Two"

// // Method Three

// let objMethodThree = Object.create({property:3});

// console.log(objMethodThree.property); // "Method Three"

// // Method Four

// let objMethodFour = Object.assign({property:4});

// console.log(objMethodFour.property); // "Method Four"

//--------------------------------------------------------------------------------//

// Assignment (3 of 4)

// let a = 1;
// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };
// let twoNums = {
//   e: 5,
//   f: 6,
// };

// let finalObject = Object.assign({},{a},threeNums,twoNums)
// console.log(finalObject);

//--------------------------------------------------------------------------------//

// Assignment (4 of 4)

// // The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?

// let objectLength = Object.keys(myFavGames).length;
// let objectArr = Object.keys(myFavGames["Trinity Universe"]);
// let objectLength1= Object.keys(myFavGames["Trinity Universe"]).length;
// let objectArr1= myFavGames["YS"]["bestThree"]["one"];
// console.log(objectLength);
// console.log(objectArr);
// console.log(objectLength1);
// console.log(objectArr1);

//  for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)}`);
//   console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]]["publisher"]}`);
//   console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]]["price"]}`);

// // Check If Nested Object Has Property (bestThree)

//   if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
//       console.log("- Game Has Releases");
//       console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["one"]}`);
//       console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["two"]}`);
//       console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["three"]}`);
//   }

//   console.log("#".repeat(20));
// }

//##############################################################################//


//-----------------------//
// ASSIGNMENTS (86 - 93) // 
//-----------------------//

// Assignment (1 of 6)

//html <div id="elzero" class="element" name="js">JavaScript</div>

// console.log(document.querySelector("div"));                  //1
// console.log(document.querySelector("#elzero"));              //2
// console.log(document.querySelector(".element"));             //3
// console.log(document.querySelector("div[name]"));            //4
// console.log(document.querySelector("[name = 'js']"));        //5
// console.log(document.querySelectorAll("div")[0]);            //6
// console.log(document.querySelectorAll("#elzero")[0]);        //7
// console.log(document.querySelectorAll(".element")[0]);       //8
// console.log(document.querySelectorAll("div[name]")[0]);      //9
// console.log(document.getElementsByTagName("div")[0]);        //10
// console.log(document.getElementsByClassName("element")[0]);  //11
// console.log(document.getElementById("elzero"));              //12
// console.log(document.getElementsByName("js")[0]);            //13
// console.log(document.body.children[0]);                      //14
// console.log(document.body.childNodes[0]);                    //15
// console.log(document.body.firstChild);                       //16
// console.log(document.body.firstElementChild);                //17

//--------------------------------------------------------------------------------//

// Assignment (2 of 6)

// for(let i=0;i<document.images.length;i++){
//   document.getElementsByTagName("img")[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
//   document.querySelectorAll("div img[alt]")[i].alt = "Elzero Logo";
//   document.images[i].style = "background-color:red" ;
//   console.log(document.images[i].alt);
// };

//--------------------------------------------------------------------------------//

// Assignment (3 of 6)

// let input1 = document.forms[0][0];
// let output1= document.getElementsByClassName("result")[0];
// console.log(output1);
//  input1.oninput = function(){
//   output1.innerHTML = `{${input1.value}} USD Dollar = {${(input1.value * 15.6).toFixed(2)}} Egyptian Pound`;
// }

//--------------------------------------------------------------------------------//

// Assignment (4 of 6)

// let divOne = document.querySelector(".one");
// let divTwo = document.querySelector(".two");

// divOne.title = divOne.className;
// divTwo.title = divTwo.className;

// let divOneContent = divOne.innerHTML;    // divOneContent = Two
// divOne.innerHTML = divTwo.innerHTML;
// divTwo.innerHTML = `${divOneContent} ${divOne.attributes.length}`;

//--------------------------------------------------------------------------------//

// Assignment (5 of 6)

// let img1 = document.querySelectorAll("img");
// for (let i=0;i<img1.length;i++){
//    if (img1[i].hasAttribute("alt")){
//     img1[i].alt = "Old";
//   }else {
//     img1[i].alt= "Elzero New";
//   };
// };

//--------------------------------------------------------------------------------//

// Assignment (6 of 6)

// let input = document.querySelectorAll(".input");          // Select inputs and select fields 
// let submit = document.querySelector("[type= 'submit']");  // Select Submit button 

// // inputs and select fields  style
// for(let i = 0; i < input.length; i++){
//   input[i].style.display = "block";
//   input[i].style.boxSizing = "border-box";
//   input[i].style.width = "250px";
//   input[i].style.padding = "10px";
//   input[i].style.backgroundColor = "#f5f5fa";
//   input[i].style.margin = "15px auto";
//   input[i].style.borderRadius = ".5rem";
//   input[i].style.border = "1px solid black"; 
// }
// // Submit button style (create) 
// submit.style.backgroundColor = "#009784";
// submit.style.display = "block";
// submit.style.width = "250px";
// submit.style.padding = "10px";
// submit.style.borderRadius = ".5rem";
// submit.style.border = "none";
// submit.style.margin = "15px auto";
// submit.style.color = "white";           


// let form = document.forms;                               //Select the form element
// let elNum = document.getElementsByName("elements")[0];   //Select number field
// let type = document.querySelector("select");             //Select the select field 
// let text = document.getElementsByName("texts")[0];       //Select the text field
// let results = document.querySelector(".results");        // div containing the output

// form[0].onsubmit = function(el){
//   let box = document.querySelectorAll(".box");  // Select the created elements
//   box.forEach(el => el.remove());   // Remove the previous result
//   el.preventDefault();              // Prevent the form to send data           

//   // For Loop for creating & styling & adding elements in the main div
//   for(let i = 1; i <= elNum.value; i++){
//     // create div or section accoring to selection option
//     let myEl = document.createElement(type.value);
//     // create text from the text entered
//     let myText = document.createTextNode(text.value);  

//     // Add the attributes to the created elemnet
//     myEl.className = "box";
//     myEl.title = "Element";
//     myEl.id = `id-${i}`;

//     // element(div or section) output style
//     myEl.style.display = "block";
//     myEl.style.width = "30%";
//     myEl.style.margin = "10px";
//     myEl.style.padding = "15px";
//     myEl.style.color = "white";
//     myEl.style.backgroundColor = "#fc551f";
//     myEl.style.textAlign = "center";
//     myEl.style.borderRadius = ".5rem";
//     myEl.style.boxSizing = "border-box";

//     results.appendChild(myEl);    // add each output elements to the main div
//     myEl.appendChild(myText);     // add text to each output element
//     }

//   // The Container div Style  
//   results.style.display= "flex";
//   results.style.flexWrap = "wrap";
//   results.style.justifyContent = "space-between";
//   results.style.marginInline= "40px";
// };

//#################################################################################//


// Challenge in video 90 (create 100 cards using looping)

// for (i=1;i<100;i++){
//   let myElement = document.createElement("div");
//   let myPara = document.createElement("p");
//   let myH2 = document.createElement("h2");
//   let myText1 = document.createTextNode(`Product Title ${i}`);
//   let myText2 = document.createTextNode("Product Description");
  
//   document.body.appendChild(myElement);
//   myElement.className = `product ${i}`;
//   myElement.appendChild(myH2);
//   myElement.appendChild(myPara);
//   myH2.appendChild(myText1);
//   myPara.appendChild(myText2);
// };

//#################################################################################//


// Undefined Answer 2
// let arr1 = [[1,2],[3,4],[5,6]];

// for (i=0; i<arr1.length;i++){
//   for (let j=0;j<arr1[i].length;j++){
//     console.log(arr1[i][j]);
//   }
//   console.log(arr1[i]);
// };

//#################################################################################//


/* 
===================
 12- DOM Challenge    Not solved   
===================
*/

/*
  The Challenge is a figure (No Code)
*/

// The Answer





//#################################################################################//

//----------------------- //
// ASSIGNMENTS (94 - 101) //    Not solved  
//----------------------- //

// Assignment (1 of 5)


//--------------------------------------------------------------------------------//

//#################################################################################//


//----------------------- //
// ASSIGNMENTS (102 - 110) //    Not solved  
//----------------------- //

// Assignment (1 of 5)


//--------------------------------------------------------------------------------//

//#################################################################################//

/* 
===================
 13- BOM Challenge   Not solved 
===================
*/

/*
   The Challenge is a figure (No Code)
*/

// The Answer



//#################################################################################//


//----------------------- //
// ASSIGNMENTS (111 - 114) //    Not solved  
//----------------------- //

// Assignment (1 of 2)


//--------------------------------------------------------------------------------//

//#################################################################################//

/* 
=============================
 14- Destructuring Challenge   Not solved 
=============================
*/

/*
// The Challenge

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
*/

// The Answer



//#################################################################################//


//----------------------- //
// ASSIGNMENTS (115 - 122) //    Not solved  
//----------------------- //

// Assignment (1 of 6)


//--------------------------------------------------------------------------------//

//#################################################################################//

/* 
===========================
 15- Map And Set Challenge       Not solved 
===========================
*/

/*              
// The Challenge

Map And Set + What You Learn => Challenge
Requirements
- You Cant Use Numbers Or True Or False
- Don't Use Array Indexes
- You Cant Use Loop
- You Cant Use Any Higher Order Function
- Only One Line Solution Inside Console
- If You Use Length => Then Only Time Only
Hints
- You Can Use * Operator Only In Calculation
- Set
- Spread Operator
- Math Object Methods

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log("Your Solution Here"); // 210
*/

// The Answer



//#################################################################################//


//----------------------- //
// ASSIGNMENTS (123 - 133) //    Not solved  
//----------------------- //

// Assignment (1 of 8)


//--------------------------------------------------------------------------------//

//#################################################################################//

/* 
==================================
 16- Regular Expression Challenge     Not solved 
==================================
*/

/*
// The Challenge

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = //;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
*/

// The answer



//#################################################################################//


//----------------------- //
// ASSIGNMENTS (134 - 146) //    Not solved  
//----------------------- //

// Assignment (1 of 5)


//--------------------------------------------------------------------------------//

//#################################################################################//


//----------------------- //
// ASSIGNMENTS (147 - 158) //    Not solved  
//----------------------- //

// Assignment (1 of 5)


//--------------------------------------------------------------------------------//

//#################################################################################//


//----------------------- //
// ASSIGNMENTS (159 - 168) //    Not solved  
//----------------------- //

// Assignment (1 of 8)


//--------------------------------------------------------------------------------//

//#################################################################################//


//----------------------- //
// ASSIGNMENTS (169 - 178) //    Not solved  
//----------------------- //

// Assignment (1 of 4)


//--------------------------------------------------------------------------------//

//#################################################################################//


//----------------------- //
// ASSIGNMENTS (179 - 188) //    Not solved  
//----------------------- //

// Assignment (1 of 2)


//--------------------------------------------------------------------------------//

//#################################################################################//
