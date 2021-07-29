const arr = [5,4,9,8,3,2,1];
//===filter of odd values====
// function isOdd(x){
//     return x%2
// }
// const result = arr.filter(isOdd);
// console.log(result);

//filter of even values
//  function isEven(x){
//      return x%2===0;
//  }
//  const result = arr.filter(isEven)
//  console.log(result);

 //filtering greater than 4 values

1.//  function greaterThan(x){
//      return x>4
//  }
//  const result = arr.filter(greaterThan)
//  console.log(result);
2. 
// const result = arr.filter(function greaterThan(x){
//     return x>4
// })
// console.log(result);
3.

const result = arr.filter((x)=> x<4);
console.log(result);










