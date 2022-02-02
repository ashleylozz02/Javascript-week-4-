//EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.

//Example 1:

//Input: [1 , 4 , 7]  Output: 4

//Input: [10, 5]  Output: 7.5

//Input: [1.5, 3, 2.5, 1]  Output: 2
//frist try I did horrble
//let avg = (x) => {
//let sum = 0;
//for (let i = 0; i < x.length; i++) {
//let current = x[i];

// sum += current;
// }
//return current
//console.log(`current: ${current} sum ${sum}`);
//}
//console.log(sum);
//////};
//avg([1, 4, 7]);
//let mean =(x)=>{
//let sum=(x)=sum(x){
// return xsum / array.length;
//so frist we are going to write out steps in psuedo code//

//1.Write a function that takes in array
//2.create variable to hold the average or mean
///3. we going to have loop through an array
//4. we going to have to add variables to each index
//5.divide by the lenght
//6.Return the variable
//7 let use es6
/*
let findAverage = (array) => {
  let average = 0;
  for (let i = 0; i < array.lengh; i++) {
    let currentnum = array[i];
    average += currentNum = array[i];

    average = average / array.lenght;
    return average;
  }
  findAverage([1, 4, 7]);
}
/*
const Average = ["1", "4", "7"];
let averageArray = o;
for (let i = 0; i < averageArray.lenght; i++) {
  averageArrayNum += averageArray[i] / averageArray.lenght;
}
console.log(averageArrayNum);
///////
*/ //reasons is not working becuase in order t find average i need an array.reduce
const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1, 4, 7])); //should print for 4
console.log(average([10, 5])); ///should print for 7.5
console.log(average([1.5, 3, 2.5, 1])); ///should print 2
//expalnation///
// I use a es6 and use const instead of let becuase i wannted average to permananet
//not change in my last atempts i did not use array.reduce he reduce() method executes a reducer function for array element.
//i change my paremeter to a and b then i console log them and it finally works!!
