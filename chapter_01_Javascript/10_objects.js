//object- key value pair
let student1={name:"Pond", age:25};
console.log(student1);

let student2={name:"Phuwin"};
let student3={name:"William", age:21, phone:1234567890};

//object key will not be in double quote, JSON key will be
let JSONstudent4={"name":"Est", "age":25, "Phone":987654321};

let a={status:"Pass"};
console.log(a.status);
console.log(a["status"]);

//space is not allowed in key
let b={status:"Pass",Status:"Fail"}; //keys are case sensitive
console.log(b["status"]);
console.log(b["Status"]);

let c=a;
c.status="Fail";
console.log(a.status);

let d={status:"Pass"};
let e={status:"Pass"};
console.log(d===e);     //false-two seperate object

student2.city="NYC";
student2.age=23;
console.log(student2);

let config={};
config.browser="Chrome";
config.timeout=3000;
config.timeout=5000;    //will consider latest value
console.log(config);

delete config.browser;
console.log(config);

let obj={name:"Login"};
console.log(Object.getOwnPropertyDescriptor(obj,"name"));

const calculator={
    value:0,
    add(n){
        this.value+=n;
        return this;
    },
    subtract(n){
        this.value-=n;
        return this;
    }
}
console.log(calculator.add(5).subtract(10));

const user={name:"Dew", age:24, city:"Bangkok"};

//basic destructuring
const {name,age}=user;
console.log(name);
console.log(age);

//renaming variables
const {name:userName,age:userAge}=user;
console.log(userName);
console.log(userAge);

//default values
const {country="Thiland"}=user;
console.log(country);

const obj1={a:1,b:2};
const obj2={c:3,d:4};
const merged={...obj1,...obj2};
console.log(merged);

//this keyword
const user2={
    firstName:"Tee",
    sayMyName(lastName)
    {
        this.firstName+=lastName;
        return this.firstName;
    }
}
console.log(user2.sayMyName(" Teeradech"));

const user3={
    firstName:"Perth",
    lastName:"Tanapon",
    get fullName()
    {
        return this.firstName+this.lastName;
    },
    set fullName(value)
    {
        [this.firstName,this.lastName]=value.split(" ");
    }
}

console.log(Object.keys(merged));
console.log(Object.values(merged));
console.log(Object.entries(merged));

for(const key in user2)
{
    console.log(key);
}

Object.keys(user).forEach(key=>{
    console.log(key);
});

Object.entries(user).forEach((key,value)=>{
    console.log(`${key}: ${value}`);
});

const student5={};
let at='a';
student5[at]=(student5[at] || 0);
console.log(student5);