function reverseString(str) {
    let reversestr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversestr += str[i];
    }
    return reversestr;
}

function isPalindrome(numbers) {
// let val = numbers/100;
// let rem = numbers%10;
// if (val == rem) {
// return numbers + " is a palindrome";
// } else {
// return numbers + " is not a palindrome";
// }

let strNum = numbers.ToString();
for (let i = 0; i < strNum.length() - 1; i++) {
    if (strNum[i] == strNum[-i]) {
        return strNum + " is a palindrome";
    }
    else {
    return strNum + " is not a palindrome";
    }

}
}

function billCalculator(total, tipPercentage) {

let tipAmount = (tipPercentage / 100) * total;
return (total + tipAmount).ToString();

}