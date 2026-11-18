function openBrowser(){
    return new Promise( function (resolve){
        resolve("Browser opened");
    })
}

function gotoLoginPage(){
    return new Promise( function (resolve){
        resolve("Login Page Loaded");
    })
}

function enterCredentials(){
    return new Promise( function (resolve){
        resolve("Credentials entered");
    })
}

function clickLogin(){
    return new Promise( function (resolve){
        resolve("Logged in successfully");
    })
}

//converting the above promise program into async/await
async function runLoginFlow() {
    let step1=await openBrowser();
    console.log(step1);

    let step2=await gotoLoginPage();
    console.log(step2);

    let step3=await enterCredentials();
    console.log(step3);

    let step4=await clickLogin();
    console.log(step4);
}
runLoginFlow();

async function runTest() {
    let result=await Promise.resolve("Login Test passed");
    console.log(result);

    let result2=await Promise.resolve("Dashboard Test passed");
    console.log(result2);
}
runTest();

//with Promise, catch can be used
//with async/await, try/catch can be used

async function testAPI() {
    try{
         let result3=await Promise.reject("503 service unavailable");
         console.log(result3);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("clean up");
    }
}
testAPI();

function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name,"200 ok");
        },1000)
    })
}

async function sequentialTest() {
    console.log("Starting of the Test");
    let start=Date.now();

    let r1=await apiCall("Login");
    console.log(r1);

    let r2=await apiCall("Dashboard");
    console.log(r2);

    let r3=await apiCall("Report");
    console.log(r3);

    console.log("Time: ",(Date.now()-start),"ms");
}
sequentialTest();