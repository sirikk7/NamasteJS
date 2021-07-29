const arr = [5,4,3,2,1];

// function double(x){
//     return x*2;
// }
 
// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }

1.// const result = arr.map(double);
// console.log(result);

2.// const result = arr.map(function double(x){
//     return x*2;
//      });
// console.log(result); //function inside function

3.// const result =arr.map((x)=> x*2)
// console.log(result); //another way of  map()

const result =arr.map((x)=> x.toString(2));
console.log(result);

