const myArr1=[1,2,3,4,5];
const myArr2=[6,7,8,9,10];

myArr3=myArr1.concat(myArr2);
console.log(myArr3);

//myArr1.push(myArr2);
//console.log(myArr1);

//drop operator
console.log("Testing");
const nums=[...myArr1, ...myArr2];
console.log(nums);