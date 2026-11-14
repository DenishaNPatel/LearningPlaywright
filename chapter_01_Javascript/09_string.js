//creating a string
//single quotes
let a='Hello';
console.log(a);

//double quote
let b="World";
console.log(b);

//Template literal- allows expression and multiline
let name="Alica";
let msg=`Hello, ${name}! 2+2=${2+2}`;
console.log(msg);

//multiline
let report=`
Test: Login
Status: Pass
Duration: 320ms`;
console.log(report);

//String()- constructor (convert other types)
console.log(String([1,2]));
console.log(String(200));
console.log(String(true));
console.log(String(null));

let str="Hello world!";
console.log(str.length);

//access by index
console.log(str[0]);
console.log(str[7]);
console.log(str.at(-1));

console.log(str.charAt(0));

let url="https://staging.vwo.com/api/login?retry=true"
console.log(url.includes("staging"));
console.log(url.includes("production"));

console.log(url.startsWith("https"));
console.log(url.endsWith("true"));

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

//search()- accepts regex, returns index
console.log(url.search(/login/));

let str1="Login_Test_passed_001";
console.log(str1.slice(0,5));
console.log(str1.slice(11));

console.log(str1.substring(6,10));

console.log(str1.toUpperCase());
console.log(str1.toLocaleLowerCase());

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let msg1="Test:Fail. Retry:Fail.";
let msg2=msg1.replace("Fail","Pass");
console.log(msg2);

let msg3=msg1.replaceAll("Fail","Pass");
console.log(msg3);

let str2="Hello"+" "+"World";
console.log(str2);

let str3="Hello,".concat(" ","World");
console.log(str3);

let str4=`${"Hello"} ${"World"}`;
console.log(str4);

let str5="Pass,Fail,Skip";
console.log(str5.split(","));

let str6="Hello";
console.log(str6.split(""));

let str7="test_login_pass";
console.log(str7.split("_").join(" "));

let parts=["2026","11","14"];
let date=parts.join("-");
console.log(date);