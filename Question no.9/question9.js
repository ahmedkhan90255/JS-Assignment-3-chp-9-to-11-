document.write(
  "<h1> Write a program that checks whether the given input is an <br> even number or an odd number.</h1>"
);

var userInputNum = +prompt(
  "Enter any Number I will check whether if is is even or odd"
);

if (userInputNum % 2 === 0) {
  document.write("<h2>" + userInputNum + "is an even number </h2");
} else if (userInputNum % 2 != 0) {
  document.write("<h2>" + userInputNum + "is an odd number </h2");
}
