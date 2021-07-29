function reverseString(str) {
    console.log("the value incoming: "+ str)
    if(str == undefined) {
        return "dont send undefined pls!!"
    }
    if(str.length > 10) {
        return "pls send less than 10 char"
    }
    let result = '';
    for (let ch of str) {
        result = ch + result;
    }
    return result;
}

console.log(reverseString("siri"));
console.log(reverseString("ramya"));
console.log(reverseString("thiru"));
console.log(reverseString("i'm the string"));
console.log(reverseString("[]"));
console.log(reverseString());
console.log(reverseString(""));

