//Conditional Statements
let age=20;

if(age>18)
{
    console.log("Eligible to vote");
}
else
{
    console.log("Not eligible to vote");
}

let marks=75;
if(marks>=70)
{
    console.log("First Class");
}
else if(marks>=35 && marks<70)
{
    console.log("Second Class");
}
else
{
    console.log("Fail");
}

let day=3;

switch(day)
{
    case 0:
        console.log("Sunday- Holiday");
        break;
    case 1:
        console.log("Monday- Sprint Planning");
        break;
    case 2:
        console.log("Tuesday- Development");
        break;
    case 3:
        console.log("Wednesday- Code Review");
        break;
    case 4:
        console.log("Thursday- Testing");
        break;
    case 5:
        console.log("Friday- Deployment & Retro");
        break;
    case 6:
        console.log("Saturday- Holiday");
        break;
    default:
        console.log("Invalid Day")

}
    