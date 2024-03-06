document.write(
  "<h1>Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”</h1>"
);

var cityName = prompt("Enter Your City");
if (cityName === "Karachi") {
  document.write("<h2>'Welcome to the city of lights'</h2>");
} else if (cityName === "karachi") {
  document.write("<h2>'Welcome to the city of lights'</h2>");
} else if (cityName === cityName) {
  document.write("<h2>'Welcome to " + cityName + "'</h2>");
}
