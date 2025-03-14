/*let cardTitle = "Elzero", cardDescription ="Elzero Web Schoool" , cardDate = "25/10";
let cardContent = `
<div>
<h3>Hello ${cardTitle}</h3>
<p>${cardDescription}</p>
<span>${cardDate}</span>
</div>`
document.write(cardContent.repeat(4)); */

/*let NumberOne = 10;
let Numbertwo = 20;
console.log(NumberOne+""+Numbertwo);
console.log(typeof(NumberOne+""+Numbertwo));*/

/*console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object */
/* `I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""`` */
 /*let a = 10;
 let b = "20";
 let c = 80;
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
console.log(79 + 20 + 9 * 20 - 21 * 9 + 8 - 1);
console.log(Number.NaN);*/

/*let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4 ;

console.log(parseInt(Math.min(a , b , c, d)));
console.log(Math.pow(a , parseInt(d))); //10000

console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(parseInt(d));

console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2));  //66.67 string
console.log(Math.round((Math.trunc(b) / Math.ceil(d)).toFixed(2)));  //67 number
console.log(Math.random() *4); */

/*let theName = "hossam hussein";

console.log(theName.length);
console.log(theName);
console.log(theName.split("")); */

// let userName = "Elzero";
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName.slice(0,1).toLowerCase()); // e
// console.log(userName.substring(0,1).toLowerCase()); // e
// console.log(userName.substr(0,1).toLowerCase()); // e
// console.log(userName.split("")[0].toLowerCase().repeat(3)); // eee

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); //

// let st = "Elzero Web School";

// if ((st.length * 2).toString() === "34" ) {
//   console.log ("Good");}

// if (st.split("")[st.indexOf("W")].toLowerCase() === "w") {
//  console.log ("Good");}

// if (typeof(s) !== "string"){
//  console.log ("Good");}

// if (typeof(st.length === "number")){
//    console.log ("Good");}

// if (st.slice(0,6).repeat(2)==="ElzeroElzero"){
//    console.log ("Good");}

/*let num1 = 500;
console.log(num1);
if (num1 <10) {
console.log("00" + num1);
}else if (10 < num1 && num1 < 100){
  console.log("0" + num1);
}else  {
  console.log(num1); 
} */


/* Edit What You Want Here

let num1 = 11;
let num2 = 3;
let num3 = 11;
let num4 = 40;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times


// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
} */

/*let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if(num1 == str) {
 console.log( "{num1} Is The Same Value As {str} But Not The Same Type" );
}

if (num1 !== str2) {
 console.log( "{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (typeof(str) === typeof(str2)){
 console.log("{str} Is The Same Type As {str2} But Not The Same Value"); 
}*/

/*
  Switch Challenge
*/

// let job = "IT";
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

// /*
//   If Challenge

// */
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

// let day = "   monday  ";
// let dayMod = `${day.trim().slice(0,1).toUpperCase()}${day.trim().slice(1)}` ;
// // You Need To Remove Spaces And Make First Letter Capital => Friday
// console.log(dayMod);
//  switch (dayMod) {
// case "Friday":
// case "Saturday":
// case "Sunday":
// console.log(`Its ${dayMod}, "No Appointments Available"`) ;
// break;
 
// case "Monday":
// case "Thursday":
//   console.log(`Its ${dayMod}, "From 10:00 AM To 5:00 PM"`);

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"
//  }

/*
  Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Gmgad", "Samah", "Ameer", "Omar", "Othman", "Amany","Odesa" ,"Samia", "Anwar" , "Samar", ];
// Admins = myAdmins.length;
// members = myEmployees.length;
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

//    1 
// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start ; i <= end;i+=start) {
//   if (i === exclude) continue ;
//   console.log(i);
// }

//    2
// let start = 10;
// let end = 0;
// let stop = 3;
// for (let i = start; i >= stop ; i--) {
//   if (i <start){
//     console.log(`${end}${i}`)
//   } else {
//     console.log(i);
//   }
// }

//    3
// let start = 1;
// let end = 6;
// let breaker = 2;
// for (let i = start; i <= 6; i++){
//   console.log(i);
//   for (let j = breaker;j <end ; j+=breaker){
//     console.log(`-- ${j}`);
//   }
// }

//    4
//  

//    5
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let count = letter.length;
// for (let i = letter.length - letter.length ; i <friends.length ; i++) {
//    if (friends[i][letter.length - letter.length] === letter.toUpperCase()) continue ;
//   console.log(`${count++} =>${friends[i]}`);
// }

//    6
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

//    7
// let start = 0;
// console.log(start.length);
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for (let i = start; i <mix.length; i++){
//   if (i === start ) continue ;
//   if (typeof mix[i] === "number") {
//     console.log(mix[i]);
//   }
// }

//    8  
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

/*
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
*/

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
//    document.write(`Hello "${string1}", Your Age Is "${number1}" , #${status1}#`);
//    document.write(`</div>`);
// }
//  showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//  showDetails(388, "Osaama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//  showDetails(true, 38, "Oosama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//  showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// function sayHello(theName,theGender = "") {
// document.write(`<div>`);
//   if (theGender == "Male") {
//     theGender = "Mr" ; 
//   }else if(theGender == "Female"){
//     theGender = "Miss";
//   }
//   document.write(`Hello ${theGender} ${theName}`) ;
// document.write(`</div>`);
// }

// // Needed Output
//  sayHello("Osama", "Male"); // "Hello Mr Osama"
//  sayHello("Eman", "Female"); // "Hello Miss Eman"
//  sayHello("Sameh"); // "Hello Sameh"

// function createSelectBox(startYear, endYear) {
//   // Your Code Here
// document.write(`<select>`);
// for (i = startYear;i <= endYear; i++){
//   document.write(`<option value="${i}">${i}</option>`)
// }
// document.write(`</select>`);

// }
// createSelectBox(2000, 2021);


// function multiply(...arg) {
//   let result =1;
//   for (let i=0; i<arg.length; i++){
//     if (typeof arg[i] == "string") continue;
//     arg[i] = Math.trunc(arg[i]);
//     result *= arg[i]; 
//   }
//   console.log(result);
// }

// multiply(); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10,12.5,2.055,15, "B"); // 1000



/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...arg) {
//   // Parameter ?
//   return `String [${arg.join("], [")}] => Done !`;
// };

// let names = (...arg) =>`String [${arg.join("], [")}] => Done !`;


// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[+true];

// console.log(calc(10, myNumbers[+false], ...myNumbers)); // 80

// let myNumbers = [20, 50, 10, 60];

// let calc = function (one, two, ...nums) {
// return one + two + nums[+true];
// } ;

// console.log(calc(10, myNumbers[+false], ...myNumbers)); // 80

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


// a = "Osama Mohamed"
// b = a.split(" ");
// console.log();
// console.log(`${b[0]} ${b[1][0].toUpperCase()}.`);

//  let itsMe = () => `Iam A Normal Function`;


// console.log(itsMe()); // Iam A Normal Function

// urlCreate = (protocol, web, tld) =>`${protocol}://www.${web}.${tld}`;


// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// let checker =(zName) =>(status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    
// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// function specialMix(...data) {
//   // Your Code Here
//   let result = 0;
//   let result1 = 0 ;
//   for (let i=0; i<data.length;i++){
     
//     if (typeof parseInt(data[i]) === "number" && !isNaN(parseInt(data[i])) ){
//       result += parseInt(data[i]);
//       }
//       if (typeof data[i] === "string" && isNaN(parseInt(data[i])) ) {
//         result1++ ;
//         if (result1 === data.length){
//           return "All Is String"; 
//         } 
//       }
//     }
//      return result;
//   }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool" )); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

/*
  Higher Order Functions Challenges

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

*/

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// c = isNaN(myString);
// console.log(c);
// let lele = myString.split("").filter((ele) => !isNaN(ele) )
// .reduce(function (acc , cur){
//  return  ++acc + ++cur; 
// },+false)

// let solution = myString.split("")
// .filter(function (ele){return isNaN(ele)})
// .filter((ele) => ele !==","  )
// .reduce(function (acc , cur) {
// return acc + cur;})
// .split("").slice(true ,18)
// .map(function (ele) {
//   ele === "_" ? ele = " ": "";
//   return ele
// }).join("");

// console.log(solution); // Elzero Web School


//    1   (71-78)
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let solution1 = mix.map((ele) => typeof ele === "number" ? ele="":ele)
// .reduce((acc,cur) => acc+cur);

// // Elzero

// console.log(solution1);

//    2  
// let myString = "EElllzzzzzzzeroo";
// let solution2 = myString.split("")
// .filter((ele ,i) => myString.indexOf(ele) === i )
// .join("");

// // Elzero

//    3

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let solution3 = myArray.reduce(function (acc,cur) {
//     console.log(`acc is ${acc}`);
//   console.log(`current is ${cur}`);
//   console.log(`#######`)
//  return acc.concat(cur);
// }, []);
// console.log(solution3);

//    4

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let solution4 = numsAndStrings.filter((ele)=> typeof ele !== "string")
// .map((ele) => -ele) ;

// // [-1, -10, 10, 20, -5, -3]

// console.log(solution4);

//    5

// let nums = [2, 12, 11, 5, 10, 1, 99];
// let solution5 = nums.reduce(function (acc , cur) {
//   console.log(acc);
//   console.log(cur);
//   console.log(`########`);
//   if (cur %2 === 0) {
//     acc *= cur;
//   }else {acc += cur};
// return acc ;
// },1);

// // 500
// console.log(solution5);


//    3

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


//    4

// The Object To Work With
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


// Code One => How To Get Object Length ?

// let objectLength = Object.keys(myFavGames).length;
// let objectArr = Object.keys(myFavGames["Trinity Universe"]);
// let objectLength1= Object.keys(myFavGames["Trinity Universe"]).length;
// let objectArr1= myFavGames["YS"]["bestThree"]["one"];
// console.log(objectLength);
// console.log(objectArr);
// console.log(objectLength1);
// console.log(objectArr1);

//  for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//   console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]]["publisher"]}`);
//   console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]]["price"]}`);

//Check If Nested Object Has Property (bestThree)

//   if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
//       console.log("- Game Has Releases");
//       console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["one"]}`);
//       console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["two"]}`);
//       console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["three"]}`);
//   }

//   console.log("#".repeat(20));
// }


//  1   (86-93)
//html <div id="elzero" class="element" name="js">JavaScript</div>

// console.log(document.querySelector("div"));
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelector("div[name]"));
// console.log(document.querySelector("[name = 'js']"));
// console.log(document.querySelectorAll("div")[0]);
// console.log(document.querySelectorAll("#elzero")[0]);
// console.log(document.querySelectorAll(".element")[0]);
// console.log(document.querySelectorAll("div[name]")[0]);
// console.log(document.getElementsByTagName("div")[0]);
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByName("js")[0]);
// console.log(document.body.children[0]);
// console.log(document.body.childNodes[0]);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

//  2

// for(let i=0;i<document.images.length;i++){
//   document.getElementsByTagName("img")[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
//   document.getElementsByTagName("img")[i].alt = "Elzero Logo";
//   document.images[i].style = "background-color:red" ;
//   console.log(document.images[i].alt);
// };

//  3

// let input1 = document.forms[0][0];
// let output1= document.getElementsByClassName("result")[0];
// console.log(output1);
//  input1.oninput = function(){
//   output1.innerHTML = `{${input1.value}} USD Dollar = ${(input1.value * 15.6).toFixed(2)}} Egyptian Pound`;
// }


//  4

// let divOne = document.querySelector(".one");
// let divTwo = document.querySelector(".two");

// divOne.title = divOne.className;
// divTwo.title = divTwo.className;

// let divOneContent = divOne.innerHTML;
// divOne.innerHTML = divTwo.innerHTML;
// divTwo.innerHTML = `${divOneContent} ${divTwo.attributes.length}`;

//  5
// let img1 = document.querySelectorAll("img");
// for (let i=0;i<img1.length;i++){
//    if (img1[i].hasAttribute("alt")){
//     img1[i].alt = "Old";
//   }else {
//     img1[i].alt= "Elzero New";
//   };
// };


//  6

// let input = document.querySelectorAll(".input");
// submit = document.querySelector("[type= 'submit']");
// box = document.querySelectorAll(".box");

// for(let i = 0; i < input.length; i++){
//     input[i].style.display = "block";
//     input[i].style.boxSizing = "border-box";
//     input[i].style.width = "250px";
//     input[i].style.padding = "10px";
//     input[i].style.margin = "15px auto";
//     input[i].style.borderRadius = ".5rem";
//     input[i].style.border = "1px solid black";
// }

// submit.style.backgroundColor = "gray";
// submit.style.display = "block";
// submit.style.width = "250px";
// submit.style.padding = "10px";
// submit.style.borderRadius = ".5rem";
// submit.style.border = "none";
// submit.style.margin = "15px auto";
// submit.style.color = "white";

// let elNum = document.getElementsByName("elements")[0];
// form = document.forms;
// type = document.querySelector("select");
// text = document.getElementsByName("texts")[0];
// results = document.querySelector(".results");

// form[0].onsubmit = function(el){
//     el.preventDefault();
//     document.querySelectorAll(".box").forEach(el => el.remove());

//     for(let i = 1; i <= elNum.value; i++){
//         let myEl = document.createElement(type.value);
//         let myText = document.createTextNode(text.value);

//         myEl.className = "box";
//         myEl.title = "Element";
//         myEl.id = `id-${i}`;

//         myEl.style.display = "inline-block";
//         myEl.style.width = "100px";
//         myEl.style.margin = "20px";
//         myEl.style.padding = "10px";
//         myEl.style.color = "white";
//         myEl.style.backgroundColor = "blue";
//         myEl.style.textAlign = "center";
//         myEl.style.borderRadius = ".5rem";

//         myEl.appendChild(myText);
//         results.appendChild(myEl);
//     }
// };


















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































