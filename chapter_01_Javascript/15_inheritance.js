class BasePage{

    constructor (pageName){
        this.pageName=pageName;
    }

    open(){
        console.log("Opening the page");
    }

    close(){
        console.log("Closing the page");
    }
}

class LoginPage extends BasePage
{

}

let page=new LoginPage();
page.open();
page.close();

class Animal{

    constructor (name){
        this.name=name;
    }

    eat(){
        console.log(this.name+" is eating");
    }

    sleep(){
        console.log(this.name+" is sleeping");
    }
}

class Dog extends Animal{

    constructor (name,breed){
        super(name);
        this.breed=breed;
    }

    bark(){
        console.log(this.name+" is barking");
    }
}

let dog=new Dog("Parker","Golden");
dog.eat();
dog.sleep();
dog.bark();
console.log(dog.breed);

class BaseTest{

    setup(){
        console.log("Base: Open Browser");
    }

    teardown(){
        console.log("Base: Close Browser");
    }
}

class APITest extends BaseTest{
    //method over riding
    setup(){
        console.log("APITest: Open Browser");
    }

    teardown(){
        super.teardown();
        console.log("APITest: Close Browser");
    }
}

let test=new APITest();
test.setup();
test.teardown();

class TestCase{
    execute(){
        console.log("Running generic test")
    }
}

class unitTest extends TestCase{

    execute(){
        console.log("Running unit test- checking one function");
    }
}

class E2ETest extends TestCase{

    execute(){
        console.log("opening browser");
    }
}

class ApiTest extends TestCase{

    execute(){
        console.log("Running API test- Testing API");
    }
}

let tests=[new unitTest(),new E2ETest(),new ApiTest()];
tests.forEach(function(test){
    test.execute();
});

class BasePage1{

    constructor(name){
        this.name=name;
    }

    open(){
        console.log("[Open]",this.name);
    }
}

class AuthPage extends BasePage1{

    login(user){
        console.log("[Login]",user);
    }
}

class AdminPage extends AuthPage{

    constructor(){
        super("Admin Panel"); //if constructor not found in immediate parent class, it will search one level up
    }

    manageUsers(){
        console.log("[Admin] managing users");
    }
}

let admin=new AdminPage();
admin.open();
admin.login("Super admin");
admin.manageUsers();

let auth=new AuthPage();
//auth.manageUsers(); -object can access parent method but not child

//multiple inheritance- not allowed in javascript, possible with mixin
let LoggerMixin=function(Base){
    return class extends Base{
        log(msg){
            console.log("[LOG]",msg);
        }
    }
}

let ScreenshotMixin=function(Base){
    return class extends Base{
        takeScreenshot(){
            console.log("[SCREENSHOT] captured");
        }
    }
}

class TestCase1{

    constructor(name){
        this.name=name;
    }

    run(){
        console.log("Running ",this.name);
    }
}

class SmartTest extends ScreenshotMixin(LoggerMixin(TestCase1)){

    constructor (name){
        super(name);
    }
}

let t=new SmartTest("Login Flow");
t.run();
t.log("Test startrd");
t.takeScreenshot();

//Hierarchical inheritance
class Father{

}
class Son1 extends Father{

}
class Son2 extends Father{
    
}