console.log(greeting);
var greeting="Hello";
console.log(greeting);

/* console.log(greet);    //will get reference error in case of let
let greet="Hello";
console.log(greet); */

function getUserStatus()
{
    console.log(status_code);
    var status_code="Active";
    console.log(status_code);
}

getUserStatus();

/* console.log(MAX_RETRIES);  //will get reference error in case of const
const MAX_RETRIES=3;
console.log(MAX_RETRIES); */