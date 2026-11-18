class Car{
    //javascript allows only one constructer per class, no constructor overloading

    constructor(name){
        this.name=name;
    }
    drive(){
        console.log("Driving the Car ",this.name);
    }
    printDetailsCar(){
        console.log("Details of the Car ",this.name);
    }
}
let hundai_car=new Car("i10");
hundai_car.drive();

class Credentials{
    #apikey;    //private variables are start with #

    constructor (user,key){
        this.user=user;     //public
        this.#apikey=key;   //private
    }
    getAuthHeader(){
        return "Bearer "+this.#apikey;
    }
}
let cred=new Credentials("admin","#secret_key_1234");
console.log(cred.user);
console.log(cred.getAuthHeader()); //only in method private field can be accessed

//console.log(cred.apikey); //undefined
//console.log(cred.#apikey); //error

class TestRunner{
    static totalTests=0;
    static passCount=0;

    constructor (name,passed){
        this.name=name;
        TestRunner.totalTests++;
        if(passed){
            TestRunner.passCount++;
        }
    }
    static summary(){
        return TestRunner.passCount+"/"+TestRunner.totalTests+"Passed";
    }
}
new TestRunner("Login",true);
new TestRunner("Signup",false);
new TestRunner("Cart",true);
new TestRunner("Checkout",true);

console.log(TestRunner.summary());

class Person{
    #child1;
    #child2;

    constructor (name,ch1,ch2){
        this.name=name;
        this.#child1=ch1;
        this.#child2=ch2;
    }
    getChild1(){
        return this.#child1;
    }
    setChild1(changed_name){
        this.#child1=changed_name;
    }
}

let p=new Person("Pond","Gemini","Fourth");
p.setChild1("Phuwin");
console.log(p.getChild1());