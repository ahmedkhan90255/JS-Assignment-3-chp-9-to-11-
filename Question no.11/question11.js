document.write(
  "<h1> Write a program to create a calculator for +,-,*, / & % <br>using if statements. Take the following input:<br>a. First number <br> b. Second number <br> c. Operation (+, -, *, /, %) <br> Compute & show the calculated result to user.</h1>"
);

var plus = "+";
var inputNum1 = +prompt("Enter First Number");
var inputNum2 = +prompt("Enter Second Number");
var operator = prompt("Enter arithemetic opertaion");

if (operator === "+") {
  alert(inputNum1 + inputNum2);
} else if (operator === "-") {
  alert(inputNum1 - inputNum2);
} else if (operator === "*") {
  alert(inputNum1 * inputNum2);
} else if (operator === "/") {
  alert(inputNum1 / inputNum2);
} else if (operator != "+") {
  alert("Invalid Operator, Please use: +, -, *, /");
} else if (operator != "-") {
  alert("Invalid Operator, Please use: +, -, *, /");
} else if (operator != "*") {
  alert("Invalid Operator, Please use: +, -, *, /");
} else if (operator != "/") {
  alert("Invalid Operator, Please use: +, -, *, /");
}
