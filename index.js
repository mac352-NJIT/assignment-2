function reverseString() {
    const str = document.getElementById("inputBox").value;
    let reversestr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversestr += str[i];
    }
    document.getElementById("outputBox").value = reversestr;
}

function isPalindrome() {

const strNum = document.getElementById("palindromeInput").value;
const convertintoString = strNum.toString();
let isPalindrome = true;

for (let i = 0; i < convertintoString.length; i++) {
    if (convertintoString[i] != convertintoString[convertintoString.length - 1 -i]) {
        isPalindrome = false;
    }
}

    if (isPalindrome) {
        document.getElementById("palindromeOutput").value = convertintoString + " is a palindrome";
    }
    else {
        document.getElementById("palindromeOutput").value = convertintoString + " is not a palindrome";
    }

}


function billCalculator() {

const total = parseFloat(document.getElementById("inputBox").value);
const tipPercentage = parseFloat(document.getElementById("tipBox").value);

let tipAmount = (tipPercentage / 100) * total;
let totalBillAmount = total + tipAmount;

document.getElementById("outputBox").value = (totalBillAmount).toString();

}