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

*/

