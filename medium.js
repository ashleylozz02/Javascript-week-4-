///MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

///You are given a target value to search. If found in the array return its index, otherwise return -1.

//You may assume no duplicate exists in the array.

//Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem.

//Example 1:

//Input: nums = [4,5,6,7,0,1,2], target = 0

//Output: 4

//Example 2:

////Input: nums = [4,5,6,7,0,1,2], target = 3

//Output: -1.

//myfristattempt///
//psusedo code steps
///1. we are going to build a function
//2. we can loop this or use a method call .indexof
//3. we are going to use return and use negative numbers
//4. basically we going to search in roated sorted array.
/*let search =(nums,target)=>{
let start=0,end=nums.length -1;
while(start<=end){
    const mid=Math.floor((start+end)/2);
    //start-mid mid-end
    if (nums[mid]>=nums)[start]{
     if(nums[mid]>=nums[start])
    }
    //if(nums[mid]===target)return mid;
    //if(nums[mid]>target){
        //start=mid+1;
    //} else {
    // end=mid-1;
    //}
}
return -1;
};
*/
const findIndexOfNumber = (numberToFind) => {
  let numberArray = [4, 5, 6, 7, 0, 1, 2];
  return numberArray.indexOf(numberToFind);
};
console.log("Example 1: ", findIndexOfNumber(0));
///example two//

console.log("Example 2: ", findIndexOfNumber(3));
