document.write(
  "<h1> Write a program to check whether the given number is <br>divisible by 3. Show the message to the user if the number <br> is divisible by 3 </h1>"
);

var divisibleNumber = 3;
var inputNum = +prompt("Enter any Number");

if (inputNum % 3 === 0) {
  document.write("<h2>The " + inputNum + " is divisible by 3");
} else if (inputNum % 3 != 0) {
  document.write("<h2>The " + inputNum + " is not divisible by 3");
}
