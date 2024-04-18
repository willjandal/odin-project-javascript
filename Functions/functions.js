
function add7(num){
    return num + 7;
}

function multiply(num1, num2){
    return num1 * num2;
}

function capitalize(myString){
    myString = myString.toLowerCase()
    finalString = myString.charAt(0).toUpperCase() + myString.slice(1);
    return finalString;
}

function lastLetter(myString){
    myString = myString.slice(-1);
    return myString
}

console.log(add7(10))
console.log(multiply(2,10))
console.log(capitalize('hELLo'))
console.log(lastLetter('JavaScript'))