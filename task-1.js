/*Que 1.

let a = 5;
let b= 10;
let sum = a+b;
console.log(sum);  

*/

/* Que 2. 

let age = 25;
age =30;
console.log(  typeof(age) ,age)  
*/

/* Que 3. 
for (let i = 1; i <= 20; i++) {

  if(i%2!=0)
  {
    console.log(i)
  }
  
}
  */

/* Que 4.

let num = 10;

while (num >= 0) {
  console.log(`Current number: ${num}`);
  num -= 2;
}
  */

/*Que 5.

let fruits = ["Apple", " Banana ", " Mango"," Orange","kivi"];
fruits.push("Guawa")
fruits.shift();
console.log(fruits);  */

/* Que 6.
let arr = [5, 8, 11, 13, 16, 21, 24, 65, 9, 2, 50];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    console.log(`${arr[i]} is greater than 10`);
  } 
}
  */


/* Que. 7 

function product(a,b) {
    console.log(a*b)
}

product(5,6);

*/

/* Que. 8 

let num =9;

if(num %3 ==0){
  console.log("Divisible by 3");
  
}
else{
  console.log(" Not Divisible by 3");
  
}
*/

/* Que 9 

let obj ={
  title :"My Story",
  author :" Ayush Dubey",
  year :" 2022",
  
}
console.log(obj);

obj.genre = 25;
console.log(obj)

*/

/* Que 10 */

let str = "JavaScript is fun!";

console.log("Uppercase", str.toUpperCase());

let firstTenChar =  str.slice(0,10);
console.log("First 10  charaters",firstTenChar);

let replace = str.replace("fun", "awesome");
console.log("Replace Sting ", replace);


