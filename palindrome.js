var number=213,sum=0;
var originalnumber=number;
while(number!=0){
    var reminder=number%10;
    sum=(sum*10)+reminder;
    number=Math.floor(number/10);
}
if (originalnumber==sum) {
    console.log("Palindrome number");
} else {
    console.log("Not palindrome number");
}