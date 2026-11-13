//Assignment Operators =, +=, -=, *=, /=, %=
let x=10;
x+=10;   //same as x=x+10
console.log(x);

x-=3
console.log(x);

x*=2;
console.log(x);

x/=4;
console.log(x);

x%=4;
console.log(x);

let a=10, b=3;
console.log(a);
console.log(b);

//Arithmatic Operators +, -, *, /, %
let sum=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
let mod=a%b;
let expo=a**b; //exponential a^b

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);
console.log(expo);

//Comparision Operators- always give boolean result
console.log(3>4);
console.log(3<4);
console.log(4>=4);
console.log(3<=4);
console.log(5=="5");
console.log(5!="5");
console.log(5!=="5");

//Logical Operators &&, ||, !
let p=true;
let q=false;
console.log(p&&q);
console.log(p||q);
console.log(!p);

//String Operator (concatanation)
let s="Hi ";
s+="Dev";
console.log(s);

//Ternary Operator
let marks= 50;
let result= marks > 35 ? "Pass":"Fail";
console.log(result);

//Type Operator
console.log(typeof "Hello");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof []);
console.log(typeof null);

//Increment and Decrement Operator
let y=5;
let z=y++ + ++y
console.log(y);
console.log(z);

