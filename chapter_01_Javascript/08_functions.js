/*function declaration:
  function name(parameter)
  {
    //code that you want to execute
  }

  calling function:
  name(argument); 
*/

function greet()
{
    console.log("Hello");
}
greet();

function grrtByName(name)
{
    console.log("Hello ",name);
}
grrtByName("Denisha");

function sayHi()
{
    return "Hi";
}
let geeting=sayHi();
console.log(geeting);

function add(a,b)
{
    return a+b;
}
let sum=add(5,10);
console.log(sum);

//function expression
let sayHello=function (name){
    console.log("Hello "+name+ "!");
}
sayHello("BoB");

//arrow function
let greetUser= (name)=> `Hello ${name}`;
console.log(greetUser("Charlie"));

let doubleIt=n=>n*2;
console.log(doubleIt(10));

//Immediately Invoked Function Expression (IIFE)
//no need to call the function
(function ()
{
    console.log("Hello world")
})();

//function with default paremeters
function greetPerson(name="Guest")
{
    console.log("Hello "+name+"!");
}
greetPerson();
greetPerson("David");

//rest parameters
function logResults(suitName,...results)
{
    console.log(`Suit: ${suitName}`);
    console.log(`Results: ${results}`);
}
logResults("Auth Suit", "Pass", "Fail", "Pass", "Skip");

function addition(a,b,c)
{
    return a+b+c;
}
let num=[1,2,3];
let ans=addition(...num);
console.log(ans);

function hasError(...codes)
{
    return codes.some(n=>n>=400);
}
let responseCodes=[200,201,404];
let errorPresent=hasError(...responseCodes);
console.log(errorPresent);

//return multiple values via array or object
function aaa()
{
    return [1,2,3,4,5];
}
console.log(aaa());

//closure concept
function outer()
{
    console.log("outer called");
    function inner()
    {
        console.log("inner called");
    }
    return inner;
}
outer();
let fn_inner=outer();
fn_inner();

function makeCounter(start=0)
{
    let count=start;
    return  {
        increment(){ count++; },
        decrement(){ count--; },
        get(){return count;}
    }
}
let counter=makeCounter(2);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());

//Higher order functions- a function that takes function as an argument or returns a function
function runWithLogging(testfn,testName)
{
    console.log(`starting: ${testName}`);
    let result=testfn();
    console.log(`finished: ${testName}->${result}`);
    return result;
}
function loginTest()
{
    return "Pass";
}
runWithLogging(loginTest,"Login Test");

//pure function
function calculatePassRate(total,passed)
{
    return ((passed/total)*100);
}
console.log(calculatePassRate(10,7));

//callback function- a function passed as an argument to another function to be called later
function runTest(testName,callback)
{
    let result="Pass";
    callback(testName,result)
}
function onComplete(name,result)
{
    console.log(`${name} finished with ${result}`);
}
runTest("Login Test", onComplete);

function placeholder(item,callback1)
{
    console.log("Placing an order");
    callback1();
}
function print()
{
    console.log("callback- done with the order");
}
placeholder("Burger",print);

//callback with anonymus function
placeholder("Burger",function (){
    console.log("This is also function");
});

//callback with arrow function
placeholder("Pizza", ()=>{
    console.log("callback with arrow function");
});

//anonymus callback
console.log("Test1: started");
setTimeout(()=>{
    console.log("Test2: API response received");
},2000);
console.log("Test3: moving to next");

//callback hell
function openBrowser(callback)
{
    console.log("opening the browser");
    setTimeout(()=>{
        console.log("step 1- Browser starting");
        callback();
    },500);
}
function goToLoginPage(callback)
{
    setTimeout(()=>{
        console.log("step 2- Login page loaded");
        callback();
    },500);
}
function enterCredentials(callback)
{
    setTimeout(()=>{
        console.log("step 3- credentials entered");
        callback();
    },500);
}
function clickLogin(callback)
{
    setTimeout(()=>{
        console.log("step 4- Login button clicked");
        callback();
    },500);
}
openBrowser(function (){
    goToLoginPage(function (){
        enterCredentials(function (){
            clickLogin(function (){
                console.log("Test completed")
            })
        })
    })
});



