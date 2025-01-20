/*  Que. 1  Sum of two integers

let a =10;
let b= 12;
console.log(a+b)
*/

/*  Que.2  Print the messege along with values and sum
 
 let a =15;
 let b= 20;
console.log("a:" ,a);
console.log("b:",b);
console.log("sum of a+b :",a+b)

*/
/* Que.3  Accept two integers from user and print the

 sum 
 let a = +prompt(" enter first  number ");
 let  b = +prompt( " enter second number ");
 console.log(a+b);

 /*  Que.4  Accept the User's name, age and print in following manner  
 Hello Shery, you are 12 years old.  

 let name = prompt(" Enter a name ");
 let age  = +prompt ( "Enter your age ");
 console.log('Hello',name);
  console.log('You are ' +age +' year old');

*/

/* Que. 6   Accept two numbers from user and swap their values  ,  Part 2 - Swap without using third variable 
let a = 30;
let b = 20;
let temp;

temp = a;
a = b;    
b = temp; 

console.log(a, b, temp);

a= a+b;
b= a-b;
a= a-b;
console.log("a ", a , "b " ,b);
*/

/* 
Que 7. Accept the length and width of a rectangle. Calculate & print the area and perimiter.

let length = +prompt("enter a length of Reactangle ")
let width = +prompt("enter a width  of Reactangle ")
console.log("Area of Rectangle is : " ,length*width);
console.log("Parimeter  of Rectangle is : " , 2*(length+width));

*/

/* Que 8.  Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

let amount = principal * Math.pow((1 + rate / n), n * time);
let compoundInterest = amount - principal;


let principal = +prompt("Enter the value of Principal");
let rate = +prompt("Enter the value of Rate (in percentage, e.g., 5 for 5%)") / 100; 
let time = +prompt("Enter the value of Time (in years)");
let n = +prompt("Enter the number of times interest is compounded per year");

let finalAmount = principal * Math.pow((1 + rate / n), n * time); 
let ci = finalAmount - principal;

console.log("The value of CI:", ci.toFixed(2));
console.log("The value of Final Amount is:", finalAmount);

*/

/*  Que 9.   Accept the three sides of triangle and calculate the area using herons formula 

let a = +prompt("Enter the value of  a");
let b = +prompt("Enter the value of  b");
let c= +prompt("Enter the value of  c");

let s =( a+b+c)/2;

let area = Math.sqrt( s* (s-a)* (s-b)*(s-c))
console.log( "the area using herons formula ", area)

*/

/* Que 10 . Find surface area of sphere

let redius  = +prompt("Enter the value of redius ");
const pi = 3.14;

let area = 4*pi*redius*redius;
console.log( area);

 */

/* Que 11 . Find circumference and area of circle


let redius  = +prompt("Enter the value of redius ");
const pi = 3.14;
let circumference = 2*pi*redius;
let areaOfCircle  = pi*redius*redius;

console.log( " circumference of circle :", circumference);
console.log(" Area of Circle :" , areaOfCircle);

 */

/* Que 12 .  Accept two numbers and print the greatest between them 

let a = +prompt(" enter first number  ");
let b = +prompt(" enter  second  number  ");

if( a> b) {
  console.log(` you give ${ a} ,
     ${a } is greater then ${b}`)
}

 else if( a< b) {
  console.log(` you give ${ b} , ${b} is greater then ${a}`)
}

else{
  console.log(" valid only  numbers ");
}
 
 */
/* Que 13 & 14.   Accept the gender from the user as char and print the respective greeting message
      Ex - Good Morning Sir (on the basis of gender)

14 -Extend the previous program and handle the wrong inputs.

      Print Good Morning sir for input m or M & Good morning Maam for input F or f 
      else print Wrong Input

let msg = prompt("Enter your gender (M or F)");

if (msg == "M" || msg == "m") {
  console.log("Good Morning Sir");
} else if (msg == "F" || msg == "f") {
  console.log("Good Morning Ma'am");
} else {
  console.log("Wrong  input.");
}

*/

/*  Que 15 . Accept an integer and check whether it is an even number or odd. 

let num = +prompt( " Enter a  number ");

if( num %2 ==0){
  console.log( " Number is even ")
}
else {
  console.log( " Number is odd ")
}
 */

/* Que. 16  Accept name and age from the user. Check if the user is a valid voter or not. 
 Vaid - Hello Shery, You are a valid voter.
Invalid - Sorry Shery, you can't cast the vote. 


let name =  prompt(" enter your name ");
let age  = +prompt (" enter your age ")
if (age>= 18)
  console.log( ` Hello  ${name} , You are valid voter    `)

else{
  console.log( ` Sorry   ${name} , You are invalid voter  and you are eligible for vote in ${18-age } years ` )
}

*/

/* Que. 17  Accept a day number between 1-7 and print the corresponding dayname. 

let day = +prompt("Enter day value  ");
switch (day) {
  case 1:
    console.log(" Monday")
    break;
  case 2:
    console.log("Tuesday")
    break;
  case 3:
    console.log("wednesday")
    break;
  case 4:
    console.log("Thursday")
    break;
  case 5:
    console.log("Friday")
    break;
  case 6:
    console.log("Saturday")
    break;
  case 7:
    console.log("Sunday")
    break;

  default:
    console.log(" Invalid number... please give input under 1 - 7")
    break;
}

*/

/* Que 18. Accept three numbers and print the greatest among them

let firstNum = +prompt("Enter First number  ");
let secondNum = +prompt("Enter second  number  ");
let thirdNum = +prompt("Enter third number  ");

if(firstNum> secondNum && firstNum > thirdNum ){
  console.log( firstNum," First number is greater ")
}
else if( secondNum>firstNum && secondNum> thirdNum){
  console.log( secondNum," second  number is greater ")
}
else if( secondNum==firstNum && secondNum==thirdNum){
  console.log(" All numbers are equal" )
}
else if( thirdNum==firstNum && thirdNum==secondNum){
  console.log( thirdNum," third   number is greater ")
}
else {
  console.log(" give some input ")
}
 
*/

/* Que 19.   Accept a year and check if it a leap year or not (google to find out what's a leap year) 

let year = +prompt("Enter a year to check if it's a leap year"); 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

*/
/* Que 20 , Que 21 */

/* Que. 22 Accept an english alphabet from user and check if it is a consonent or a vowel; 

let alphabet = prompt(" Enter   Alphabet  ").toLowerCase();
switch (alphabet) {
  case "a":
    console.log(" it's Vowel")
    break;
  case "e":
    console.log(" it's Vowel")
    break;
  case "i":
    console.log(" it's Vowel")
    break;
  case "o":
    console.log(" it's Vowel")
    break;
  case "u":
    console.log(" it's Vowel")
    break;
  default:
    console.log(" it's Consonent")
    break;
}
*/

/* Que.23 Accept an integer and Print hello world n times 
let num = +prompt( "How many times you print Hello world ")

for (let i = 0; i < num; i++) {
  
  console.log( "Hello World ")
}

*/

/*Que.24 Print natural number up to n.

let n = +prompt(" enter value of n")
for (let i = 1;i <= n; i++) {
  console.log(i);
  
}
 */

/* Que.25 Reverse for loop. Print n to 1 
let n = +prompt("Enter the value of n for Reverse loop to print n to 1");
for (let i = n; i >= 1; i--) {
  console.log(i);
}

*/

/*Que.26 Take a number as input and print its table
5 * 1 = 5
5 * 2 = 10 ... up to 10 terms 
let table = +prompt("Enter a number which table you Print ");
console.log(`Table of ${table} is:`);
for (let i = 1; i <=10; i++) {

  console.log(` ${table}*${i} = ${table*i}`)
}
 */

/*  Que.27  Sum up to n terms. 

let n = +prompt("Enter the value of n to calculate the sum of first n terms");
 let sum = 0 ;
 for (let i = 0; i <= n; i++) {
  sum += i;
  }
 console.log(`The sum of the first ${n} terms is ${sum}`)
 
// other way...
//   sum = n *(n+1)/2
//  console.log(sum) 

/* Que.28   Factorial of a number 

let fact = +prompt("Enter the number to find its factorial");
let result = 1;

for (let i = 1; i <= fact; i++) {
  result *= i;  // result = result * i 
}

console.log(`The factorial of ${fact} is ${result}`);

*/
/* Print the sum of all even & odd numbers in a range seperately.
let start =  +prompt("Enter starting of number :");
let end  =  +prompt("Enter ending of number :");
let even =0;
let odd =0;

for (let i = start; i <= end ; i++) {
 if(i%2==0){
  even += i;  // even = even+i

 }
 else{
  odd += i;

 }
  
}
console.log(`The sum of even numbers between ${start} and ${end} is: ${even}`);
console.log(`The sum of odd numbers between ${start} and ${end} is: ${odd}`);

*/

/*Que. 29  Print all the factors of a number.

let num =20;
for (let i = 1; i <=num; i++) {
  
  if (num % i == 0){
    console.log(i);
  }
  
}
*/
/* Que.31 Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43 
let num =20;
let sum = 0;
for (let i = 1; i <=num; i++) {
  
  if (num % i == 0){
    console.log(i);
    sum += i;
 
   }
}
console.log(`Sum of all factors of ${num} is: ${sum}`);

*/

/* Que. 32  Check if the number is Prime or not.

function checkPrime (number){
  if (number <=1){
    return false;
  }
  for(let i=2; i<number ; i++)
    {
    if(number%i===0){
      return false;
    }
    

  }
  return true;
}
let num =+prompt( " Enter a value and check it's prime or not ")
if( checkPrime(num)){
  console.log("Prime")
}
else{
  console.log("not Prime ")
}
  */

/* Que.33 Write a program to take two inputs a, b & find the value of a  raised to the power of b.
 Ex - a = 2, b = 5
 OP - 2^5 = 32 

 let a =+prompt(" Enter value of a")
 let b =+prompt(" Enter value of b")
 console.log(a**b);

*/

/* Que.34 Seprate each digit of a number and print it on the new line ex - 123 
  OP
    3
    2
    1 
   let value =852;
   let temp =value;
   while (value!=0) {
    let rem = value%10;
    console.log(rem)
    value=Math.floor(value/10)
   }
  */

/* Que.35  Sum of digits of a number, 936 = 18

let value = 936;
let sum = 0;
 
while (value != 0) {
    let rem = value % 10;
    sum = sum + rem;      
    value = Math.floor(value / 10);
    console.log(value);   
}
 
console.log("Sum of digits:", sum);
 
*/

/* Que.36  Accept a number and print its reverse

 
let num = +prompt("Enter a number: ");
let rev = 0;
 
while (num != 0) {
  let rem = num % 10;
  rev = rev * 10 + rem;     
  num = Math.floor(num / 10); 
  console.log(num);         
}
 
console.log("Reversed Number:", rev); 

*/

/* Que.37    Accept a number and check if it is a pallindromic number (If number and its reverse are equal)
     Ex - 12321 - Rerverse - 12321 

     let num = +prompt("Enter a number");
     let temp = num;
     let rev = 0;
     
     while (num != 0) {
         let rem = num % 10;
         rev = rev * 10 + rem;
         num = Math.floor(num / 10);
     }
     
     if (temp === rev) {
         console.log("The number is a palindrome");
     } else {
         console.log("The number is not a palindrome");
     }
     
      */

/* Que.37 Accept a number and check if it is a pallindromic number (If number and its reverse are equal)
  Ex - 12321 - Rerverse - 12321 


function isPalindromic (num){
return num.toString() === num.toString().split('').reverse().join('')
}

let num = +prompt(" Enter a  number to check number is palindromic or not");
console.log(num ,isPalindromic(num) ? "number is palindromic" :" number is not palindromic");

*/

/*  Que.38 Accept a number and check if it is a strong number or not (Sum of factorial of each digit)
       Ex- 145 = 1! + 4! + 5! = 145 

function factorial (n){
  let fact =1;
  for (let i = 1; i <= n; i++) {
  
    fact = fact *i; 
  }
  return fact;
}
console.log(factorial(4));

function isStrongNumber(num){
  let sum =0;
  let temp = num;
  while(temp>0){
    let digit =temp % 10;
    sum = sum + factorial(digit);
    temp = Math.floor(temp/10);
  }
  return sum === num;
}

let number = 165;
if (isStrongNumber(number)) {
  console.log(number,"this number is strong number  ");
}
else{
  console.log(number,"this numbe is not strong number")
}

 */

/* Que.39 - Automorphic number 5 = 25 = 625 = 390625, 6=36, 76 = 5776  


function automorphicNumber(num) {
let square =num*num;
let numStr = num.toString();
let sqrStr = square.toString();
return sqrStr.endsWith(numStr);
}
let check = +prompt(" Enter a number to check Automorphic");
if(automorphicNumber(check)){
  console.log(check ," Number is Automorphic")
}
else{
  console.log(check," Number is not Automorphic")
}

*/

/* Que.40   Print hello until user gives wrong input using do while 




do {
 let  userInput = prompt("Enter a valid input (enter 'exit' to stop):");

  if (userInput !== 'exit') {
    console.log("Hello");
  }

} while (userInput !== 'exit');

console.log("Exited the loop!");

 */

/* Que.41  Make a choice based calculator using do while 

let num = prompt("Enter your arithmetic operation choice [ + , - , * , / ]");

do {
  if (["+", "-", "*", "/"].includes(num)) { 
    let a = +prompt("Enter the first value:");
    let b = +prompt("Enter the second value:");

    if (num === "+") {
      console.log("Sum:", a + b);
    } else if (num === "-") {
      console.log("Difference:", a - b);
    } else if (num === "*") {
      console.log("Product:", a * b);
    } else if (num === "/") {
      if (b !== 0) {
        console.log("Quotient:", a / b);
      } else {
        console.log("Division by zero is not allowed.");
      }
    }
  } else {
    console.log("Invalid operation. Exiting.");
  }
  break;
} while (true);

*/

/* Que.42  Print Weekday using Switch

let days =1;
switch (days) {
  case 1:
    console.log("Monday")
    
    break;
      case 2:
    console.log("Tuesday")
    
    break;
      case 3:
    console.log("Wednesday")
    
    break;
      case 4:
    console.log("thursday")
    
    break;
      case 5:
    console.log("friday")
    
    break;
      case 6:
    console.log("saturday")

      case 7:
    console.log("Sunday")
    
    break;
  
  default:
    console.log("enter value 1-7 ")
    break;
}
*/

/* Que. 43  Accept an english alphabet from user and check if it is a consonent or a vowel (using switch case);

let alphabet = prompt("Enter Alphabet ").toLowerCase();

switch (alphabet) {
  case "a":
    console.log("vowel");
    break;
  case "e":
    console.log("vowel");
    break;

  case "i":
    console.log("vowel");
    break;

  case "o":
    console.log("vowel");
    break;

  case "u":
    console.log("vowel");
    break;


  default:
    console.log("consonent");
    break;
}

 */

/* Que 44. Project - Guess Game  */
let guessNum = parseInt(prompt("Enter a valid number"));

if (isNaN(guessNum)) {
  console.log("Invalid number. Please enter a valid numeric value.");
} else {
  let ranNum = Math.random() * 10; 
console.log(`Your number :  ${guessNum}`)
  console.log(`Random Number: ${ranNum}`);

  if (guessNum === ranNum) {
    console.log("Numbers are exactly equal.");
  } else if (guessNum < ranNum) {
    console.log("Random number (ranNum) is greater ");
  } else if (guessNum > ranNum) {
    console.log("Your guess (guessNum) is greater");
  } else {
    console.log("Condition not matched ");
  }
}
