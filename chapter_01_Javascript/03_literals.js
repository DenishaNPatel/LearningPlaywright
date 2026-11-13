// Literal- a notation that represents a fixed value written in source code

//Numeric literals
let count= 42;
let nagetive= -100;
let zero= 0;

let h= 0xFF;
let color_hex= 0xFF0000;
console.log(color_hex);

let octal=0o77;
let pi=3.14;

let million= 1e6;
let tiny= 1.5e-4;

//String literals
let single= 'Hello world';
let withDouble= 'she said "Hi"';

let double= "Hello World";
let withSingle= "It's a test";

// Template literal
let name="Denisha";
let full_name= `Hi, ${name}`;
console.log(full_name);

let math= `2+2= ${2+2}`;
console.log(math);

let path= "c:\\users\\name\\file.txt"   //single \ not allowed, use \\
console.log(path);

let address= "https://google.com/search";
console.log(address);

let empty= "";      //empty string
let space= " ";     //single space
let zero1= "0";     //string zero

//Boolean Literals
let isLoggedIn= true;
let hasPermission= false;

//null- intentionally nothing

let selectedItem= null;
let searchResult= null;
console.log(searchResult);

let declareOnly;
console.log(declareOnly);   //will be undefined

console.log(null==undefined); //loose comparision
console.log(null===undefined); //strict comparision
