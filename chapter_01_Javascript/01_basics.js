console.log("Hello");

// This is comment- this line of code will not execute
/* Multi-line comment
    Author:
    Date:
*/

//Identifiers- name of variable(a), Literal- value of variable(10), Operator =

var a=10; //global scope
console.log(a);

function printHello()
{
    console.log("Hello");
    var a=20;           //function scope
    console.log("a= ",a);
    if(true)
    {
        var a=30;
        console.log("new a= ",a);
    }
    console.log("new a= ",a);
}

//calling a function
printHello();

//var allows reallocation
var b=5;
var b=10    //no error, reallocation is allowed
console.log(b); //10

//let- block scopped
let c=30;   //global scope
console.log(c);

function printValue()
{
    console.log("Inside function");
    var c=40;           //local scope
    console.log("c= ",c);
    if(true)
    {
        let c=50;
        console.log("new c= ",c);
    }
    console.log("new c= ",c);
}

//calling a function
printValue();

const pi=3.14;  //constant variable
console.log(pi);
/* pi= 3.14159;     //will get typeerror if reassignig value to const variavle
console.log(pi); */
