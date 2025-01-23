/* 1. Basic Console Usage (10 Questions) 

let name = "Ayush Dubey";
let hobby  ="Singing ";
console.log(`My name  is ${name} and 
My  Favorite hobby is ${hobby}`);

console.log(45*2-10)

let CurrentYear  = new Date().getFullYear();
console.log("Current Year ",CurrentYear);

let firstName  = "Ayush";
let LastName  = " Dubey";
console.log(firstName+LastName);

let value =15;
console.log("current Value ",value);
value++;
console.log("Updateed Value ",value);

console.error("Somthing went wrong ")

let num = 12;
let seq = num*num;
console.log(seq);


let myvalue = true;
console.log(typeof myvalue); 

let age =23;

console.log(age>18? "greater than 18 ": "less than 18")

console.log(100/0);

*/

/*2. Variables and Data Types (10 Questions) 

let a =10;
console.log(a);

const pi = 3.143;
console.log(pi);

let name = "Ayush";
console.log("Before reassignment:", name); 
name = "Uday"; 
console.log("After reassignment:", name); 

let nullValue = null;
console.log(typeof(nullValue));

let num = "25"
console.log(typeof num);

let isPresent = true;
console.log(typeof isPresent);

let userName = "Ayush Dubey"
let userAge  =  23;
let isMarried = false;
console.log( userName, typeof(userName));
console.log( userAge, typeof(userAge));
console.log( isMarried, typeof(isMarried ));

let empty;
console.log(typeof empty);

let emptyVar = undefined;
console.log( typeof emptyVar);

const arr =[10,5,6,35,23,29]
console.log(typeof(arr) ,arr);
arr=[11,20,32,45,68,85]
console.log(arr);

*/

/*  3. Loops (10 Questions) 

for (let i = 0; i <=50; i++) {
  console.log(i);
}  

let num = 1;
let sum = 0;
while (num<=10) {
  sum += num;
  num++;

} 
console.log(sum);

 
let str = "JavaScript";
for (const char of str) {
  console.log( char)
}


for (let i = 1; i <=20; i++) {
  if(i%2==0){  
  }
  else{
    console.log(i);  
  }  
}


let num = 5;
do {
  console.log(num)
  --num;
 
} while (num >= 1);


let num =5;
let fact =1;
for (let i = 1; i <= num ; i++) {
fact = fact*i;
}
console.log(`Factorial of ${num} is ${fact}`);



for (let i = 1; i <=5; i++) {
  let row =" ";
  for (let j = 1; j <=5; j++) {
    row += j+" ";
    
  }
  console.log(row);
}



let arr = [1, 2, 3, 4];
let reverce_arr =[];

for (let i = arr.length-1; i >= 0; i--) {
  reverce_arr.push(arr[i]);
  
}
console.log(reverce_arr);


let num =1;

while (num <= 100) {
  if(num%5 === 0){
    console.log(num);
  }
     num++;
}



let obj = {
  name: "Ayush",
  age: 23,
  city: "Panna",
  profession: "Developer"
};

for (const key in obj) {
  console.log(obj, obj[key]); 
}

*/

/* 4. Arrays (10 Questions) 

let myMovies = ["Rockstar", 'Kal ho na ho', 'Jab we met ', 'Stranger Things ', ' Veer-Zara'];
console.log(myMovies);


console.log(myMovies[1])



myMovies.unshift("Jailer ", "jawan")
console.log(myMovies);



myMovies.pop();
console.log(myMovies);



let sliceMovies = myMovies.slice(0, 5);
console.log(sliceMovies);


let myMoviesIndexOf = myMovies.indexOf("Rockstar")
console.log(myMoviesIndexOf)



console.log(myMovies.includes("Breaking Bad"));


let arr = [1, 2];
let brr = [3, 4];
console.log(arr.concat(brr));


let unSortArr = [5, 2, 9, 1];
console.log("unsorted array", unSortArr, "sorted array", unSortArr.sort());


let originalArr = [10,8,3, 9, 7, 5, 44, 32];
let copyArr1 = [...originalArr];
console.log(copyArr1);

*/


/*5. Functions (10 Questions) 

function EvenOdd(num) {
  if(num % 2 === 0){
    console.log( num, ", Number is Even")
  }
  else{
      console.log( num, ", Number is odd")
  }
  
}
EvenOdd(5);


function circleArea(redius) {
  const pi = 3.143;
  let area = pi*redius*redius;
  console.log(area);
}
circleArea(7);



function arraySum(arr) {
  let sum =0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  
    
  }
  console.log(sum);
 
}
arraySum([1,2,3,4,5]);



function checkString(str, char) {
  return str[0] === char;
}

console.log(checkString("Hello", "H")); // true



function findMax(a,b) {
  if (a>b) {
    console.log("maximum number ", a)
    
  }
  else{
    console.log("maximum number ", b)
  }
  
}

findMax(78,20);



function factorial(num) {
  let fact =1;
  for (let i = 1; i <= num; i++) {
   fact = fact*i;
  }
  console.log("factorial is ",fact);
}
factorial(7);


function strReverse(str) {
  return str.split("").reverse().join("");

}
console.log(strReverse("naman"));




function largerstNum(arr) {
  let largenum  = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] >  largenum){
      largenum = arr[i];
    }
  }
return largenum;
}
console.log("largest number:", largerstNum([1,2,3,10,5,8]));


let str = "Hello World";

function kebab() {
  console.log(str.split(" ").join("-").toLowerCase());
}

kebab(); 


function sayHello(str) {
  console.log("Hello World!");
}
sayHello();

*/


/*6. Conditionals (10 Questions) 

let num = 5;
if(num>0){
  console.log("Number is positive"); 
}
else if (num<0){
  console.log("Number is Negative"); 
}
else{
  console.log("zero"); 
}




let year = 2025;
if(year%4==0){
  console.log(year, "Leap Year");
  
}
else{
  console.log(year, "Normal Year");
}



let userAge = 19;
if(userAge >=18){
  console.log(" Can vote");
}
else{
  console.log("Not Vote");
}



let days =5;
switch (days) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Undefined value");
    break;
}




let num = 9;
if(num%3==0 && num%5==0){
  console.log("Number is Divisible by both 3 and 5"); 
}
else{
  console.log("Not divisible"); 
}  



let num =5;
if (num <= 100 && num > 80) {
  console.log("Student Grade is A+ ");


}
else if (num < 80 && num >= 70) {
  console.log("Student Grade is A ");

}

else if (num < 70 && num >= 60) {
  console.log("Student Grade is B ");

}

else if (num < 60 && num >= 50) {
  console.log("Student Grade is C ");

}
else if (num < 50 && num >= 40) {
  console.log("Student Grade is D ");

}
else if (num < 40 && num >= 33) {
  console.log("Student Grade is E ");

}
else{
  console.log("Fail");
  
}

let str1 ="Ayush";
let str2 ="Ayush";
if(str1 === str2){
  console.log("Both string are equal's");
  
}
else{
  console.log("srings are not equal;s");
  
}


let num = 5;
console.log(num % 2 == 0 ? "even" : "odd");



let firstNum =40;
let secNum  =50;
let thirdNum =60;
if (firstNum >secNum && firstNum >thirdNum) {
  console.log("First Number is gerater ");
  
}
else if (secNum > firstNum && secNum >thirdNum){
  console.log("Second Number is greater ");
  
}
else if (thirdNum > firstNum && thirdNum >secNum){
  console.log("Third  Number is greater ");
  
}
else{
  console.log("all Number are equal's");
  
}


let price = 1000;
let discount = 0;

if (price < 1000) {
  discount = price * 0.90;
  console.log("Discounted price:", discount);
} else if (price >= 1000 && price <= 2000) {
  discount = price * 0.85; 
  console.log("Discounted price:", discount);
} else {
  discount = price * 0.80;
  console.log("Discounted price:", discount);
}

*/

/* 7. Object Basics (10 Questions) 

let obj = {
  name:"Ayush Dubey",
  age :23,
  city:" Panna"
}
console.log(obj);

 

obj.isStudent =true;

console.log(obj);

console.log(obj["city"]);

delete obj.age;
console.log(obj);



function logKeys(obj) {
  let keys = Object.keys(obj);
  keys.forEach(key=>{
    console.log(key);
    
  })
  
}
logKeys({
  name:"Ayush",
  age:23,
  city:"Panna"
});


let bookArr = [{
  title: "mylife",
  author: "sam"
}, {
  title: "yourlife",
  author: "ayush"
},
{
  title: "ourlife",
  author: "kabir"
}
];
console.log(bookArr);

console.log(bookArr[1]);

console.log(bookArr.includes("price"));

function countkey(obj) {
  return Object.keys(obj).length;

}
const myObj = {
  name: "ayush",
  age: 23,
  city: "panna"
}
console.log(countkey(myObj));


//merge object 

let obj1 = {
  name: "ayush",
  age: 23,
  city: "panna"
};

let obj2 = {
  name: "uday",
  age: 22,
  city: "bhopal"
};

let result = Object.assign({}, obj1);
console.log(result);
console.log(obj1);
console.log(obj2);

*/


/* 8. String Manipulation (10 Questions)

let str = "Hello Javascript";
console.log(str.length);


let last4Char = str.slice(-4);
console.log(last4Char);

let lowerCase = str.toLocaleLowerCase();
console.log(lowerCase);


let sentence = "Learning JavaScript is fun and exciting!";
let  words = sentence.split(" ");
console.log(words);

let position  = sentence.indexOf("a");
console.log(position);

let myStr = "I love JavaScript";
let replaceStr = myStr.replace("JavaScript", "JS"); 
console.log(replaceStr);

let repeatstr = myStr.repeat(3);
console.log(repeatstr);


function containWords(str ,words) {
  return str.includes(words); 
}
 
let result1 = containWords("How are you","are")
console.log(result1);



let str = " play with javascripts    ";
let removeSpace = str.trim();

console.log(removeSpace);



function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

let result = countVowels("Hello World");
console.log(result); 


*/

/* Mixed Practice (20 Questions) 

function returnEvenNum(arr) {
  return arr.filter(num => num %2 ===0)
}
let myarr =[10,15,11,9,7,6];
let result =  returnEvenNum(myarr)
console.log(result);



function occurrencesValue(arr ,value) {
  let count =0;
  for (let i = 0; i < arr.length; i++) {
  if (arr[i]===value) {
    count++;
  }  
  }
  return count;
}
let number =[10,20,30,10,5];
let toCount =10;
console.log(occurrencesValue(number,toCount) );



function palindromic(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let strreverse = cleanStr.split("").reverse().join("");
  return cleanStr === strreverse;
}

let name ="madam";
console.log(palindromic(name));



function printPattern(rows) {
  for (let i = 0; i <=rows; i++) {
  console.log("*".repeat(i));  
  }
}
printPattern(5);


function arrSeq(arr) {
  return arr.map(num => num*num)
  
}
let number = [1,2,3];
console.log(arrSeq(number));




  let oddSum = 0;
for (let i = 1; i <=50; i++) {

  if(i % 2!==0){
    oddSum += i;
  }
  
}
console.log(oddSum);



let obj ={
  name:"Ayush",
  surname:"dubey"
}
function fullName(first ,second) {
  console.log(obj.name +" "+obj.surname);
 
}
fullName();


let str ="10";
let num = Number(str);
let result = num+5;
console.log(result);



let arr =[2,3,4,5,6];
let reverseArr = [];
for (let i = arr.length-1; i >=0; i--) {

 reverseArr.push(arr[i]);
  
}
console.log(reverseArr);


function emptyArr(arr) {
if(arr.length == 0){
  console.log("array is empty");
  
}
else{
  console.log("array not empty");
  
}
  
}
let brr =[5];
emptyArr(brr);


const today = new Date();
const day = String(today.getDate()).padStart(2,"0");
const month = String(today.getMonth() + 1).padStart(2, "0");

const year = today.getFullYear();

console.log(`Current Date : ${day}/${month}/${year}`);



function findSmallest(arr) {
//   return Math.min(...arr)
// }
// let numbers =[10,20,2,6,8];
// console.log(findSmallest(numbers));

// Without Methods 

let smallest  = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
  
}
return smallest;
}

let arry = [10,5,50,90,75];
console.log(findSmallest(arry));




function genrateFibonachi(n) {
  if(n <= 0) return [];
  if(n===0) return [0];

  let fibonachi = [0,1]

  for (let i = 2; i < n; i++) {
    fibonachi.push(fibonachi[i-1]+fibonachi[i-2]);
    
  }
return fibonachi;



}
console.log(genrateFibonachi(5));



function findIdxFirstVow(str) {
  let vowels = "aeiouAEIOU"; 
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) { 
      return i; 
    }
  }
  
  return -1; 
}


let myStr = "dyush";
let result = findIdxFirstVow(myStr);
console.log(result); 



function uniqueVal (arr) {
    return [...new Set(arr)]; 
  
}
let brr =[1,2,5,2,3,1,8];
console.log(uniqueVal(brr));



let array = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array, ...array2];  // using spread opre.

console.log(array3); 

*/

const count = (s) => s.trim().split(/\s+/).length;

const s = "Hello, this is a simple test.";
console.log(count(s));

95