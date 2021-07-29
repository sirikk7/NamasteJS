const users = [
    {firstName: "shirisha" , lastName: 'Korrambali' , age:26},  
    {firstName: "akshya" , lastName: 'Saini' , age:26},
    {firstName: "priyanka" , lastName: 'Chopra' , age:35},
    {firstName: "ramya" , lastName: 'Thirumalesh' , age:27},  
    {firstName: "ramudu" , lastName: 'Donga' , age:26},  

  ]
//   const result = users.map(x => x.firstName + x.lastName)
//   console.log(result);

// const result = users.reduce(function(acc,curr){
//     if(acc[curr.age]){

//         acc[curr.age] = ++acc[curr.age] 
//     }
//     else{

//         acc[curr.age] = 1;
//     }
//     return acc;
// },{});
// console.log(result);

const result = users.filter((x) => x.age <= 26).map((x) => x.firstName)
console.log(result);