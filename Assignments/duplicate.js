// const arr = [1, 2, 3, 4, 5, 4, 5, 5];
function duplicateNum(arr) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        result = arr[i];
        break;
      }
    }
    if (result == arr[i]) {
      break;
    }
  }
  if (result == undefined) {
    return "No duplicate found";
  }
  return result;
}
console.log(duplicateNum([1, 2, 3, 4, 5, 6, 7, 5, 4]));
console.log(duplicateNum([1, 2, 3, 2]));
console.log(duplicateNum([9, 10]));
