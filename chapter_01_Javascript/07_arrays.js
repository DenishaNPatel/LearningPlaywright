let arr=[];     //empty array
console.log(arr);

let arr1=[1,2,3,4,5]; //array of numbers
console.log(arr1);

let arr2=["apple", "banana", "grapes"] //array of strings
console.log(arr2);

let arr3=[1,"apple",true]; //array of mixed data types
console.log(arr3);

//To find the largest value in array
//1st method
const easymax= Math.max(...arr1);
console.log("easily found max number: ",easymax);

//2nd method
let max=arr1[0];
for(let i=1; i<arr1.length; i++)
{
    if(arr1[i]>max)
    {
        max=arr1[i];
    }
}
console.log("largest number in array is ",max);

let arr4=[10,20,30,40,50];
console.log(arr4[0]);   //accessing first element
console.log(arr4[2]);   //accessing third element
console.log(arr4[6]);   //accessing out of bound element (undefined)
console.log(arr4.at(-1)); //accessing last element
console.log(arr4.at(-2)); //accessing second last element

arr2[1]="orange";
console.log(arr2);     //To modify an array, assign the values to the index, it will replace the element

let score=new Array(3);     //Array constructor - create empty array of size 3
console.log("Score ",score);

let score1=new Array(1,2,3); //creates [1,2,3]
console.log("Score1 ",score1);

let test=Array.of(5,10,15,20,25); //Another way of creating array
console.log("test ",test);

let char=Array.from("Hello");   //creating character array from string
console.log(char);

//array methods
arr4.push(60);  //add element to the end of the array
console.log(arr4);

arr4.pop();     //removes the last element of array
console.log(arr4);

arr4.unshift(5);    //add element to the begining of the array
console.log(arr4);

arr4.shift();       //removes the first element of the array
console.log(arr4);

arr4.length;        //returns the length of the array
console.log(arr4.length);

arr4.splice(2,1)    //remove one element at index 2
console.log(arr4);

arr4.splice(2,0,99) //remove 0 element but add 99 at index 2
console.log(arr4);

arr4.splice(1,2,7,14);
console.log(arr4);

arr4.indexOf(14);   //returns the index of the first occurence of the element
console.log(arr4.indexOf(14));

arr4.lastIndexOf(7); //returns the index of the last occurence of the element
console.log(arr4.lastIndexOf(7));

console.log(arr4.indexOf(2)); //returns -1 if element is not present in array

arr4.includes(4)  //returns true or false based on element present in array or not
console.log(arr4.includes(4));

let nums=[10,25,30,45];
nums.find(n=>n>20);     //find- returns first matching element
console.log(nums.find(n=>n>20));

nums.findIndex(n=>n>20);    //findIndex- returns index of first matching element
console.log(nums.findIndex(n=>n>20));

nums.findLast(n=>n>20);    //findLast- returns last matching element
console.log(nums.findLast(n=>n>20));

nums.findLastIndex(n=>n>20);    //findLastIndex- returns index of last matching element
console.log(nums.findLastIndex(n=>n>20));

nums.reverse();     //reverse the order of the elements in the array
console.log(nums);

nums.sort();        //sort the elements in the array
console.log(nums);

//iterating over an array
for(let i=0; i<nums.length; i++)
{
    console.log(nums[i]);
}

//for...of
for(let newarr of nums)
{
    console.log(newarr);
}

//using forEach method to iterate over an array
nums.forEach(function (element)
{
    console.log(element);
});

nums.forEach((ele,index)=>{
    console.log(`${index}:${ele}`);
});

//entries()- index + value
for(let [i,e] of nums.entries())
{
    console.log(i,e);
}

//using map method to create a new array by applying function to each element
let squeredArr=nums.map(function (element){
    return element*element
})
console.log(squeredArr);

let scores=[45,82,91,60,73];
let grades=scores.map(s=>s>70?"Pass":"Fail");
console.log(grades);

//filter- keep element that pass a test
let passing=scores.filter(n=>n>70);
console.log(passing);

//reduce- accumulates to a single value
let total=scores.reduce((sum,s)=>sum+s,0);
console.log(total);

//using filter method to create a new array with element that pass a test
let evenArr=nums.filter(function (element){
    return element%2==0;
});
console.log(evenArr);

let arr5=[10,1,21,2];
arr5.sort((a,b)=>a-b);  //ascending
console.log(arr5);

arr5.sort((a,b)=>b-a);  //descending
console.log(arr5);

//slicing & combining
//slice(start,end)- returns new array, does not mutate
let arr6=[1,2,3,4,5];
console.log(arr6.slice(1,3)); //(start, end-1)
console.log(arr6.slice(-2)); //till -2
console.log(arr6.slice(1)); //if end not specified then will take till the last element

let a=[1,2];
let b=[3,4];
let c=a.concat(b,[5,6]);
console.log(c);

//spread
let d=[...a,...b];
console.log(d);

//join
let s=["Pass","Fail","Skip"].join(",");
console.log(s);

//to check something is an array
let result=Array.isArray([1,2,3]);
console.log(result);
let result1= Array.isArray("a");
console.log(result1);

//every
let r=[80,90,85].every(n=>n>70);
console.log(r);

//some
let x=[80, 60, 85].some(n=>n<70);
console.log(x);

let original=[1,2,3];
let copy=[...original]; //shallow copy, does not change the original
copy.push(99);
console.log(original);
console.log(copy);

original.push(100); //deep copy, change the original
console.log(original);
console.log(copy);

let [first,second,third]=[10,20,30];
console.log(first);
console.log(second);
console.log(third);

let [fourth,fifth,...sixth]=[10,20,30,40,50];
console.log(fourth);
console.log(fifth);
console.log(sixth);

//Multi-Dimentional Array
//1D array- list
let listArr=["pass","fail","pass","fail"];

//2D array- array of arrays(like table or grid)
let matrix=[[1,2,3], [4,5,6], [7,8,9]];

for(let i=0; i<3; i++)
{
    for(let j=0; j<3; j++)
    {
        console.log(matrix[i][j]);
    }
}
console.log(matrix);

let grid=[
    [10,20,30],
    [40,50,60],
    [70,80,90]
];
console.log(grid[0][0]);
console.log(grid[2][1]);

grid[0][0]=99;
console.log(grid);

console.log(grid.length);   //number of rows
console.log(grid[0].length);//number of columns

console.log(grid[grid.length-1][grid[0].length-1]); //to find the last element

let testMatrix=[
    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",180]
];

for(let i=0; i<testMatrix.length; i++)
{
    for(let j=0; j<testMatrix[i].length; j++)
    {
        console.log(testMatrix[i][j]);
    }
    console.log();
}

for(let row of testMatrix)
{
    for(let cell of row)
    {
        console.log(cell);
    }
    console.log();
}

testMatrix.forEach(row=>{
    row.forEach(cell=>{
        console.log(cell)
    })
    console.log();
});

let rowSum=grid.map(row=>row.reduce((a,b)=>a+b,0));
console.log(rowSum);

let n=3;
for(let i=1; i<=n; i++)
{
    let row=" ";
    for(let j=1; j<=i; j++)
    {
        row+="* ";
    }
    console.log(row);
}