// function isArmstrong(num) {
//     // 1. Convert the number to a string to easily loop through digits
//     const numString = num.toString();
//     const numDigits = numString.length;
//     let sum = 0;

//     // 2. Add each digit raised to the power of numDigits to the sum
//     for (let char of numString) {
//         sum += Math.pow(parseInt(char), numDigits);
//     }

//     return sum === num;
// }

console.log(isArmstrong(153));  
console.log(isArmstrong(1634)); 
console.log(isArmstrong(123));


function isArmstrong(num){
    // ensure numeric comparison: coerce input to Number
    // num = Number(num);
    // if (!Number.isFinite(num) || Number.isNaN(num) || num < 0) return false;

    const numStr = String(num);
    const numDigits = numStr.length;

    let sum = 0;
    for (let char of numStr) {
        sum += Math.pow(parseInt(char, 10), numDigits);
    }

    return sum === num;

}


function checkAndShow(){
    let val = document.getElementById("val").value;
    const n = Number(val);
    const resultEl = document.getElementById("result");
    if (isArmstrong(n)) {
        resultEl.innerHTML = "Armstrong";
    } else {
        resultEl.innerHTML = "Not Armstrong";
    }
} 


function checkAndShow2(){
    let val = document.getElementById("val").value;
    const n = Number(val);
    let para = document.getElementById("p");

    if(isArmstrong(n)){
        para.textContent = "It is an Armstrong Number";
    }
    else{
        para.textContent = "It is not an Armstrong Number";
    }

    document.getElementsByTagName("body")[0].append(para);
}