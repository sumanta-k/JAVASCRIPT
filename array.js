let x;


// console.log(arr);


// console.log(arr);

// const strArray = ['hapi','muni','bou','nitu'];

// console.log(strArray);

// // push tiki to the end of the strArray

// strArray.push('tiki');
// console.log(strArray);

// // take out tiki 

// strArray.pop();
// console.log(strArray);

// //use array's length property 

// strArray[strArray.length] = 'tiki';
// console.log(strArray);

// //take out tiki

// strArray.pop();
// console.log(strArray);


const arr = new Array(10, 20, 30, 40);
//add 5 at 1st index

arr[0] = 5;
arr.push(50);
arr.pop();

arr.unshift(10);
arr.shift();

x = arr.slice(-3);
x = arr.slice(2,3);

x = arr.splice(1,1,"hapi");
x = arr.splice(1,0,20);
x = arr.splice(2,1);

console.log(x);
console.log(arr);