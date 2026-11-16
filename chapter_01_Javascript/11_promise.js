let order=new Promise(function(resolve,reject){
    let foodReady=true;
    if(foodReady)
    {
        resolve("Pizza is delivered");
    }
    else{
        reject("Order cancelled")
    }
});
console.log(order);

let apiCall=new Promise(function(resolve,reject){
    resolve({status:200,body:"user data"})
});
apiCall.then(function(response){
    console.log(response);
    console.log(response.status);
});

let apiCall2=new Promise(function(resolve,reject){
    reject("500 error");
});
apiCall2.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
});
console.log(apiCall2);

let testRun=new Promise(function (resolve,reject){
    reject("Assertion failed");
});
testRun.then(function (msg){
    console.log(msg);
}).catch(function (error){
    console.log(error);
}).finally(function (){
    console.log("will be executed anyways");
});

//caining of promise- sollution to callback hell
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
openBrowser().then(function (msg){
    console.log("Step 1 ",msg);
    return gotoLoginPage();
}).then (function (msg){
    console.log("Step 2 ",msg);
    return enterCredentials();
}).then (function (msg){
    console.log("Step 3 ",msg);
    return clickLogin();
}).then (function (msg){
    console.log(" Step 4",msg);
});

let checkAuth=Promise.resolve("Auth ok");
let checkDB=Promise.resolve("DB ok");
let checkCache=Promise.resolve("Cache ok");

Promise.all([checkAuth,checkDB,checkCache]).then(function(results){
    console.log("All checks: ",results);
});

//promise all setteled- get all the result even when some failed
Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")
]).then(function(results){
    results.forEach((r,i)=>{
        console.log("Test",(i+1),":",r.status,"-",r.value||r.reason);
    })
});

let fastServer=new Promise(function (resolve){
    setTimeout(function(){
        resolve("Fast 100ms");
    }),100
});

let slowServer=new Promise(function (resolve){
    setTimeout(function(){
        resolve("Fast 500ms");
    }),500
});

Promise.race([fastServer,slowServer]).then(function(winner){
    console.log("Winner: ",winner);
})