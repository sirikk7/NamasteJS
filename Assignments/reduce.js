
//  //sum or max
//  function findSum(arr) {
//      let sum = 0;
//      for(let i = 0; i < arr.length; i++){
//         sum =sum +arr[i];
//     }
//     return sum;  
//     }
//  console.log(findSum(arr));

//      const result = arr.reduce(function(acc,curr){
//          acc = acc+curr;
//          return acc;
//      },0);
//      console.log(result);

// //Find max
// function findMax(arr){
//     let max = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         }
//         return max;
// }
// console.log(findMax(arr));

const arr = [5,4,3,2,1];
const result = arr.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0);
console.log(result);
 



