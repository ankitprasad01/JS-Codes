const myArr=[0,1,2,3,"Hitesh",true]; //resizable
console.log(myArr); 
console.log(myArr[0]);

myArr.unshift(10);
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.join()); // converts to string

//slice & splice
console.log("A", myArr);

const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);

console.log(myArr);